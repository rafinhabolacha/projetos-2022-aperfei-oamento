const Usuario = require('../models/Pessoa');

module.exports ={

  async create(req,res){
    
    const {nome,telefone,email } = req.body;


    if(!nome  || !telefone || !email){
        return res.json({
          mensagem:"preencha os campos!"
        })
    }

     const pessoa = await Usuario.create({nome,telefone,email}).then(()=>{
      return res.json({
        error:false,
        mensagem:"Contato cadastrado Com sucesso!"
         });
    }).catch((err)=>{
      return res.status(400).json({
        error:true,
        mensagem:"Error: Contato não Cadastrado Com sucesso!"+err,
        });
    });
           
  },

  async listar(req,res){
     await Usuario.findAll().then((contatos)=>{
      return res.json({
        error:false,
          contatos
         });
    }).catch(()=>{
      return res.status(400).json({
        error:true,
        mensagem:"Nenhum produto encontrado!"
        });

    });



   
  },

  async listar_uma_pessoa(req,res){
     const { id } = req.params;
     const pessoa = await Usuario.findOne({
      where:{
        id:  id,
      }
    }) .then((contato)=>{
      return res.json({
        error:false,
          contato
         });
    }).catch(()=>{
      return res.status(400).json({
        error:true,
        mensagem:"Nenhum contato encontrado!"
        });
    });
   
  },

  async atualizar(req,res){
    const { id } = req.body;
   
    //const {nome,telefone,email } = req.body;
     await Usuario.update(req.body,{where: {id:  id}}) .then(()=>{
      return res.json({
      error:false,
      mensagem:"Contato Editado Com sucesso!",
      
       });
  }).catch(()=>{
    return res.status(400).json({
      error:true,
      mensagem:"Error: Contato  não Editado Com sucesso!"
      });
  });

},

  async Apagar(req,res){
    const { id } = req.params
      await Usuario.destroy({
      where: {
        id:  id
      }
    }).then(()=>{
      return res.json({
        error:false,
        mensagem:"Contato deletado Com sucesso!"
         });
    }).catch(()=>{
      return res.status(400).json({
        error:true,
        mensagem:"Error: Contato  não deletado com sucesso!"
        });
     });
     
  }

}