import { useState, useEffect } from "react";

function App(){
    const [input, setInput] = useState('')
    const [tarefas, setTarefas] = useState([
        'Pagar conta de Luz',
        'Ir ao supermercado'
    ])

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa')

        if(tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas])



    function handleRegister(e){
        e.preventDefault()
        
        setTarefas([...tarefas, input])
        setInput('')
    }

    return(
        <div>
            <h1>Cadastrar usuário</h1>
            <form onSubmit={handleRegister}>
                <label>Nome da Tarefa</label><br />
                <input placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)}/><br />

                <button type="submit">Registrar</button>

                <br /><br />

                <ul>
                    {tarefas.map( tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default App