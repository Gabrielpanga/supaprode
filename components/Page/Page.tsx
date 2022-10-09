import { Head } from '../Head'
import { Footer } from '../Footer'

import { Props } from './Page.types'

const Page = ({
  title = '',
  children,
  description,
  image,
  url,
  footer = true,
}: Props) => (
  <>
    <Head
      title={title || 'Supaprode'}
      description={description || 'Supaprode Qatar2022'}
      image={image}
      url={url}
    />
    {children}
    {footer && <Footer />}
  </>
)

export default Page
