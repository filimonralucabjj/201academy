import Header from "./components/Header"
import Activities from "./components/Activities"
import { BrowserRouter} from "react-router-dom"
import BacKOnTop from "./components/BacKOnTop"

const App = () => {
  return (
    <BrowserRouter>
      <BacKOnTop/>
      <Header title='Two on One Academy' subtitle='is a full spectrum combat sports academy focused on Mixed Martial Arts and Grappling' buttonText="Contact us"/>
      <Activities />
    </BrowserRouter>
  )
}

export default App