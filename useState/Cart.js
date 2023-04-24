import { useState } from "react";
import data from "./data";

// main function
function Cart() {
  // use state declaration
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // adding particular item to the cart
  const addToCart = (itemId) => {
    let item = data.find((item) => item.id === itemId);
    console.log(item.id);
    if (item) setCartItems([...cartItems, item]);
    setCount((count) => (count += 1));
  };

  // removing item from the cart
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCount((count) => (count -= 1));
  };

  return (
    <div>
      <h1>Cart:</h1>
      <h1>Number of items in the cart:{count}</h1>
      <h1>item list:</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.price}
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <h1>Items:</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>
              <b>title:</b>
              {item.title}
            </p>
            <img
              src={item.image}
              alt={item.title}
              style={{ height: "200px", width: "200px" }}
            ></img>
            <p>
              <b>description:</b>
              {item.description}
            </p>
            <p>
              <b>price</b>
              {item.price}
            </p>
            <p>
              <b>rating:</b>
              {item.rating.rate}
            </p>
            <p>
              <b>count</b>
              {item.rating.count}
            </p>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
