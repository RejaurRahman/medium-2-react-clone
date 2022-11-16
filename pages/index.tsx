import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Medium 2.0 Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
          {
            posts.map(post => {
              return (
                <Link
                  key={post._id}
                  href={`/posts/${post.slug.current}`}
                >
                  <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                    {
                      post.mainImage && (
                        <img
                          src={
                            urlFor(post.mainImage).url()!
                          }
                          alt={post.title}
                          className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                        />
                      )
                    }
                    <div className='flex justify-between p-5 bg-white'>
                      <div>
                        <p className='text-lg font-bold'>
                          {post.title}
                        </p>
                        <p className='text-xs'>
                          {post.description} by {post.author.name}
                        </p>
                      </div>
                      <img
                        src={
                          urlFor(post.author.image).url()!
                        }
                        alt={post.author.name}
                        className='h-12 w-12 rounded-full'
                      />
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    description,
    mainImage,
    author -> {
      name,
      image,
      slug
    }
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts
    }
  }
}
