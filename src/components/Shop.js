import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

function Shop() {

  const navStyle = {
    // color: 'white',
    // textDecoration: 'None'
  }

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch ('https://jsonplaceholder.typicode.com/users');
    
    const items = await data.json();
    console.log(items);
    setItems(items)
  }


  return (
    <div className="App">
      <ul className="ul-list">
        {items.map(item => (
          <li className="li-items" key={item.id} >
                         
            <h3 className="shopList"> 
              <Link to = {`/shop/${item.name}`} className="underLink" >
                Name: {item.name || 'No record found'} 
              </Link>            
            </h3>
             

            <h3 className="shopList"> 
              <Link to = {`/shop/${item.username}`} className="underLink">
              Username: {item.username || 'No record found' } 
              </Link>
            </h3>

            
            <h3 className="shopList"> 
              <Link to = {`/shop/${item.email}`} className="underLink">
              Email: {item.email || 'No record found' }
              </Link>
            </h3>

            
            <h3 className="shopList"> 
            <Link to = {`/shop/${item.phone}`} className="underLink">
              Phone: {item.phone || 'No record found'} 
              </Link>
            </h3>
            

           
            <h3 className="shopList"> 
            <Link to = {`/shop/${item.website}`} className="underLink">
            Website: {item.website || 'No record found'} 
            </Link>
            </h3>
           
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
