import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.Test', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {process.env.TEST}
      {process.env.NEXT_PUBLIC_TEST}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('process.env.Test', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return {
    props: {},
  }
}

export default EnvSample
