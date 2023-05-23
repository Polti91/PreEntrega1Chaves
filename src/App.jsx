import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
<NavBar/>
<ItemListContainer greeting={"¡Bienvenidos a Mythic Plus!"} />
<ItemDetailContainer/>
    </>
  )
}

export default App
