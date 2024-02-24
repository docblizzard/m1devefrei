 
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
export const resolvers = {
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
