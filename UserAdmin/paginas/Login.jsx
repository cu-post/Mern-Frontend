// Elementos React
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Url Cliente Axios Servidor [Backend]
import clienteAxios from '../config/clienteAxios'
// Autenticador de Sessión
import useAuth from '../hooks/useAuth'
// Respuestas de Alertas o Errores
import Alerta from '../components/Alerta'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if([username, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const { data } = await clienteAxios.post('/user/login', { username, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }
    
    const { msg } = alerta

  return (
    <>
        <div className='flex justify-center flex-col items-center'>
            <div className="flex flex-col items-center md:flex md:flex-row gap-[10px] p-[10px] h-[122.42px] mt-[68px] justify-center">
                <img src="../Capa 2.png" className="sm:w-[130.03px] sm:h-[74.49px] mt-[0.84px] flex justify-center items-center" alt="..." />
                <div className="justify-center flex text-[50px] sm:text-[63.07px] font-semibold text-[#481373]">Phonemania</div>
            </div>

            {msg && <Alerta alerta={alerta } />}            
        
            <form 
                className="my-10 rounded-lg md:p-10 p-4 items-center flex flex-col"
                onSubmit={handleSubmit}
            >   <div className='text-[64px] font-bold flex-col flex h-[77px] w-[235px]'>Ingresa</div>
                <div className="my-5 justify-center flex flex-col">
                    <label 
                        className="uppercase text-xl font-bold justify-center flex flex-col"
                        htmlFor="username"
                    >UserName</label>
                    <input
                        id="username"
                        type="username"
                        placeholder="UserName de Registro"
                        className="w-[300px] sm:w-[450px] md:w-[700px] mt-3 p-3 border rounded-[6px] bg-[#FF5E59] text-white placeholder-white"
                        value={username}
                        onChange={ e => setUsername(e.target.value)}
                    />
                </div>
                <div className="my-5 justify-center flex flex-col">
                    <label 
                        className="uppercase text-xl font-bold justify-center flex flex-col"
                        htmlFor="password"
                    >Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="w-[300px] sm:w-[450px] md:w-[700px] mt-3 p-3 border rounded-[6px] bg-[#FF5E59] text-white placeholder-white"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    value="Entrar"
                    className="bg-[#8F00FF] rounded-[28px] text-white font-normal text-[20px] py-3 hover:cursor-pointer justify-center flex mt-[18px] w-[300px] p-[10px]"
                />            
            </form>
        </div>
    </>
  )
}

export default Login