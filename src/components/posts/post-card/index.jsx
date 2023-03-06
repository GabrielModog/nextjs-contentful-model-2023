import Link from 'next/link'

import Avatar from '@/components/contentful/Avatar'
import ContentfulImage from '@/components/contentful/ContentfulImage'
import DateComponent from '@/components/contentful/DateComponent'

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
