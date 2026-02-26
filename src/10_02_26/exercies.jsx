/*
objective : create shopping cart component that manages items,
quantity, and totals

Requirements:
1. Add  items to cart (name, price, quantity)
2. display cart items with individual totals
3. update item quantity for inch item
4. remove items from cart
5. calculate and display subtotal, tax (10%), and total
6. clear entire cart


objective : create theam switcher that toggles between light and dark modes.
Requirements:
1. Toggle between light and dark themes
2. Apply theme to component styles
3. Display current theme
*/
import React, { useState } from 'react';

export default function ShoppingCart() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");

    const addItem = () => {
        if (!name || isNaN(price) || isNaN(quantity)) return;

        const newItem = {
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity)
        };

        setCart([...cart, newItem]);

        setName("");
        setPrice("");
        setQuantity("");
    };

    const updateQuantity = (index, newQuantity) => {
        if (newQuantity <= 0) return;   

        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
    };

    const removeItem = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCart([]);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
            color: theme === "light" ? "#000000" : "#ffffff",
            minHeight: "100vh",
            padding: "20px",
            borderRadius: "8px",

        }}>
            <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>

            <div style={{float: 'right'}}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <br />
            <p >Current Theme: {theme}</p>
            <br />
            </div>
            <br />
            <br />
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button onClick={addItem}>Add Item</button>

            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        
                        {item.name} - Rs.{item.price} x {item.quantity} = Rs.{item.price * item.quantity}

                         &nbsp;&nbsp;
                        <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                        &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
                        <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                         &nbsp;&nbsp;
                        <button onClick={() => removeItem(index)}>Remove</button>   
                    </li>
                ))}
            </ul>
            
            <hr />
            <div >
            <p>Subtotal: Rs.{subtotal.toFixed(2)}</p>
            <p>Tax (10%): Rs.{tax.toFixed(2)}</p>
            <p>Total: Rs.{total.toFixed(2)}</p>

            <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
}