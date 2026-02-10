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
    const [cart,setCart] = useState([]);
    const [theme, setTheme] = useState("light");
    const addItem = (name, price, quantity) => {
        setCart([...cart, {name, price, quantity}]);
    };
    const updateQuantity = (index, quantity) => {
        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, quantity } : item
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
        setTheme(theme === "light" ? "dark" : "light");
    }
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return (
        <div className={theme}>
            <h2>Shopping Cart</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
            <input type="text" placeholder="Item Name" id="itemName" />
            <input type="number" placeholder="Price" id="itemPrice" />
            <input type="number" placeholder="Quantity" id="itemQuantity" />
            <button onClick={() => {
                const name = document.getElementById("itemName").value;
                const price = parseFloat(document.getElementById("itemPrice").value);
                const quantity = parseInt(document.getElementById("itemQuantity").value);
                if (name && !isNaN(price) && !isNaN(quantity)) {
                    addItem(name, price, quantity);
                    document.getElementById("itemName").value = "";
                    document.getElementById("itemPrice").value = "";
                    document.getElementById("itemQuantity").value = "";
                }
            }}>Add Item</button>
            <ul>
                {cart.map((item, index) => (

                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                        <button onClick={() => removeItem(index)}>Remove</button>
                        <button onClick={() => {
                            const quantity = parseInt(prompt("Enter new quantity:", item.quantity));
                            if (!isNaN(quantity)) {
                                updateQuantity(index, quantity);
                            }
                        }}>Update Quantity</button>
                    </li>
                ))}
            </ul>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}