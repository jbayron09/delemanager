import {Button} from "components/main/Button";

export function SearchPlateForm() {
    return (
        <form className="flex flex-col p-4">
            <input
                className="rounded-xl text-center text-6xl text-gray-800 font-bold mb-4"
                type="text"
                placeholder="PLACA"/>
            <Button
                fullWidth>
                Buscar
            </Button>
        </form>
    )
}