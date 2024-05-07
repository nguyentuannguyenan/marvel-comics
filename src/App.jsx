import './App.css'
import Search from './components/Search'
import logo from './images/logo.png'

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <span className='rainbow-text body'>Created by Nguyen Tuan Nguyen An</span>
      </div>
      <div className='container'>
        <a href="/">
        <img src={logo} alt="logo" className='logo' />
        </a>
      </div>
      
      <p className='dev-name'></p>
      <Search/>
    </div>
  )
}

export default App
