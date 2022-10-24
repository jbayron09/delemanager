import {gql} from "@apollo/client";

const CreateVehicleMutation = gql`
  mutation CreateVehicle ($data: VehicleInput!) {
    createVehicle(data: $data) {
        data {       
            id
            attributes {
                plate
            }
        }
    }
}
`;

export default CreateVehicleMutation
