import { useState } from "react"
import Nav from "./Navigation/nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"

// Import Database
import products from './db/data'
import Category from "./Sidebar/Category/Category"
import Card from "./components/Card"
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")
  
  // Input Filters
  // handler When user pass input to searchbar
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  // Iterating all the characters that user is typing in search field
  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))

  // ---Radio Filters------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterData(products, selected, query) {
    let filteredProducts = products

    // filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected Filter - parameter de structuring
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // call filterdata function and store it in a result variable
    const result = filterData(products, selectedCategory, query)

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}  
      />
    ))
  }

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended />
      <Products />
    </div>
  )
}

export default App
