import { default as NextHead } from 'next/head'

import { Props } from './Head.types'

const Head = ({ title, description, image, url }: Props) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
  </NextHead>
)

export default Head
