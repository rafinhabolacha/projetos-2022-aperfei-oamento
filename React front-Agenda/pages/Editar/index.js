import React, { useState, useEffect } from 'react'
import Navegacao from '../../Components/Nav';
import '../Editar/editar.css'
import api from '../../services/api';
import { useParams } from 'react-router-dom';
function Editar() {
  const { id } = useParams();
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  console.log(id);
  //buscar  id
  useEffect(() => {
    const getContato = async () => {
      await api.get('/usuario/' + id).then((response) => {
       // console.log(response.data.contato);
        setTelefone(response.data.contato.telefone);
        setEmail(response.data.contato.email);
      })
    }
    getContato();
  }, [id]); // não esquecer isso, pois pode não conseguir editar 


  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });
  

  //editar contatos 
  const editContato = async e => {
    e.preventDefault();
    // console.log("funciona");

    const headers = {
      'headers': {
        //os dados serao enviado em formato json
        'Content-Type': 'application/json'
      }
    }

    await api.put('/usuario/', { id, telefone, email }, headers).then((response) => {
      //console.log(response);
      setStatus({
        type: 'success',
        msg: response.data.mensagem
      });
    }).catch((err) => {
      if (err.response) {
        setStatus({
          type: 'error',
          msg: err.response.data.mensagem
        });
      }
    })


  }


  return (
    <>
      <div>
        <Navegacao />
      </div>
      <section id="container">
        <h1 style={{fontSize:"25px",padding:"10px"}}>Atualizar contato</h1>
      </section>
     
      <section>
      {status.type === 'success' ? <p style={{ color: "green",fontSize:"25px" }} >{status.msg}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "red" }} >{status.msg}</p> : ""}
      
        <div id="container-form">
          <form onSubmit={editContato}>
           <label>Telefone:</label>
             <input type='text' 
                   name="telefone" 
                   value={telefone} 
                   onChange={e => setTelefone(e.target.value)} 
                />
          <label>E-mail: </label>
            <input type='text'
                   name="email" 
                   value={email} 
                   onChange={e => setEmail(e.target.value)} 
            /><br /><br />

            <button style={{
              background: "green",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              margin:"15px",
              padding:"15px",
              borderRadius:"5px"
            }} type="submit">Salvar Alterações</button>
          </form>
        </div>
      </section>
    </>
  )
}



export default Editar;