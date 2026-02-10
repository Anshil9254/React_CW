import React,{useState} from "react";

export default function Hook2Example() {
    const [user, setUser] = useState({
        name: "Guest",
        age: 25,
        ce:true,
        city: "Rajkot",
    });

    return <>
        <input 
        type="text" 
        value={user.name} 
        onChange={(e) => setUser({...user, name: e.target.value})} />
        <br />
        <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({...user, age: parseInt(e.target.value)})} />
        <br />
        <input
        type="text"
        value={user.city}
        onChange={(e) => setUser({...user, city: e.target.value})} />
        <br />
        <label>CE</label>
        <input
        type="checkbox"
        checked={user.ce}
        onChange={() => setUser({...user, ce: !user.ce})} />

        <h2>User Info:</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <p>CE: {user.ce ? "Yes" : "No"}</p>
    </>

}