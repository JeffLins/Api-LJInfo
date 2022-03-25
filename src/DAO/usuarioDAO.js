class usuarioDAO{
    constructor(db){
        this.db = db
    }

        reuneTodosUsuarios = () =>{
            return new Promise((resolve, reject) =>{
                this.db.all('SELECT * FROM USUARIOS', (err, row) =>{
                    if (err){
                            reject({"messagem": err.message})
                    }else{
                            resolve({
                                    "usuarios": row,
                                    "err": false
                            })
                    }
                })
            })
         }


        reuneUmUsuarios = (id) =>{
            return new Promise((resolve, reject) =>{
                    this.db.all('SELECT * FROM USUARIOS WHERE ID=?', 
                    id, (err, row) =>{
                        if (err){
                            reject({"messagem": err.message})
                        }else{
                                resolve({
                                    "Usuarios": row,
                                    "err": false
                                })
                        }
                    })
            })
         }

            insereUsuario = (novoUsuario) => {
                 return new Promise((resolve, reject) => {
                        this.db.run('INSERT INTO USUARIOS(nome, email, senha) VALUES (?, ?, ?)',
                             novoUsuario.nome, novoUsuario.email, novoUsuario.senha, (err) =>{

                                if(err) {
                                        reject({"messagem": err.message})
                                }else{
                                    resolve({
                                        "messagem": `Usuario ${novoUsuario.nome} inserido com sucesso!`,
                                        "usuario": novoUsuario,
                                        "err": false
                                    })
                                }
                            })        
                 })
            }


            atualizaUsuario = (id, usuario) => {
                    return new Promise ((resolve, reject) => {
                            this.db.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID =  ?',
                                [usuario.nome, usuario.email, usuario.senha, id],
                                (error) => {
                                    if(error) {
                                        reject({"messagem": error.message})
                                
                                }else{
                                        resolve({
                                                "messagem": `Usuario de id ${id} atualizada com sucesso`,
                                                "usuario": usuario,
                                                "err": false
                                        })
                                }
                            }
                            )
                        
                    })
                }                           

            deleteUsuario = (id) => {
                    return new Promise((resolve, reject) => {
                            this.db.run('DELETE FROM USUARIOS WHERE ID=?',
                            id,(err) =>{
                                    if(err){
                                        reject({"messagem": err.message})
                                    }else{
                                        resolve({"Usuario": `Usuario de id ${id} deletado com sucesso!`, "erro": false})
                                    }
                                }
                            )
                        })
                }



                _verificaId = async (id) => {
                    const usuario = await this.reuneUmUsuarios(id)
                    if(usuario.err){
                            throw new Error(`Usuario de id ${id} nao existe`)
                    }else{
                        return true
                    }
                }






            }   
    export default usuarioDAO