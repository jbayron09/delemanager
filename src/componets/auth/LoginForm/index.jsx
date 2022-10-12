export const LoginForm = () => {
    return (
        <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-2xl w-full mx-8 p-8">
                <form className="flex flex-col">
                    <input type="email" placeholder="Correo electrónico"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button className=" bgtext-white">Ingresar</button>
                </form>
            </div>
        </div>

    )
}

export default LoginForm
