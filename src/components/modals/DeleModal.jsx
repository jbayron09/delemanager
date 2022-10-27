import PropTypes from "prop-types";
import Modal from 'react-modal';
import Button from "components/main/Button";

Modal.setAppElement('#root');

export default function DeleModal({isOpen, toggle, modalContent}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            contentLabel="Example Modal"
            className="bg-white flex flex-col items-center m-8 py-12 px-14 rounded-lg shadow-2xl"
            overlayClassName="fixed w-full h-full top-0 flex items-center bg-white bg-opacity-70">
            <h2 className="mb-8 text-lg text-gray-800 font-bold">
                {
                    (modalContent === "invoiceAlert") ? "¿Seguro quieres hacerlo?" :
                        (modalContent === "invoice") && "Imprimir factura"
                }
            </h2>
            <p className="mb-8 text-base text-gray-700 flex flex-col items-center">
                {
                    (modalContent === "invoiceAlert") ?
                        <>
                            Han pasado menos de 5 minutos desde que ingresó este vehículo.
                            <br/><br/>
                            Por favor confirma que quieres imprimir la factura.
                        </>
                        :
                        (modalContent === "invoice") &&
                        <>
                            Haz click en el botón a continuación para imprimir la factura.
                            <br/><br/>
                            <span className="text-3xl font-bold">$2.500</span>
                        </>
                }
            </p>
            <Button fullWidth>Confirmar</Button>
        </Modal>
    )
}

DeleModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

