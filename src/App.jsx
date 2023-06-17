import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a Mythic Dungeon" />
              }
            />
            <Route
              exact
              path="/categorias/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<h2>Sitio en construcción.</h2>} />
            <Route path="cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
