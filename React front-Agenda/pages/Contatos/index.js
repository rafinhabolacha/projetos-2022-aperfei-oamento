import React,{useState} from 'react'
import Navegacao from '../../Components/Nav';
import api from '../../services/api';
import '../Contatos/contatos.css'

function Contatos() {

  const [dados, setDados  ] = useState({
    nome:'',
    telefone:'',
    email:'',
    

  })

  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });
  

  
  const valueInput = e =>setDados({ ... dados,[e.target.name]: e.target.value}); 
    

  const addContato = async  e =>{
    e.preventDefault();
   // console.log(dados.email,dados.nome,dados.telefone);


    if(!dados.nome){
     alert("Preencha os campos!")
    }else{
      const headers = {
        'headers':{
            //os dados serao enviado em formato json
            'Content-Type': 'application/json'
        }
      }

      await api.post('/',dados,headers).then((response)=>{
        // console.log(response);
         setStatus({
          type: 'success',
          msg: response.data.mensagem
        });
      }).catch((err)=>{
        // console.log("Error!");
         if (err.response) {
          setStatus({
            type: 'error',
            msg: err.response.data.mensagem
          });
        }
      }) 

    }
  }

  return (
    <>
      <div>
        <Navegacao />
      </div>
      <section id="container">
      <h1 style={{fontSize:"25px",padding:"10px"}}>Novo contato</h1>
      </section>

      <section>
      {status.type === 'success' ? <p style={{ color: "green",fontSize:"25px" }} >{status.msg}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "red" }} >{status.msg}</p> : ""}
        <div id="container-form">

      

          <form onSubmit={addContato}>
              <label>Nome:</label>
              <input type='text' name="nome"  onChange={valueInput}/>
              <label>Telefone:</label>
              <input type='text' name="telefone" onChange={valueInput} />
              <label>E-mail:</label>
              <input type='text' name="email"  onChange={valueInput}/>
             
              <button style={{
              background: "green",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              margin:"15px",
              padding:"15px",
              borderRadius:"5px"
            }} type="submit">Cadastrar</button>
          </form>
        </div>
      </section>
    </>
  )
}



export default Contatos;