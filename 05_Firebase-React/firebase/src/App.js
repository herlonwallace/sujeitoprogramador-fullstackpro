import { useState } from "react";
import { db } from "./firebaseConnection"
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import "./app.css"

function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  const [posts, setPosts] = useState([])

  async function handleAdd() {
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("Cadastrado com sucesso")
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log("Erro " + error)
    })
  }

  async function buscarPost(){
    // const postRef = doc(db, "posts", "Ah4KtfDuny2ZYaLQahmG")
    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })
    // .catch(() => {
    //   console.log("Erro ao buscar")
    // })

    const postRef = collection(db, "posts")
    await getDocs(postRef)
    .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista)
    })
  }


  return (
    <div>
      <h1>Firebase</h1>

      <div className="container">
        <label>Título:</label>
        <textarea type="text" placeholder="digite o título aqui" value={titulo} onChange={(e) => setTitulo(e.target.value)}></textarea>

        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)} />
      </div>

      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={buscarPost}>Buscar post</button>

      <ul>
        {posts.map((post) => {
          return(
            <li key={post.id}>
              <span>Titulo: {post.titulo}</span><br />
              <span>Autor: {post.autor}</span><br /><br />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
