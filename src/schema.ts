import gql from "graphql-tag";

export const typeDefs = gql`
  type Doctor {
    id: ID!
    name: String
    speciality: Speciality
    addresses: [Address]
  }

  type Address {
    zipCode: String
  }
 
  type Query {
    doctors(specialities: [Speciality!]): [Doctor!]
    doctor(id: ID!): Doctor
    add(number1: Int, number2: Int): Int
    substract(number1: Int, number2: Int): Int
    multiply(number1: Int, number2: Int): Int
    divide(number1: Int, number2: Int): Int
    closestColor(color: String!): String!
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;