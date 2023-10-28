import{ useState } from 'react'
import InputTab from "./components/inputTab"
import '../src/services/APICall'
import PokeCard from './components/pokemonCard';
import { Button } from '@chakra-ui/react';
import '../src/styles/app.css';

function App() {
  const[value, setValue] = useState("");
  const[buttonClicked, setButtonClicked] = useState(false);

  const componentrender = () => {
    setButtonClicked(true);
  }
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div className='finalContainer'>
        <div className='inputSection'>
          <InputTab value={value} handleChange={handleChange} />
          <Button type='button'onClick={componentrender} id='button'>Search</Button>
        </div>
        <div className='outputSection'>
          {buttonClicked && <PokeCard name={value} />}
        </div>
      </div>
    </>
  )
}

export default App
