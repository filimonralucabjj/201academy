import Header from "./components/Header"
import Activities from "./components/Activities"
import { BrowserRouter} from "react-router-dom"
import BacKOnTop from "./components/BacKOnTop"
import Details from "./components/Details"
const App = () => {
  return (
    <BrowserRouter>
      <BacKOnTop/>
      <Header/>
      <Activities />
      <Details/>
    </BrowserRouter>
  )
}

export default App