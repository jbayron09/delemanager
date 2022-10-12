import {Logo} from "components/main/Logo";
import {Button} from "components/main/Button";

export const LoginForm = () => {
    return (
        <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-2xl w-full mx-8 p-8">
                <form className="flex flex-col">
                    <div className="flex justify-center mb-8">
                        <Logo size={'md'}/>
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full border-gray-100 rounded-md placeholder:text-gray-500"
                            placeholder="Correo electrónico"/>
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
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
