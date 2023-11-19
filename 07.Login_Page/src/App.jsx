import './App.css'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/contactHeader/ContactHeader'

function App() {
 
  return (
    <div className='App'>
      <Navigation />
      <ContactHeader />
      <Contact />
    </div>
  )
}

export default App
