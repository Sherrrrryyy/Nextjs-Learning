import Link from 'next/link'
import React from 'react'

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      title: "Getting started with Next.js",
      slug: "getting-started-with-nextjs",
      description: "A beginner guide to setting up your first next.js project"
    },
    {
      id: 2,
      title: "Understanding Next.js Routing",
      slug: "understanding-nextjs-routing",
      description: "Learn how works in Next.js, including pages and dynamic routings"
    },
    {
      id: 3,
      title: "Next.js vs React: Key Differences",
      slug: "next.js-vs-react",
      description: "A beginner guide to setting up your first next.js project"
    },
    {
      id: 4,
      title: "Building a Blog with Next.js",
      slug: "building-a-blog-with-nextjs",
      description: "Let's just build a blog with Next.js and see how it works"
    }
  ]

  return (
    <div className='lex flex-col items-center min-h-screen p-8 pb-20'>
      <h1 className='text-5xl flex items-center'>All Blogs</h1>

      {
        blogs.map((data) =>
          <Link href={`/blogs/${data.slug}`} key={data.id}>
            <h1 className='border border-black p-3 m-2'>{data.title}</h1>
          </Link>)
      }

    </div>
  )
}

export default Blogs