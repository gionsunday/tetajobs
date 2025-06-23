import React, { useState } from 'react'
import { BlockSingle } from '../../components/blogs/BlockSingle'
import JunkBlog from '../../components/blogs/JuckBlog'
import blogPosts from '../../data/data'
import { useParams } from 'react-router-dom'

export const BlogSingle = () => {
  const [post, setPost] = useState(blogPosts[0]) // Default to the first post
  
  const { title } = useParams()
  // console.log(title)
  return (
    <>

      <section className="w3l-inner-banner">
        <div className="wrapper">
        </div>
      </section>
      <section className="w3l-breadcrumns bg-white">
        <div className="wrapper">
          <ul>
            <li><a href="index.html">Home</a> <span className="fa fa-angle-double-right"></span></li>
            <li>Blogs <span className="fa fa-angle-double-right"></span></li>
            <li>Blog Details</li>
          </ul>
        </div>
      </section>
      <JunkBlog />
    </>
  )
}
