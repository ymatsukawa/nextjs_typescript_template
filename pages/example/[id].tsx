import { useRouter } from 'next/router'

const ExampleId = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h1>id is {id}</h1>
    </div>
  )
}

export default ExampleId