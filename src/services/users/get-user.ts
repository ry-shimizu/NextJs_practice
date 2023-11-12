import { fetcher } from '@/util'
import { ApiContext, User } from 'types/data'

export type GetUserParams = {
  id: number
}

/**
 * ユーザーAPI (個別取得)
 * @param context  APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    },
  )
}

export default getUser
