import {useState} from "react";
import Logo from "components/main/Logo";
import Button from "components/main/Button";

export const LoginForm = () => {
    const [userInputValue,setUserInputValue] = useState('')
    const [passwordInputValue,setPasswordInputValue] = useState('')

    const userChanged = e => setUserInputValue(e.target.value)
    const passwordChanged = e => setPasswordInputValue(e.target.value)

    const login = async () => {
        const data = {
            "identifier": userInputValue,
            "password": passwordInputValue
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        console.log(response.json());
    }

    return (
        <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-2xl w-full mx-8 p-8">
                <form className="flex flex-col" onSubmit={
                    e => {
                        e.preventDefault()
                        login()
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
