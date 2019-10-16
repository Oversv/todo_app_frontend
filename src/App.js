import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo/Todo.jsx';
import Footer from './components/Footer';

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