import { useState } from 'react' 
import Nome from "./components/Nome"

function App(){
  const [aluno, setAluno] = useState('Wallace')

  function handleChangeName(nome){
    setAluno(nome)
  }

  return(
    <div>
      <h1>Componetente App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName('Wallace Herlon Silva')}>
        Mudar Nome
      </button>
    </div>
  )
}

export default App
