import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import Header from './components/Header';

function App() {
  const allCoffee = useLoaderData();

  return (
    <>
    <Header></Header>
      <h1 className='text-3xl text-purple-600 my-14'>Hot cold coffees: {allCoffee.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          allCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
