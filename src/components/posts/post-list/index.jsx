import { PostCard } from '..'

export function PostList({ posts }) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
      {posts.map((post, i) => (
        <PostCard key={post.fields.slug} post={post} />
      ))}
    </ul>
  )
}
