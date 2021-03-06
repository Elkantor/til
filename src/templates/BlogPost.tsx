import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import decorate from 'rehype-decorate'
import sectionize from 'rehype-sectionize-headings'

import { BlogNav } from '../components/BlogNav'
import BlogPostContent from '../components/BlogPostContent'
import Layout from '../components/Layout'
import { MainHeading } from '../components/MainHeading'
import { PostPagination } from '../components/PostPagination'
import { HastNode, PageNode } from '../types'

export interface Props {
  location: string
  pageContext: {
    previous: PageNode
    next: PageNode
  }
  data: {
    markdownRemark: PageNode & {
      htmlAst: HastNode
    }
    site: {
      pathPrefix: string
      siteMetadata: { title: string; siteUrl: string }
    }
  }
}

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const { data } = this.props
    const post = data.markdownRemark
    const { previous, next } = this.props.pageContext
    const { title, date, description: frontDescription, author, url_author } = post.frontmatter
    const { pathPrefix } = data.site
    const { siteUrl } = data.site.siteMetadata
    const { slug } = post.fields

    const htmlAst = transformHtmlAst(post.htmlAst)
    const sections = htmlAst.children || []
    const description = frontDescription || post.excerpt

    // The first part of the excerpt that will be promoted to the title card
    const titleBody = (sections[0] && sections[0].children) || []
    const siteName = 'Today I Learned'

    // Absolute URL of the current article
    const absurl = collapseSlashes(`${siteUrl}/${pathPrefix}/${slug}`)
    const image = `${absurl}/twitter-card.jpg`

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{title}</title>
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet"></link>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={image} />
          <meta name='twitter:creator' content={'@theelkantor'} />

          <meta property='og:type' content='article' />
          <meta property='og:title' content={title} />
          <meta property='og:image' content={image} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={absurl} />

          <meta name='description' content={description} />
        </Helmet>
        <MainHeading back />
        <div>
          <BlogNav />
          <BlogPostContent
            {...{ title, date, titleBody, body: sections.slice(1), author, url_author }}
          />
        </div>

        <PostPagination {...{ previous, next }} />
      </Layout>
    )
  }
}

function transformHtmlAst(ast: HastNode): HastNode {
  ast = decorate(ast)
  ast = sectionize(ast, {
    h2: {
      bodyClass: [],
      bodyTag: 'h2-body',
      sectionClass: [],
      sectionTag: 'h2-section'
    },
    h3: {
      bodyClass: [],
      bodyTag: 'h3-body',
      sectionClass: [],
      sectionTag: 'h3-section'
    }
  })
  return ast
}

/**
 * @example
 *     collapseSlashes('https://a/b//c/d')
 *     // => 'https://a/b/c/d'
 */

function collapseSlashes(str: string) {
  return str.replace(/([^:])\/\/+/g, '$1/')
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      pathPrefix
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        url_author
      }
    }
  }
`
