import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはサーバーサイドレンダリングされたページ</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetServerSidePropsが実行`
  console.log(message)

  return {
    props: {
      message,
    },
  }
}

export default SSR
