import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
    return (

        <div>
        
            <Header/>
            <Intro takeDescriptionIntro='Hello there'/>
            <Intro takeDescriptionIntro='Woooo'/>

            <Task takeDescription="Buy milk"/>
            <Task takeDescription="Buy chocolat"/>
        
        </div>
        //Añadir <Task taskDescription ="Buy food dog"
    );
}

export default App;