import React from 'react'
import { Form, Input, Button } from "antd"
import Password from "antd/es/input/Password"
import { supabase } from '../configs/supabaseClient'

function Login(){

    function login(){
        //berhasil validasi
    }

    function gagal(){
        //gagal validasi
    }

    return(
        <>
            <Form wrapperCol={{ span : 16 }} onFinish={login} onFinishFailed={gagal} id="formLogin">
                <Form.Item
                    label="Email"
                    name="txt_email"
                    rules={[
                        {
                            required: true,
                            message: "Email harus diisi"
                        }
                    ]}
                >
                    <Input name="txt_email"/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="txt_password"
                    rules={[
                        {
                            required: true,
                            message: "Password harus diisi"
                        }
                    ]}
                >
                    <Password name="txt_password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Login</Button>
                    <Button type="primary">Sign Up</Button>
                </Form.Item>
            </Form>
        </>
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

export default Login
