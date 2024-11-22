import { useGetCoursesQuery } from './api/endpoints/courses'

function App() {
  const { data, isLoading } = useGetCoursesQuery()

  if (isLoading) return <p>Loading..</p>

  console.log(data)

  return (
    <>
      <div>
      </div>
    </>)
}

export default App
