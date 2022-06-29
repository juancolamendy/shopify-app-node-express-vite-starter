import { gql } from "@apollo/client";

export const POPULATE_PRODUCT = gql`
  mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        title
      }
    }
  }
`;
