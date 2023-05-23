import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categorias/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    

    </>
  );
}

export default App;
