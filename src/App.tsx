import Header from "./components/Header"
import Activities from "./components/Activities"
import { BrowserRouter} from "react-router-dom"
import BacKOnTop from "./components/BacKOnTop"
import Details from "./components/Details"
import Pricing from "./components/Pricing/Pricing"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
const App = () => {
  return (
    <BrowserRouter>
      <BacKOnTop/>
      <Header/>
      <Activities />
      <Details/>
      <Gallery/>
      <Pricing />
      <ContactUs/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App