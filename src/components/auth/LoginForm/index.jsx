import {useState} from "react";
import Logo from "components/main/Logo";
import Button from "components/main/Button";
import useAuth from "hooks/auth/useAuth";

export const LoginForm = () => {
    const {login} = useAuth()
    const [userInputValue, setUserInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const userChanged = e => setUserInputValue(e.target.value)
    const passwordChanged = e => setPasswordInputValue(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {
                "identifier": userInputValue,
                "password": passwordInputValue,
            }
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            const data = await response.json()
            console.log(data);
            if(data.error){
                setShowErrorMessage(true)
                setErrorMessage(data.error.message)

            } else
                login(data.jwt)

        } catch (error) {
            // TODO show error message
            console.log(error);
        }
    }

    return (
        <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-2xl w-full mx-8 p-8">
                <form className="flex flex-col" onSubmit={handleSubmit}>
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
                    {
                        showErrorMessage && <p className="text-red-500 text-sm font-medium mb-4">{errorMessage}</p>
                    }
                    <Button>
                        Ingresar
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default LoginForm
