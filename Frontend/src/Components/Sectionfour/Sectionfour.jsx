import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaInfo, FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router'
import axios from "axios"
import { FavoritesContext } from '../../Context/FavoritesContext'
import { BasketContext } from '../../Context/BasketContext'
import { useFormik } from 'formik';
import "./sectionfour.css"

function Sectionfour() {

    let [datas, setDatas] = useState([])
    let [filtereddata, setFiltereddata] = useState([])
    let { favorites, setFavorites } = useContext(FavoritesContext)
    let { basket, setBasket } = useContext(BasketContext)
    let [sortorder,setsortorder]=useState("default")

    function GetDatas() {

        axios.get("http://localhost:3000/products")
            .then(res => {
                setDatas(res.data)
                setFiltereddata(res.data)
            })
    }

    function Favorites(data) {

        let favorite = favorites.find(item => item._id == data._id)

        if (favorite) {

            alert("Bu Mehsul Wishlist de var")
        }

        else {

            setFavorites([...favorites, data])
        }
    }

    function Basket(data) {

        let newbasket = basket.find(item => item._id == data._id)

        if (newbasket) {

            basket.count++

            setBasket([...basket])
        }

        else {

            setBasket([...basket, { ...data, count: 1 }])
        }
    }


    useEffect(() => {


        GetDatas()


    }, [])





    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {

            let searchvalue=values.name.toLocaleLowerCase().trim()

            if (searchvalue==""){

                setFiltereddata(datas)
            }

            else{

                let filtered=datas.filter(item=>item.name.toLocaleLowerCase().includes(
                    searchvalue
                ))

                setFiltereddata(filtered)
            }
            
        },
    });


    function handlesortchange(e){

        let order=e.target.value

        setsortorder(order)

        if(sortorder=="default"){

            setFiltereddata(datas)
        }

        else{

            let sortprice=[...filtereddata]

            if(sortorder=="esc"){

                sortprice.sort((a, b) => a.price - b.price)
            }

            else if(sortorder=="desc"){

                sortprice.sort((a, b) => b.price - a.price)
            }

            setFiltereddata(sortprice)
        }
    }

    return (
        <div className="sectionfour">
            <h2>New realeased Products for Women</h2>
            <p>Who are in extremely love with eco friendly system.</p>

          <div className="sortsearch">
          <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <button type="submit">Submit</button>
            </form>

            <select name="" id=""
            value={sortorder}
            onChange={handlesortchange}
             >
                <option value="default">Default</option>
                <option value="desc">Less-More</option>
                <option value="esc">More-Less</option>
            </select>
          </div>
            <div className="sectionfour-cards">


                {
                    filtereddata.map((data, index) => (
                        <div className="sectionfour-card">
                            <img src={data.image} alt="" />
                            <div className="fourtexts">
                                <h3>Name:{data.name}</h3>
                                <h4>Price:{data.price} $</h4>
                            </div>
                            <div className="fourbtn">
                                <Link to={`/${data._id}`}><button className='info'><FaInfo /></button></Link>
                                <button className='heart' onClick={() => Favorites(data)}><FaHeart /></button>
                                <button className='basket' onClick={() => Basket(data)}><FaShoppingBasket /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sectionfour