import { RecentPost } from '@/components/posts'
import { client } from '@/lib/contentful/client'
import Link from 'next/link'

export default function Home({ recentPost }) {
  return (
    <div>
      {recentPost ? (
        <>
          <h1 className='text-3xl font-bold'>Recent Post</h1>
          <div className='flex mt-10'>
            <RecentPost post={recentPost.fields} />

            <Link
              href='/posts'
              className='mx-10 flex items-center px-4 rounded-sm bg-stone-200 duration-300 hover:bg-stone-400'
            >
              <h3 className='text-md uppercase font-bold'>
                See
                <br /> more
                <br /> posts
              </h3>
            </Link>
          </div>
        </>
      ) : (
        <h1 className='text-3xl font-bold'>Nothing post yet...</h1>
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  return {
    props: {
      recentPost: response.items[0],
      revalidate: 60
    }
  }
}
