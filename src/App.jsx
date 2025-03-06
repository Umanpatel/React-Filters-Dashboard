import Nav from "./Navigation/nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
const App = () => {
  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </div>
  )
}

export default App
