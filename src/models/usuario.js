class Usuario {
        constructor(nome, email, senha) {
                this.nome = this._validaNome(nome)
                this.email = this._validaEmail(email)
                this.senha = this._validaSenha(senha)
        }


_validaSenha = (senha) => {
        if(senha == null || senha.length <= 8) {
        throw new err('Digite uma senha com pelo menos 8 digitos')
        }
        return senha
     }

_validaNome = (nome)=>{
        if (nome == null || nome.length == 0) {
          throw new err('Digite um nome valido')
        }
        return nome
}


_validaEmail = (email) =>{
        let re = /\S+@\S+\.\S+/
        if(email != null && re.test(email)) {
                return email
        }
        else{
                throw new err('Digite um email valido')
        }
   }

}
export default  Usuario