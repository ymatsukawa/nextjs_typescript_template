import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import useSWR from 'swr'
import { User } from '../../libs/types'
import styles from '../../styles/Sample.module.css'

const Sample = () => {
  async function fetcher(url: string): Promise<Array<User>> { 
    const res = await fetch(url)
    return res.json()
  }
  const { data, error } = useSWR('/api/users', fetcher)

  if(error) {
    return (
      <div>failed to load</div>
    )
  }

  if(!data) {
    return (
      <div>Loading data...</div>
    )
  }

  return (
    <div>
      <h1>This is Example/Sample</h1>
      {
        data.map((user: User, index: number) => {
          return (
            <div key={index}>
              <p className={styles.myclass}>name: {user.name}</p>
              <p>age: {user.age}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sample