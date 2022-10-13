import {Button} from "components/main/Button";
import Modal from 'react-modal';
import PropTypes from "prop-types";

export default function DeleModal({isOpen, toggle}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            contentLabel="Example Modal"
            className="bg-white flex flex-col items-center m-8 py-12 px-14 rounded-lg shadow-2xl"
            overlayClassName="fixed w-full h-full top-0 flex items-center bg-white bg-opacity-70">
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
        </Modal>
    )
}

DeleModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

