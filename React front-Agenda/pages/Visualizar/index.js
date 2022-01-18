import React, { useState, useEffect } from 'react'
import Navegacao from '../../Components/Nav';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import '../Visualizar/visualizar.css';
function Visualizar() {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState("");

  // visualizar um contato
  useEffect(() => {
    const DetalheContatos = async () => {
      await api.get('/usuario/' + id).then((response) => {
        // console.log(response);
        setData(response.data.contato);
      }).catch(() => {

      })
    }
    DetalheContatos();
  }, [id]);

  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });

  //funcao apagar
  const Apagar = async (idcontato) => {
    //console.log(idcontato);

    await api.delete('/usuario/' + idcontato).then((response) => {
      //console.log(response)
      setStatus({
        type: 'success',
        msg: response.data.mensagem
      });
    }).catch((err) => {
      console.log("Error!");
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
        <h1 style={{ fontSize: "25px", padding: "10px" }}>detalhes contatos:</h1>

      </section>

  {status.type === 'success' ? <p style={{ color: "green",fontSize:"25px" }} >{status.msg}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "red" }} >{status.msg}</p> : ""}

      <section>



        <p>E-mail:{data.email}</p>
        <p>Contato: {data.telefone}</p>

        <button style={{
          background: "green",
          color: "white",
          fontSize: "15px",
          cursor: "pointer",
          margin: "15px",
          padding: "15px",
          borderRadius: "5px"
        }} onClick={() => Apagar(data.id)} >Apagar</button>



      </section>




    </>
  )
}
export default Visualizar;