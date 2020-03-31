import React from 'react';
import Contact from './components/Contact';


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


function App() {
  return (
    <div>
      <Contact{...contact1} />
      <Contact{...contact2} />
      <Contact{...contact3} />
    </div>
  );
}


export default App;
