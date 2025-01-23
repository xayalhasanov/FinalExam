import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { FaInfo, FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router'
import "./basket.css"

function Basket() {

    let { basket, setBasket } = useContext(BasketContext)
    let [totalprice,settotalprice]=useState(0)


    function deletebas(id){

        let newbasket=basket.filter(item=>item._id!==id)

        setBasket([...newbasket])
    }

    function handleplus(basket1){

        ++ basket1.count 

        setBasket([...basket])
       
     
    }


        
    function handleminus(basket1){

        if(basket1.count>1){
            
         -- basket1.count

         setBasket([...basket])
      
        }
        else{

            let newbaskets=basket.filter(item=>item._id!==basket1._id)

            setBasket([...newbaskets])


        }

    }

    function calculateTotalPrice(){

        let newTotalPrice=basket.reduce((total,item)=>total+item.price*item.count,0)

        settotalprice(newTotalPrice)
    }

    useEffect(()=>{

        calculateTotalPrice()

    },[basket])



    return (
        <>
            <div className="basketpage">
                {
                    basket.length == 0 ? (

                        <h1 className='hr'>Sizin Basketiniz Bosdur</h1>
                    )

                        : (

                            <div className="basketcards">
                                <h1 style={{textAlign:"center"}}>Basket</h1>
                                <table class="table table-bordered table-light">
                                    <thead>
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">TotalPrice</th>
                                            <th scope="col">Count</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                   {
                                    basket.map((basket1,index)=>(
                                        <tbody>
                                        <tr>
                                            <th scope="row"><img src={basket1.image} alt="" /></th>
                                            <td>{basket1.name}</td>
                                            <td>{basket1.price} $</td>
                                            <td>{basket1.price*basket1.count} $</td>
                                            <td  className="tdcount">
                                            <button onClick={()=>handleminus(basket1)} className='btn btn-primary'><FaMinus/></button>
                                             
                                             {basket1.count}

                                             <button onClick={()=>handleplus(basket1)} className='btn btn-primary'><FaPlus/></button>
                                            
                                            </td>
                                            <td className='tdbtn'>
                                            <Link to={`/${basket1._id}`}><button className='btn btn-primary'><FaInfo/></button></Link>
                                            <button onClick={()=>deletebas(basket1._id)} className='btn btn-danger'><FaTrash/></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    ))
                                   }
                                </table>   
                                
                                <div className="totalprice">TotalPrice:{totalprice} $</div>
                                     </div>
                        )
                }
            </div>


        </>
    )
}

export default Basket