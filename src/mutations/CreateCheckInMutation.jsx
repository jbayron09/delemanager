import {gql} from "@apollo/client";

const CreateCheckInMutation = gql`
mutation CreateCheckIn ($data:CheckInInput!) {
    createCheckIn(data: $data) {
        data {       
            id
            attributes {
                createdAt
            }
        }
    }
}
`;

export default CreateCheckInMutation
