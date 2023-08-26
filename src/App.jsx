import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
 
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a su tienda de ropa de confianza, GatitoStore"}/>
    </>
  )
}

export default App