import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer';
//const axios = require ('axios');

function App() {
    return (

        <div>        
            <Header/>
            <Todo/> 
            <Footer/>       
        </div>
    
    );
}

export default App;