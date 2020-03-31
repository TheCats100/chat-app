import React from "react";
import Contact from "./components/Contact";
import UsersList from "./components/ContactList"


/*
const contact1 = {
  name :'Marbouille',
  avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  online: true
};

const contact2 = {
  name : 'Lardok',
  avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  online : false,
}

const contact3 = {
  name : 'Jibulle',
  avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
  online : true,
}
*/

function App() {
  return (
    <div>
      <UsersList />
    </div>
  );
}

export default App;
