import React, { useContext } from 'react'
import { FavoritesContext } from '../../Context/FavoritesContext'
import { Link } from 'react-router'
import { FaInfo, FaTrash } from 'react-icons/fa'
import "./favorites.css"

function Favorites() {

    let {favorites,setFavorites}=useContext(FavoritesContext)


    function deletefav(id){

        let newfavorites=favorites.filter(item=>item._id!==id)

        setFavorites([...newfavorites])
    }

    
  return (
   <>

   <div className="favoritespage">
    {
        favorites.length==0 ?(

            <h1 className='h1'>Sizin Wishlistiniz Bosdur</h1>
        )

        :(<div className="favoritescards">
            <h1 style={{textAlign:"center"}}>Favorites</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
 {
   favorites.map((favorite,index)=>(
    <div class="col">
    <div class="card">
      <img src={favorite.image} class="card-img-top" alt="..."/>
      <div class="card-body">
       <h3>Name:{favorites.name}</h3>
       <h4>Price:{favorite.price} $</h4>
      </div>
      <div className="favoritebtn">
        <Link to={`/${favorite._id}`}><button className='btn btn-primary'><FaInfo/></button></Link>
        <button onClick={()=>deletefav(favorite._id)} className='btn btn-danger'><FaTrash/></button>
      </div>
    </div>
  </div>
   ))
 }
</div>
        </div>
        )
    }
   </div>
   
   
   </>
  )
}

export default Favorites