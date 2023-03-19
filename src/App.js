
import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import Table from './components/table/table';

function App() {

  const [bets, setBets] = useState([])

  const getBets = (betObj) =>{
    setBets([...bets, betObj])

  }
  return (
        <div className='container'>
            <Header />
            <Form  getBets={getBets}/>
            <Table bets={bets}/>
        </div>
  );
}

export default App;
