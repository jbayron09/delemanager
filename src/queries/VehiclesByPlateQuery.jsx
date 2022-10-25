import {gql} from "@apollo/client";

const VehiclesByPlateQuery = gql`
query Vehicles($plate: String!) {
    vehicles (filters: {
        plate: {
            eq: $plate
        }
    }) {
        data {
            id
            attributes {
                plate
            }
        }
    }
}
`;

export default VehiclesByPlateQuery
