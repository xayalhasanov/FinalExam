import Addproduct from "../Pages/Addproduct/Addproduct";
import Basket from "../Pages/Basket/Basket";
import Details from "../Pages/Details/Details";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import ProductRoot from "../Pages/ProductRoot";





let ROUTES = [{

    path: "/",
    element: <ProductRoot />,
    children: [{

        path: "/",
        element: <Home />
    },
    {
        path: "/:id",
        element: <Details />
    },
    {
        path:"/favorites",
        element:<Favorites/>
    },
    {
        path:"/basket",
        element:<Basket/>
    },
    {
        path:"/addproduct",
        element:<Addproduct/>
    }



]


}]



export default ROUTES