import Avatar from '@/components/contentful/Avatar'
import ContentfulImage from '@/components/contentful/ContentfulImage'
import DateComponent from '@/components/contentful/DateComponent'
import RichText from '@/components/rich-text'
import Link from 'next/link'

export function PostCard({ post }) {
  const { title, slug, excerpt, cover, author, date } = post.fields
  return (
    <li className='rounded-md overflow-hidden shadow-md'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={cover.fields.file.url}
            width={cover.fields.file.details.image.width}
            height={cover.fields.file.details.image.height}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            <DateComponent dateString={date} />
          </div>
          <p className='text-base mb-4'>{excerpt}</p>
          <Avatar name={author.fields.name} avatar={author.fields.avatar} />
        </div>
      </Link>
    </li>
  )
}

export function PostHeader({ post }) {
  const { title, cover, author, date } = post.fields

  return (
    <>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        <Avatar name={author.fields.name} avatar={author.fields.avatar} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={cover.fields.file.url}
          width={cover.fields.file.details.image.width}
          height={cover.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.fields.name} avatar={author.fields.avatar} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}

export function PostBody({ post }) {
  const { content } = post.fields

  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}
