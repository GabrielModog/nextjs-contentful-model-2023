import Avatar from '@/components/contentful/Avatar'
import ContentfulImage from '@/components/contentful/ContentfulImage'
import DateComponent from '@/components/contentful/DateComponent'

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
