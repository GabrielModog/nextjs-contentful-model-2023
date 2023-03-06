import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function RichText({ content, options = {} }) {
  return <>{documentToReactComponents(content, options)}</>
}
