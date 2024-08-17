import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/searchbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const featchAllCards = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/api/cards");
        console.log(res.data.cards);
        if(res.data.success){
         setCards(res.data.cards)
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    featchAllCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Navbar/>
     <Searchbar setSearchQuery={setSearchQuery}/>
     <Cards cards={filteredCards}/>
     <Footer/>
    </>
  )
}

export default App
