import type { NextPage } from 'next'
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/supabase'
import { Page } from '../components/Page'

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user) {
    return <button onClick={() => supabase.auth.signOut()}>Sign out</button>
  }
  return props.children
}

function AuthBasic() {
  return (
    <Container supabaseClient={supabase}>
      <Auth supabaseClient={supabase} magicLink={true} providers={['google']} />
    </Container>
  )
}

const Home: NextPage = () => {
  const { user } = Auth.useUser()
  return (
    <Page>
      <main className="grid grid-cols-12 container px-0 lg:py-8 mx-auto lg:gap-16">
        <div className="col-span-12 lg:col-span-9 xl:col-span-7">
          <h1>Welcome to Supaprode {user?.email}</h1>
          <AuthBasic />

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </main>
    </Page>
  )
}

export default Home
