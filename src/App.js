import './App.css';
import Header from './counter/header/Header';
import Footer from './counter/footer/Footer'
import Count from './counter/count_button/Count';
import { Component, useState } from 'react';
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
class App extends Component {
  // set state: 
  state = ({ value: 0 })
  // const [state, setState] = useState(0)
  add = (number) => {
    this.setState({ value: this.state.value + number })
  }

  remove = (number) => {
    if (this.state.value > 0 && this.state.value >= number) {
      return this.setState({ value: this.state.value - number })
    }
    alert('you can not remove the number ')
  }
  reset = (number) => {
    this.setState({ value: 0 })
  }
  renderCountBtn = () => {
    return arrBtn.map((item, index) => {
      switch (item.fn) {
        case "add":
          return <Count key={index} setState={this.add} value={item} />
        case "remove":
          return <Count key={index} setState={this.remove} value={item} />
        default:
          return <Count key={index} setState={this.reset} value={item} />
      }
    })
  }
  render() {

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
              {this.state.value}
            </div>
          </div>
          <div className='buttons_display'>
            {
              this.renderCountBtn()
            }

          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
