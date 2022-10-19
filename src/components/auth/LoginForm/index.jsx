import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Logo from "components/main/Logo";
import Button from "components/main/Button";

export const LoginForm = () => {
    const [userInputValue,setUserInputValue] = useState('jatmolina15@gmail.com')
    const [passwordInputValue,setPasswordInputValue] = useState('delejatmolina15dele')

    let navigate = useNavigate()

    const userChanged = e => setUserInputValue(e.target.value)
    const passwordChanged = e => setPasswordInputValue(e.target.value)

    const login = async () => {
        console.log(typeof(userInputValue));
        console.log(passwordInputValue);
        const data = {
            "identifier": userInputValue,
            "password": passwordInputValue,
        }
        return await fetch(`${process.env.REACT_APP_API_URL}/api/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    return (
        <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-2xl w-full mx-8 p-8">
                <form className="flex flex-col" onSubmit={
                    e => {
                        e.preventDefault()
                        console.log('submit')
                        login().then(response => response.json())
                            .then(data => {
                                if(data.jwt){
                                    localStorage.setItem('token', data.jwt)
                                    return navigate("/dashboard")
                                }
                                return navigate("/auth/login")
                            });
                    }
                }>
                    <div className="flex justify-center mb-8">
                        <Logo size={'md'}/>
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            value={userInputValue}
                            onChange={userChanged}
                            className="w-full border-gray-100 rounded-md placeholder:text-gray-500"
                            placeholder="Correo electrónico"/>
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={passwordInputValue}
                            onChange={passwordChanged}
                            className="w-full border-gray-100 rounded-md placeholder:text-gray-500"
                            placeholder="Contraseña"/>
                    </div>
                    <Button>
                        Ingresar
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default LoginForm
