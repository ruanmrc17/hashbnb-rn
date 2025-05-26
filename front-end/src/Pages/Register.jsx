import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from "axios"

function Register({ setUser }) {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ redirect, setRedirect ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()



        if(email && password && name){

            try {
                // console.log('Email: ' + email + " Senha: " + password)
        
                const { data: userDoc } = await axios.post('/users', {
                    name, email, password
                })
                
                setUser(userDoc)
                setRedirect(true)
                // console.log(userDoc)
                
            } catch (error) {
                alert("Deu erro ao cadastrar o usuário: " + JSON.stringify(error.response.data))
            }

            
        }else{
            alert("Você precisa preencher o email, o nome e a senha.")
        }

    }

    if(redirect){
        return <Navigate to="/"/>
    }

    return (
    <section className='flex items-center'>
        <div className="mx-auto max-w-96 flex flex-col items-center gap-4 w-full">
            <h1 className='text-3xl font-bold py-2'>Faça seu cadastro</h1>

            <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
                <input type="text" className="w-full rounded-full border border-gray-300 px-4 py-3 " placeholder="Digite seu nome" onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input type="email" className="w-full rounded-full border border-gray-300 px-4 py-3 " placeholder="Digite seu e-mail" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <input type="password" className="w-full rounded-full border border-gray-300 px-4 py-2" placeholder="Digite sua senha" onChange={(e) => {setPassword(e.target.value)}}/>
                <button className="cursor-pointer bg-primary-400 text-white font-bold w-full rounded-full border border-gray-300 px-4 py-2">Registrar</button>
            </form>

            <p>Já tem conta? <Link to='/login' className='underline font-semibold'>Logue Aqui!</Link> </p>
        </div>
    </section>
    )
}

export default Register