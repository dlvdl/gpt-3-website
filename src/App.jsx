import { Article, Brand, CTA, Feature, Navbar } from './components/index'
import {
  Blog,
  Features,
  Footer,
  Header,
  Possabilty,
  WhatGPT3,
} from './containers/index'

function App() {
  return (
    <>
      <div className="gradient_bg">
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
    </>
  )
}

export default App
