import React, { useState } from 'react'
import { supabase } from '../configs/supabaseClient'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <div>
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={() => login(email, password)}>Login</button>
        <br/>
        <button onClick={() => SignUp(email, password)}>SignUp</button>
    </div>
  )
}

async function login(email, password){
    try{
        const {error} = await supabase.auth.signIn({email, password})
        if(error) throw error
        alert('logged in')
    }
    catch(error){
        alert(error.message)
    }
}

const SignUp = async (email, password) =>{
    try{
        const {error} = await supabase.auth.signUp({email, password})
        if(error) throw error
        alert('logged in')
    }
    catch(error){
        alert(error.message)
    }
}