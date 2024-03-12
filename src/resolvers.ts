import { GraphQLError } from "graphql";
import { getClosestColor } from "./colors.js";

 
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
  {
    id: '3',
    name: 'John Doe',
    speciality: 'OPHTALMOLOGIST',
  },
];
export const resolvers = {
  Query: {
    doctors: (parent, args, context, info) => {
      const {specialities} = args
      return doctorsData.filter(doctor => specialities.includes(doctor.speciality))
    },
    doctor: (parent, args, context, info) => {
      const id = args.id
      return doctorsData.find(d => d.id === id)
    },
    divide: (parent, args, context, info) => {
      const {number1, number2} = args
      if (number2 === 0) {
        throw new GraphQLError('cannot divide by 0')
      }
      return number1 / number2
    },
    multiply: (parent, args, context, info) => {
      const {number1, number2} = args
      return number1 * number2
    },
    closestColor: (parent, args, context, info) => {
      const {color} = args
      if (!(color.match(/^#[0-9a-fA-F]{6}/))) {
        throw new GraphQLError('color pattern does not match')
      }
      return getClosestColor(color, ["#FF5733", "#33FF57", "#3357FF"])
    }
  },

  Doctor: {
    addresses: (parent, args, context, info) => {
      return [{
        zipCode: `${parent.id}000`
      }]
    }
  }
 };
