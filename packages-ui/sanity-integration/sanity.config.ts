import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'mhs-dev',
  title: 'Molitio Hosted Sites',

  projectId: 'wzyge8ne',
  dataset: 'development',

  plugins: [structureTool(), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'hu', title: 'Hungarian' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: [
      ...schemaTypes.map(type => type.name)
    ],
  })],
  schema: {
    types: schemaTypes,
  },
})
