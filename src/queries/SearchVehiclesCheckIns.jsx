import {gql} from "@apollo/client";

const SearchVehiclesCheckIns = gql`
  query CheckIns {
    checkIns (
    pagination: { pageSize: 10 },
    sort: "createdAt:desc",
    filters: {
        parking_lot: {
            id: {
                eq: 88
            }
        },
        checked_out: {
            eq: null
        }
    }) {
        data {
            id
            attributes {
                checked_out
                createdAt
                vehicle {
                    data {
                        id
                        attributes {
                            plate
                        }
                    }
                }
            }
        }
    }
}
`;

export default SearchVehiclesCheckIns