import { Article, Brand, CTA, Feature, Navbar } from './components/index'
import {
  Blog,
  Features,
  Footer,
  Header,
  Possabilty,
  WhatGPT3,
} from './containers/index'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possabilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
