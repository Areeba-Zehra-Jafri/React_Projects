import ProductCard from './components/ProductCard.jsx'
import './App.css'
function App() {
  return (
    <div className='app'>
      <ProductCard imagePath="./src/assets/apple.png" pName="Apple" pPrice={1}/>
      <ProductCard imagePath="./src/assets/mango.png" pName="Mango" pPrice={3}/>
      <ProductCard imagePath="./src/assets/watermelon.png" pName="Watermelon" pPrice={5}/>
      <ProductCard imagePath="./src/assets/pomegranate.png" pName="Pomegranate" pPrice={8}/>
      <ProductCard imagePath="./src/assets/banana.png" pName="Banana" pPrice={2}/>
      <ProductCard imagePath="./src/assets/strawberries.png" pName="Strawberries" pPrice={7}/>
    </div>
  )
}
export default App
