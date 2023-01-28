import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import './App.css'
import { Welcome, Name } from './welcome.jsx'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import KeyboardBackSpace from '@mui/icons-material/KeyboardBackSpace';

const countCxt = createContext()

export default function App() {
  const [cart, setCart] = useState(0)


  return (
    <countCxt.Provider value={[cart, setCart]}>
      <div className="App">

        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>

        {/* <Btn /> */}
        {/* <Welcome /> */}
      </div>
    </countCxt.Provider>
  )
}
function CartItem() {
  const [cart, setCart] = useContext(countCxt)
  const navigate = useNavigate()
  const remove = (() => {
    if (cart > 0) {
      setCart(cart - 1)
    }

  })

  return (
    <div>
      <h1>Items in the carts are here</h1>
      <Button onClick={remove} variant="outlined">Remove</Button>
      <Button variant="outlined" startIcon={< KeyboardBackSpace />} onClick={() => navigate(-1)}>Back</Button>
    </div>
  )
}

function Navbar() {
  return (
    <div className="bar">

      <div className="navbar">
        <a href="#">Start Bootstrap</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <div className="dropdown">
          <button className="dropbtn">Shop
            <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
            <a href="#">All Products</a>
            <a href="#">Popular Items</a>
            <a href="#">New Arrival</a>
          </div>
        </div>
        <Cartbtn />
      </div>
      <div className="container">
        <h1>Shop in style</h1>
        <h4>with this shop homepage template</h4>
      </div>
      <Content />
    </div>


  )
}


function Content() {
  const content = [{
    productName: "Fancy Product",
    cost: "$60.00"
  },
  {
    productName: "Special Item",
    cost: "$18.00",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    productName: "Sale Item",
    cost: "$25.00"
  },
  {
    productName: "Popular Item",
    cost: "$40.00",
    rating: "⭐⭐⭐⭐⭐"
  }, {
    productName: "Sale Item",
    cost: "$25.00"
  }, {
    productName: "Fancy Product",
    cost: "$120.00 - $280.00"
  }, {
    productName: "Special Item",
    cost: "$18.00",
    rating: "⭐⭐⭐⭐⭐"
  }, {
    productName: "Popular Item",
    cost: "$40.00",
    rating: "⭐⭐⭐⭐⭐"
  }]
  return (
    <div className="content">
      {content.map((cnt) => <MiniCont data={cnt} />)}
    </div>
  )
}

function MiniCont({ data }) {

  return (
    <div className="miniCont">
      <img className="product" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="dummy" />
      <div className="productContent">
        <h3>{data.productName}</h3>
        <label>{data.rating}</label>
        <p>{data.cost}</p>
        <br />
        <Addcart />
      </div>
    </div>
  )
}

function Cartbtn() {
  const [cart, setCart] = useContext(countCxt)
  const navigate = useNavigate()

  return (
    <div className="cartbtn">
      <Button onClick={() => navigate('/cart')} variant="outlined" > Cart {cart}</Button >
    </div >
  )
}

function Addcart() {
  const [cart, setCart] = useContext(countCxt)
  const [disable, setDisable] = useState(false)
  const addCartFn = (() => {
    setDisable(!disable)
    setCart(cart + 1)
    console.log(data[i])

  })

  return (
    <Button disabled={disable} variant="outlined"
      onClick={addCartFn}> Add cart</Button >
  )
}
// function Btn() {
//   const [disable, setDisable] = useState(false)
//   return (
//     <button disabled={disable} onClick={() => setDisable(true)}>Add Cart</button>
//   )
// }

// function Display() {
//   return (
//     <div>

//     </div>
//   )
// }