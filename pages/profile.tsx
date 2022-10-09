import { User, withPageAuth } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/ui'
import Link from 'next/link'
import { Page } from '../components/Page'

export default function Profile({ user }: { user: User }) {
  const { user: authUser } = Auth.useUser()

  return (
    <Page>
      <h2>User Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(authUser, null, 2)}</pre>

      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">
        {new Date(user.last_sign_in_at || '').toLocaleString()}
      </code>
      <Link href="/">
        <a className="button">Go Home</a>
      </Link>
    </Page>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
