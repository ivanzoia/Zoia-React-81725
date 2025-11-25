import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'


function App() {

 console.log ('soy app')
  return (
    <>
     <Navbar/>
     <ItemListContainer mensaje = {'AIAKOS'} />
     <ItemCount/>
    </>
  )
}

export default App
