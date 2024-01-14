import { useState } from 'react'
import './renderizacao.css'

function App() {
    const [signed, setSigned] = useState(false)

    return (
        <div>
            <button onClick={() => setSigned(true)}>Entrar</button>
            
            {signed && (
                <div>
                    <h1>Bem vindo!</h1>
                    <p>Usuário online!</p>
                    <button onClick={ () => setSigned(false) }>Sair</button>
                </div>
            )}
            
            {/* 
            {signed ? (
                <h1>Bem vindo, você está logado no sistema</h1>
            ) : (
                <h1>Nenhum usuário online!</h1>
            )} */}

        </div>
    )
}

export default App