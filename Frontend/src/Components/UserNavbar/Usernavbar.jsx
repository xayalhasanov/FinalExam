import React, { useContext } from 'react'
import { FaBars, FaHeart, FaShoppingBasket } from 'react-icons/fa'
import {Link} from "react-router"
import "./usernavbar.css"
import { FavoritesContext } from '../../Context/FavoritesContext'
import { BasketContext } from '../../Context/BasketContext'
import Home from '../../Pages/Home/Home'
import Sectiontwo from '../Sectiontwo/Sectiontwo'

function Usernavbar() {
  let {favorites,setFavorites}=useContext(FavoritesContext)
  let {basket,setBasket}=useContext(BasketContext)
  return (
    <div className="navbarr">
        <div className="navbarr-bg">
        <div className="navbarr-left">
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
        </div>
        <div className="navbarr-right">
            <Link className='link1nav' to={Home}>Home</Link>
            <Link className='link1nav' to={Sectiontwo}>Category</Link>
            <Link className='link1nav'>Men</Link>
            <Link className='link1nav'>Women</Link>
            <Link className='link1nav'>Latest</Link>
            <select name="" id="">
                <option value="">Pages</option>
                <option value="">Category</option>
                <option value="">Single</option>
                <option value="">Cart</option>
                <option value="">Checkout</option>
                <option value="">Confermation</option>
                <option value="">Login</option>
                <option value="">Tracking</option>
                <option value="">Generic</option>
                <option value="">Elements</option>
            </select>
            <FaBars className='bars'/>
           <div className="navbtnb">
           <Link className='linknav' to={"/addproduct"}><button className='addnav'>Add Product</button></Link>
            <Link className='linknav' to={"/favorites"}><button className='heartnav'><FaHeart/>({favorites.length})</button></Link>
            <Link className='linknav' to={"/basket"}><button className='basketnav'><FaShoppingBasket/>({basket.length})</button></Link>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Usernavbar