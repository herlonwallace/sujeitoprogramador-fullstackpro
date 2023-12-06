import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'

export default function App(){
  return(
    <div>
      <Header title='Curso React + Typescript'/>
      
      <Aluno nome='Ana Marcelina' idade={30}/>

      <Footer/>
    </div>
  )
}
