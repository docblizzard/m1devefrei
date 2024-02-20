import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
 
const doctorsData = [
  {
    id: '1',
    name: 'Samia Mekame',
    speciality: 'OPHTALMOLOGIST',
  },
  {
    id: '2',
    name: 'Catherine Bedoy',
    speciality: 'PSYCHOLOGIST',
  },
];

const typeDefs = `#graphql
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

const resolvers = {
  Query: {
    doctors: (parent, args, context, info) => doctorsData,
    doctor: (parent, args, context, info) => {
      const id = args.id
      return doctorsData.find(d => d.id === id)
    },
  },

  Doctor: {
    addresses: (parent, args, context, info) => {
      return []
    }
  }
 };

 
 const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
 
console.log(`🚀  Server ready at: ${url}`);