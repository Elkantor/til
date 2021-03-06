/*
 * BlogPostContent
 * ===============
 *
 * Blog post content
 */

import cn from 'classnames'
import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { HastNode } from '../types'
import CSS from './BlogPostContent.module.css'
import BlogPostTitle from './BlogPostTitle'
import H2Section from './H2Section'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import ScrollIndicator from './ScrollIndicator'

interface Props {
  body: HastNode[]
  title: string
  date: string | void
  titleBody: HastNode[]
  author: string
  url_author: string
}

interface State {
  activeSection?: number
}

/**
 * Blog post content.
 *
 * @example
 *     <BlogPostContent htmlAst={htmlAst} />
 */

const BlogPostContent = (props: Props) => {
  const { body, titleBody, title, date, author, url_author } = props
  const [state, setState] = useState({ activeSection: 0 })
  const sections = body
  const count = sections.length + 1

  return (
    <div className={cn(CSS.root)}>
      {/* Scroll indicator */}
      <ScrollIndicator count={count} active={state.activeSection} />

      {/* First section (index 0) */}
      <Waypoint
        onEnter={doHandleEnter({ setState, idx: 0 })}
        topOffset='63%'
        bottomOffset='35%'
      >
        <span>
          <BlogPostTitle {...{ title, date, body: titleBody, author, url_author }} />
        </span>
      </Waypoint>

      {/* H2 sections (index 1..n) */}
      {sections.map((h2section, idx) => (
        <Waypoint
          onEnter={doHandleEnter({ setState, idx: idx + 1 })}
          topOffset='63%'
          bottomOffset='35%'
        >
          <span>
            <H2Section
              {...h2section.properties}
              active={
                idx + 1 === state.activeSection ||
                (idx === 0 && state.activeSection === 0)
              }
            >
              <PostContent body={h2section.children} />
            </H2Section>
          </span>
        </Waypoint>
      ))}

      <PostFooter {...{ title, date }} />
    </div>
  )
}

const doHandleEnter = ({ setState, idx }) => () => {
  setState({ activeSection: idx })
}

export default BlogPostContent
