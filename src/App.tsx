import Header from "./components/Header"
import Activities from "./components/Activities"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsLeft from "./components/DetailsLeft"
import DetailsRight from "./components/DetailsRight"
import { bjjDetails, kickDetails, armWrestlingDetails } from './constants/index';

const App = () => {
  return (
    <BrowserRouter>
      <Header title='Two on One Academy' subtitle='is a full spectrum combat sports academy focused on Mixed Martial Arts and Grappling' buttonText="Contact us"/>
      <Activities />
      <DetailsLeft info={bjjDetails}/>
      <DetailsRight info={kickDetails}/>
      <DetailsLeft info={armWrestlingDetails}/>
    </BrowserRouter>
  )
}

export default App