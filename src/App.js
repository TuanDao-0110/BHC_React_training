import './App.css';
import Header from './counter/header/Header';
import Footer from './counter/footer/Footer'
import Count from './counter/count_button/Count';
import { useState } from 'react';
// 1.create box function
// const createBoxs = () => {
//   return persons.map((item, index) => {
//     return <Card key={index} person={item}></Card>
//   })
// }

// 2. create arr for button 
const arrBtn = [{ name: 'add five', fn: 'add', value: 5 }, { name: 'add one', fn: 'add', value: 1 }, { name: 'reset', fn: 'reset', value: 0 }, { name: 'remove five', fn: 'remove', value: 5 }, { name: 'remove one', fn: 'remove', value: 1 }]
// 3. render button 
// const renderBtn = () => {
//   return arrBtn.map((item, index) => {
//     return <Count key={index} value={item} />
//   })
// }
//4. add fn : 
const add = (number) => {
}

function App() {
  const [state, setState] = useState(0)
  return (
    <div className='main'>
      {/* <header className='header'>
        this is my header
      </header>
      <div className='main' >
        {createBoxs()}
      </div> */}
      <Header />
      <div className='card_display'>
        <div className='result'>
          <div className='number bg'>
            {state}
          </div>
        </div>
        <div className='buttons_display'>
          {arrBtn.map((item, index) => {
            return <Count key={index} setState={setState} state={state} value={item} />
          })}

         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
