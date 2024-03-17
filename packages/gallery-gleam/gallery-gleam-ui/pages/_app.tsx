import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppShell } from '@molitio/ui-core'

function GalleryGleam({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default GalleryGleam
