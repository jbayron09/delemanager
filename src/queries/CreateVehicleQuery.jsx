import {gql} from "@apollo/client";

const CreateVehicleQuery = gql`
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

export default CreateVehicleQuery
