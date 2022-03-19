import Usuario from '../models/usuario.js'
import UsuarioDAO from '../DAO/usuarioDAO.js'


    const usuariocontroller = (app, bd) => {
            const usuarioDAO = new UsuarioDAO(bd)

                    app.get('/usuario', async (req, res) =>{
                
                       try {
                        const usuario = await usuarioDAO.reuneTodosUsuarios()
                        res.json(usuario);

                       } catch (err) {
                           res.json({"msg": err.message});
                       }
                    })


                    app.get('/usuario/id/:id', async (req, res) =>{
                    const id = req.params.id
                     try {
                       const usuario = await usuarioDAO.reuneUmUsuarios(id)
                       res.json(usuario);

                     } catch (err) {
                       res.json({"msg": err.message});
                      
                     }  
                        })
                       


                    app.post('/usuario', async (req, res) =>{
                    const body = req.body
                        try{
                            const novoUsuario = new Usuario(body.ID, body.NOME, body.EMAIL, body.SENHA)
                            const usuarioDAO = await insertUsuario(novoUsuario)
                            res.json(usuarioDAO);            
                    } catch(err){
                            res.json({ "msg": err.message})
                    }    
                
                })

                    app.delete('/usuario/id/:id', async (req, res) =>{
                    const id = req.params.id
                        try {
                        const usuarioDAO = await deleteUsuario(id)
                        res.json(usuarioDAO)

                        } catch (error) {
                            res.json({"msg": err.message})
                        }
                })

                    app.put('/usuario/id/:id', async (req, res) =>{
                    const id = req.params.id
                        const body = req.body

                            try{
                            const usuarioAtualizado = new Usuario(body.ID, body.NOME, body.EMAIL, body.SENHA)
                            const usuarioDAO = await atualizaUsuario(id, usuarioAtualizado)
                                res.json(usuarioDAO)
                        }catch(err){

                        res.json({"msg": err.message});
                }
            })
        }

export default usuariocontroller