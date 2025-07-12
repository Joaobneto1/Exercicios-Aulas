import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ThemeProvider } from './provider/ThemeProvider'

import { Home } from './components/home'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
