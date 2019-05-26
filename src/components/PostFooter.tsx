import { Link } from 'gatsby'
import React from 'react'
import CSS from './PostFooter.module.css'

export interface Props {
  title: string
  date: string | void
}

const PostFooter = (props: Props) => {
  const { title, date } = props

  return (
    <div className={CSS.root}>
      <div className={CSS.body}>
        <p>
          You have just read <b><span>{title}</span></b>,{' '}
          {date ? (
            <>
              written on <span>{date}</span>.
            </>
          ) : (
            <>an unpublished draft.</>
          )}{' '}
          <br></br>This is <Link to='/'>Today I Learned</Link>, a collection of random
          tidbits learned through our work using <a href='https://www.raylib.com'>raylib</a>.
        </p>
        <p>
          <Link to='/'>
            <strong>&larr; More articles</strong>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PostFooter
