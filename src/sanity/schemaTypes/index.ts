import { type SchemaTypeDefinition } from 'sanity'
import { about } from './about'
import { projects } from './projects'
import { projectsCategory } from './project-category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, projects, projectsCategory],
}
