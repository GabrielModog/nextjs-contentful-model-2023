import { previewClient } from '@/lib/contentful/client'

export default async function handler(req, res) {
  const { secret, slug } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token!' })
  }

  const response = await previewClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  })

  post = response.items[0]

  if (!post) {
    returnres.status(401).json({ message: 'Invalid slug!' })
  }

  res.setPreviewData({})
  const url = `/posts/${post.fields.slug}`
  res.writeHead(307, { Location: url })
  res.end()
}
