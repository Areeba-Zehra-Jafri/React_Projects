import ProductCard from './components/ProductCard.jsx'
import './App.css'

function App() {

  return (
    <div className='app'>
      <ProductCard imagePath="./src/assets/apple.png" pName="Apple" pPrice={1}/>
      <ProductCard imagePath="./src/assets/mango.png" pName="Mango" pPrice={3}/>
      <ProductCard imagePath="./src/assets/watermelon.png" pName="Watermelon" pPrice={5}/>
    </div>
  )
}
export default App
