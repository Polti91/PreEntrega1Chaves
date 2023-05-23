import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'

function App() {

  return (
    <>
<NavBar/>
<ItemListContainer greeting={"¡Bienvenidos a Mythic Plus!"} />
    </>
  )
}

export default App
