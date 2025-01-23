
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FavoritesPrivoder from './Context/FavoritesContext.jsx'
import BasketPrivoder from './Context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
   
<FavoritesPrivoder>
<BasketPrivoder> 
   <App />
</BasketPrivoder>
</FavoritesPrivoder>
  

)
