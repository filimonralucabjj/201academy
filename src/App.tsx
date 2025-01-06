import Header from "./components/header/Header"
import Activities from "./components/cards/Activities"
import { BrowserRouter} from "react-router-dom"
import BacKOnTop from "./components/pageUtils/BacKOnTop"
import Details from "./components/cards/Details"
import Pricing from "./components/pricing/Pricing"
import ContactUs from "./components/contact/ContactUs"
import Footer from "./components/footer/Footer"
// import Gallery from "./components/gallery/Gallery"
const App = () => {
  return (
    <BrowserRouter>
      <BacKOnTop/>
      <Header/>
      <Activities />
      <Details/>
      <Pricing />
      {/* <Gallery/> */}
      <ContactUs/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App