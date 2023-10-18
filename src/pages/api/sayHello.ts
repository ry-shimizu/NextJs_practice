import { NextApiRequest, NextApiResponse } from 'next'

type HelloResponse = {
  name: string
}

export default (
  request: NextApiRequest,
  response: NextApiResponse<HelloResponse>,
) => {
  response.status(200).json({ name: 'Ryo' })
}
