import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { FavoritesContext } from '../../Context/FavoritesContext'
import { BasketContext } from '../../Context/BasketContext'
  import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBasketballBall, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import "./details.css"

function Details() {

    let {id}=useParams()

    let navigate=useNavigate()

    let [data,setdata]=useState({})
    let {favorites,setFavorites}=useContext(FavoritesContext)
    let {basket,setBasket}=useContext(BasketContext)

function GetData(id){

    axios.get(`http://localhost:3000/products/${id}`)
    .then(res=>setdata(res.data.data))
}

function Favorites(data){

    let favorite=favorites.find(item=>item._id==data._id)

    if(favorite){

        alert("Bu Mehsul Wishlist de var")
    }

    else{

        setFavorites([...favorites,data])
    }
}

function Basket(data){

    let newbasket=basket.find(item=>item._id==data._id)

    if(newbasket){

        basket.count++

        setBasket([...basket])
    }

    else{

        setBasket([...basket, {...data, count:1}])
    }
}

useEffect(()=>{

    GetData(id)
},[id])


  return (
   <>

   <div className="detailspage">
    <h2 style={{textAlign:"center"}}>Details Product</h2>
    <div className="detailscard">
    <div class="col">
    <div class="card">
      <img src={data.image} class="card-img-top" alt="..."/>
      <div >
        <h3>Name:{data.name}</h3>
        <h4>Price:{data.price} $</h4>
      </div>
      <div className="detailsbtn">
        <button onClick={()=>Favorites(data)} className='btn btn-success' ><FaHeart/></button>
        <button onClick={()=>Basket(data)} className='btn btn-danger'><FaBasketballBall/></button>
      </div>
    </div>
  </div>

    </div>
   </div>
   
   
   </>
  )
}

export default Details