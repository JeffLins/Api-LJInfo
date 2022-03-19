class usuarioDAO{
    constructor(db){
        this.db = db;
    }

        reuneTodosUsuarios = () =>{
            return new Promise((resolve, reject) =>{
                this.db.all('SELECT * FROM USUARIO', (err, rows) =>{
                    if (err){
                            reject({
                                    "messagem": err.message,
                                    "err": true
                            })
                    }else{
                            resolve({
                                    "usuarios": rows,
                                    "err": false
                            })
                    }
                })
            })
         }


        reuneUmUsuarios = (id) =>{
            return new Promise((resolve, reject) =>{
                    this.db.all('SELECT * FROM USUARIO WHERE ID = ?', 
                    id,
                    (err, rows) =>{
                        if (err){
                            reject({
                                "messagem": err.message,
                                "err": true
                            })
                        }else{
                                resolve({
                                    "usuarios": rows,
                                    "err": false
                                })
                        }
                    })
            })
         }

            insereUsuario = (novoUsuario) => {
                 return new Promise((resolve, reject) => {
                        this.db.run('INSERT INFO USUARIOS VALUES (?, ?, ?, ?)',)
                            novoUsuario.id, novoUsuario.nome_completo, novoUsuario.email, novoUsuario.senha, (erro) =>{

                                if(erro) {
                                        reject({
                                            "message": erro.message,
                                            "err": true
                                        })
                                }else{

                                    resolve({

                                        "messagem": `Usuario ${novoUsuario.nome_completo} inserido com sucesso!`,
                                        "usuario": novoUsuario,
                                        "erro": true
                                    })
                                }
                            }        
                 })
            }


            deleteUsuario = (id) => {
                    return new Promise((resolve, reject) => {
                            this.db.run('DELETE FROM USUARIOS WHERE ID = ?',
                            id,
                                (erro) =>{
                                    if(erro){
                                        reject({
                                            "messagem": erro.message,
                                            "erro": false
                                        })
                                    }else{
                                        resolve({
                                            "Usuario": `Usuario de id ${id} deletado com sucesso!`,
                                            "erro": false
                                        })
                                    }
                                }
                            )
                        })
                }

                    atualizaUsuario = (id, usuario) => {
                            return new Promise ((resolve, reject) => {
                                    this.db.run('UPATE CLIENTES SET NOME_COMPLETO = ?, EMAIL = ?, WHERE ID = ?, SENHA = ?',
                                        usuario.nome_completo, usuario.email, usuario.senha, usuario.id,
                                        (err) => {
                                            if(err) {
                                                 reject({
                                                "messagem": err.message,
                                                "err": true
                                            })
                                        
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
}
    export default usuarioDAO