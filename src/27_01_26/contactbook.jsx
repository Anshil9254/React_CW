import React, {useState} from "react";

export default function ContactBook2() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contacts, setContacts] = useState([]);
    const addContact = () => {
        if (name.trim() !== "") {
            setContacts([...contacts, {name, phone}]);
            setName("");
            setPhone("");
        }
    };
    const removeContact = (index) => {
        setContacts(contacts.filter((_, i) => i !== index));
    };
    const updateContact = (index, newName, newPhone) => {
        const updatedContacts = contacts.map((contact, i) =>
            i === index ? { name : newName , phone : newPhone} : contact
        );
        setContacts(updatedContacts);
    }


return (
<>
        <h2>Contact Book</h2>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a contact name" />
        <br />
        <input
        type="number"
        placeholder="Enter phone number" 
        onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button onClick={addContact}>Add Contact</button>
        <ul>
        {contacts.map((c, index) => (
            <li key={index}>
            {c.name} {c.phone} <button onClick={() => removeContact(index)}>Remove</button> 
            <button onClick={() => {
                const newName = prompt("Enter new name:", c.name);
                const newPhone = prompt("Enter new phone number:", c.phone);        
                if (newName !== null && newPhone !== null) {
                    updateContact(index, newName, newPhone);
                }}}>Update</button>
            </li>
        ))}     

        </ul>
        </>
)
}