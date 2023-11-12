import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SampleImage from '/public/sample.jpg'
import CartProduct from '@/components/organisms/CardProduct'
import Button from 'components/atoms/Button'
import ShapeImage from 'components/atoms/ShapeImage'
import Text from 'components/atoms/Text'

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページ</p>
        <p>{message}</p>
        <Link href="/practice/ssr">Go to ssr</Link>
        <Link href="/practice/ssg">
          <button>Go to ssg</button>
        </Link>
        {/* <Button variant="primary">ボタンコンポーネント</Button>
        <Button variant="secondary">ボタンコンポーネント</Button>
        <Button variant="danger">ボタンコンポーネント</Button>
        <Text fontsize="extraSmall">Thank you</Text>
        <ShapeImage src={SampleImage} shape="circle" alt="" /> */}
        <CartProduct
          id={0}
          imageUrl="/public/sample.jpg"
          title="激売れ商品"
          price={1000}
        />
        <p>
          <Image
            src={SampleImage}
            alt="画像"
            width="500"
            height="500"
            layout="responsive"
          />
        </p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async () => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`

  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default ISR
