import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchdata = async () => {
      const apidata = await axios.get("http://localhost:3000/api");
      setProducts(apidata.data);
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h1>All the product details are given below</h1>
      {products.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail}></img>
          </div>
        )
      })}
    </div>
  )

}
export default App