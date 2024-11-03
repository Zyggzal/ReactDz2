import React, {useState} from 'react'
import Product from './components/Product/Product'
import './App.css';

function App() {
  
  const [products,setProducts] = useState([
    {
      name: 'Apple',
      price: 5.6,
      description: 'A fresh, juicy, succulent apple',
      selected: false
    },
    {
      name: 'Ice cream',
      price: 14.8,
      description: 'A cold strawberry-flavoured ice cream',
      selected: false
    }
  ])

  const [newProductName, setNewProductName] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [newProductDesc, setNewProductDesc] = useState('')

  const [editProductName, setEditProductName] = useState('')
  const [editProductPrice, setEditProductPrice] = useState('')
  const [editProductDesc, setEditProductDesc] = useState('')

  const deleteProductHandler = (id) => {
    const newp = [...products];
    newp.splice(id, 1);
    setProducts(newp);
  }

  const addProductHandler = () => {
    const newp = [...products];
    newp.push({ name: newProductName, price: newProductPrice, description: newProductDesc })
    setProducts(newp)
  }

  const onSelectedChange = (id) => {
    const newp = [...products];
    for(let i = 0; i < newp.length; i++) newp[i].selected = i == id
    setProducts(newp)
  }

  const editProductHandler = () => {
    const newp = [...products];
    for(let i = 0; i < newp.length; i++) {
      if(newp[i].selected){
        newp[i].name = editProductName
        newp[i].price = editProductPrice
        newp[i].description = editProductDesc

        break;
      }
    }

    setProducts(newp)
  }
  return (
    <div className="App">
      <h1>Products</h1>
      <div className='list-group'>
        {products.map((item, index) => {
          return <Product key={index} selected={item.selected} name={item.name} price={item.price} description={item.description} onDelete={()=>{ deleteProductHandler(index); console.log(index)}}/>
        })}
      </div>
        <div className='d-flex flex-column row-gap-3 container w-50 border border-white m-3'>
          <h1>Add product</h1>
          <label>
            Name:
            <input type='text' onChange={(e)=> {
              setNewProductName(e.target.value);
            }} value={newProductName}/>
          </label>
          <label>
            Price:
            <input type='number' step={0.1} onChange={(e)=> {
              setNewProductPrice(e.target.value);
            }} value={newProductPrice}/>
          </label>
          <label>
            Name:
            <input type='text' onChange={(e)=> {
              setNewProductDesc(e.target.value);
            }} value={newProductDesc}/>
          </label>

          <button onClick={addProductHandler} className='btn btn-outline-primary'>Add</button>
        </div>


        <div className='d-flex flex-column row-gap-3 container w-50 border border-white m-3'>
          <h1>Edit product</h1>
          <label>
            Product:
            <select onChange={(e)=>{ onSelectedChange(e.target.value) }}>
              <option value={-1}>None</option>
              {products.map((item, index) => {
                return <option key={index} value={index}>{item.name}</option>
              })}
            </select>
          </label>
          <label>
            Name:
            <input type='text' onChange={(e)=> {
              setEditProductName(e.target.value);
            }} value={editProductName}/>
          </label>
          <label>
            Price:
            <input type='number' step={0.1} onChange={(e)=> {
              setEditProductPrice(e.target.value);
            }} value={editProductPrice}/>
          </label>
          <label>
            Name:
            <input type='text' onChange={(e)=> {
              setEditProductDesc(e.target.value);
            }} value={editProductDesc}/>
          </label>

          <button onClick={editProductHandler} className='btn btn-outline-warning'>Edit</button>
        </div>
    </div>
  );
}

export default App;
