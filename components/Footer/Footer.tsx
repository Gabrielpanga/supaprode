import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
        Done for testing :D
      </a>
    </footer>
  )
}

export default Footer
