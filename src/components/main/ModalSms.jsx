import {Button} from "components/main/Button";

const ModalSms = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white flex flex-col items-center m-10 py-12 px-14 rounded-lg shadow-2xl">
                <h2 className="mb-8 text-lg text-gray-800 font-bold">
                    ¿Seguro quieres hacerlo?
                </h2>
                <p className="mb-8 text-base text-gray-700">
                    Han pasado menos de 5 minutos
                    desde que ingresó este vehículo.
                    <br/><br/>
                    Por favor confirma que quieres imprimir la factura.
                </p>
                <Button fullWidth>Confirmar</Button>
            </div>
        </div>
    )
}

export default ModalSms