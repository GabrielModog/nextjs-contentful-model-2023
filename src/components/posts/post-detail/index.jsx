const { PostBody } = require('./post-body')
const { PostHeader } = require('./post-header')

export function PostDetail({ post }) {
  return (
    <>
      <PostHeader post={post} />
      <PostBody post={post} />
    </>
  )
}
