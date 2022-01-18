import React, { useEffect, useState } from 'react'
import Navegacao from '../../Components/Nav';
import '../Home/home.css'
import api from '../../services/api'
import { Link } from 'react-router-dom';

function Home() {

  const [contatos, setContatos] = useState([]);
  const listar = async () => {
    await api.get('/listar').then((response) => {
      // console.log(response.data.contatos);
      setContatos(response.data.contatos);
    })
  }

  useEffect(() => {
    listar();
  }, []);




  return (
    <>
      <div>
        <Navegacao />
      </div>
      <section id="container">
        <h1 style={{ fontSize: "25px", padding: "10px" }}>Lista contatos</h1>
      </section>
      <table>
         <tr>
          <td>Nomes:</td>
         </tr>
       {contatos.map(contato => (
         <tr id="coluna" key={contato.id}>
           <td>{contato.nome}</td>
             <td id="linha">
               <button style={{
              background: "green",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              borderRadius:"5px"
        }}><Link to={"/editar/" + contato.id}>Editar</Link></button>
               <button style={{
              background: "green",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              borderRadius:"5px"
        }}> <Link to={"/visualizar/" + contato.id}>Visualizar</Link></button>
           </td>
        </tr>

        ))}



      </table>
    </>
  )
}



export default Home;