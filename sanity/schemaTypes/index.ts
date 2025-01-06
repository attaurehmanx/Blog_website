import { type SchemaTypeDefinition } from 'sanity'
import { Post } from '../schemas/Post'
import { tag } from '../schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Post, tag],
}
