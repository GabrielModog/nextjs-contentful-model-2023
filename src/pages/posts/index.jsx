import { PostCard, PostList } from '@/components/posts'
import { client } from '@/lib/contentful/client'

const Posts = ({ posts }) => {
  return (
    <section className='section'>
      <div className='container'>
        <PostList posts={posts} />
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
