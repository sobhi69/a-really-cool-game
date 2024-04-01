import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';


const App = () => {


  return (
    <div className='app'> 
    <Header />
    <TodoList />
    </div>
  )
}


export default App;
