import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wzyge8ne',
    dataset: 'development',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'l3u6aiuy82jburhaf9q97x7e',
    autoUpdates: true,
  }
})
