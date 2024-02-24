import gql from "graphql-tag";

export const typeDefs = gql`
  type Doctor {
    id: ID!
    name: String
    speciality: SPECIALITY
    addresses: [Address]
  }

  type Address {
    zipCode: String
  }
 
  type Query {
    doctors: [Doctor]
    doctor(id: ID!): Doctor
  }
 
  enum SPECIALITY {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;