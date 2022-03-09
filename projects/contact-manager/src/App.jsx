import './App.css';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import ContactDetail from './components/ContactDetail';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([]);
  const handleAddContact = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}])
  }

  const removeContactHandler = id => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts)  setContacts(retrieveContacts)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/>} />
          <Route path="/add" 
          component={() => <AddContact  handleAddContact={handleAddContact}/>} />

          <Route path="/contact/:id" 
          component={() => <ContactDetail />} />

          {/* <AddContact handleAddContact={handleAddContact} />
          <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
