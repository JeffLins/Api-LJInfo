import  request from 'supertest'
import app from '../app.js'


describe('GET /usuario', () => {
    test('Se o status é 200', () => {
        return request(app).get('/usuario')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('GET /usuario/:id', () => {
    test('Se o status de um usuario inexistente é 404',  () => {
        const response =  request(app).get('/usuario/usuario2')
        expect(response.statusCode).toBe(404)
    })
})

describe('POST /usuario', () =>{
    test('senha invalida',  () => {
        return request(app).post('/usuario')
        .send({
            "nome": "exemplo",
            "email": "teste@gmail.com",
            "senha": "252930",
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.mensagem).toBeTruthy()
            
        })
    })
})

test('email invalido',  () => {
    return request(app).post('/usuario')
    .send({
        "nome": "exemplo",
        "email": "exemplo",
        "senha":"252930",
    })
    .then((response)=>{ 
    console.log(response.body)
    expect(response.body.err).toBeTruthy()
    })
})
