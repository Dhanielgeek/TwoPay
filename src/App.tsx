import { RouterProvider } from "react-router-dom"
import { MainRouter } from "./Routes/MainRouter"

const App = () => {
  return (
  <>
  <RouterProvider router={MainRouter}/>
  </>
  )
}

export default App