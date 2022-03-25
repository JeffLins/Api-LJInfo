import Usuario from '../models/usuario.js'
import UsuarioDAO from '../DAO/usuarioDAO.js'


    const usuariocontroller = (app, db) => {
    const usuarioDAO = new UsuarioDAO(db)

                    app.get('/usuario', async (req, res) =>{
                        try {
                            const usuario = await usuarioDAO.reuneTodosUsuarios()
                           res.status(200).json(usuario)
                       } catch (err) {
                           res.status(400).json({"msg": err.message, "err": true});
                       }
                    })


                    app.get('/usuario/id/:id', async (req, res) =>{
                    const id = req.params.id
                     try {
                         await usuarioDAO._verificaId(id)
                       const usuario = await usuarioDAO.reuneUmUsuarios(id)
                       res.status(302).json(usuario);

                     } catch (err) {
                       res.status(404).json({"msg": err.message, "err": true});
                      
                     }  
                        })
                       


                    app.post('/usuario', async (req, res) =>{
                    const body = req.body
                        try{
                            const novoUsuario = new Usuario(body.nome, body.email, body.senha)
                            const inserindoUsuario = await usuarioDAO.insereUsuario(novoUsuario)
                            res.status(201).json(inserindoUsuario)            
                    } catch(err){
                            res.json({ "messagem": err})
                    }    
                
                })

                    app.delete('/usuario/id/:id', async (req, res) =>{
                        const id = req.params.id
                        try {
                        await usuarioDAO._verificaId(id)
                        const usuarioDeletado = await usuarioDAO.deleteUsuario(id)
                        res.status(202).json(usuarioDeletado)

                        } catch (err) {
                            res.status(400).json({"msg": err.message, "err": true})
                        }
                })

                    app.put('/usuario/id/:id', async (req, res) =>{
                        const body = req.body
                        const id = req.params.id

                            try{  
                            const usuarioAtualizado = new Usuario( body.nome, body.email, body.senha)
                             await usuarioDAO.atualizaUsuario(id, usuarioAtualizado)
                             .then((resposta)=>{
                                 res.status(200).json(resposta)
                             })
                             .catch((err)=>{
                                 res.json(err)
                             })
                               
                        }   catch(err){

                        res.status(400).json({"msg": err.message, "err": true});
                }
            })
        }

export default usuariocontroller