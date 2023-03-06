import RichText from '@/components/rich-text'

export function PostBody({ post }) {
  const { content } = post.fields

  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}
