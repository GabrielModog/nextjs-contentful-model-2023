const { default: ContentfulImage } = require('./ContentfulImage')

const Avatar = ({ name, avatar }) => {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-4'>
        <ContentfulImage
          src={avatar.fields.file.url}
          layout='fill'
          className='roudned full m-0'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  )
}

export default Avatar
