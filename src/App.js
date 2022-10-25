import logo from './logo.svg';
import './App.css';
import Card from './card/Card'
const persons = [
  {
    name: 'Margit',
    title: 'CEO',
    age: 29,
    languages: [
      {
        name: 'english', id: 1
      },
      {
        name: 'finnish', id: 2
      },
      {
        name: 'russian', id: 3
      },
    ],
  },
  {
    name: 'Kati',
    title: 'Developer',
    age: 25,
    languages: [
      {
        name: 'english', id: 1
      },
      {
        name: 'finnish', id: 2
      },
      {
        name: 'russian', id: 3
      },
      {
        name: 'spanish', id: 4
      },
    ],
  },
  {
    name: 'Karin',
    title: 'Designer',
    age: 45,
    languages: [
      {
        name: 'english', id: 1
      },
      {
        name: 'russian', id: 2
      },
    ],
  },
];

const createBoxs = () => {
  return persons.map((item, index) => {
    return <Card key={index} person={item}></Card>
  })
}
function App() {
  return (
    <>
      <header className='header'>
        this is my header
      </header>
      <div className='main' >
        {createBoxs()}
      </div>
    </>
  );
}

export default App;
