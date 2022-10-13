import {Button} from "components/main/Button";

export function SearchPlateForm() {
    return (
        <form className="flex flex-col">
            <input
                className="rounded-md text-center text-6xl text-gray-800 font-bold mb-4 placeholder:text-gray-200 border-gray-100"
                type="text"
                placeholder="PLACA"
            />
            <Button
                fullWidth>
                Buscar
            </Button>
        </form>
    )
}