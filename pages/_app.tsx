import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'
import { UserProvider } from '@supabase/auth-helpers-react'

import { supabase } from '../utils/supabase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabase}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </UserProvider>
  )
}

export default MyApp
