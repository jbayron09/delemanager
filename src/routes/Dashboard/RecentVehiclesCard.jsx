const vehiclesCheckIn =  [
    {plate: 'ARM456', time: 5},
    {plate: 'ARM458', time: 5},
    {plate: 'ARM459', time: 5},
]

export default function RecentVehiclesCard(){
    return (
        <div className="bg-white rounded-md border border-gray-200">
            <p className="bg-gray-100 text-gray-700 text-base font-bold p-4">Vehiculos recientes</p>
            {
                vehiclesCheckIn.map(vehicle => (
                    <div className="flex justify-between p-4" key={Math.random()}>
                        <p className="text-base text-gray-700 font-bold">{vehicle.plate}</p>
                        <p className="text-sm text-gray-400 font-normal">hace {vehicle.time} minutos</p>
                    </div>
                ))
            }
        </div>
    )
}