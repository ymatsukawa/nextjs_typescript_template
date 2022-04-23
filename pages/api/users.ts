import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../libs/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<User>>
) {
  const users = [
    { name: 'Taro', age: 24 },
    { name: 'James', age: 32 },
    { name: 'Andy', age: 51 },
  ]
  res.status(200).json(users)
}
