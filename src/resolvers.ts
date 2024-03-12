const FilmsData = [
  {
    id: '1',
    tile: 'Lord of the Rings',
    people: []
  }
]
const PeoplesData = [
  {
    id: '1',
    name: 'Brondo',
    eyeColor: 'Green',
    films: []
  }
]
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
    doctors: (parent, args, context, info) =>
    {
      return doctorsData
    },
    doctor: (parent, args, context, info) => {
      const id = args.id
      console.log(id)
      return doctorsData.find(d => d.id === id)
    },
    add: (parent, args, context, info) => {
      const numb1 = args.number1
      const numb2 = args.number2
      return numb1+numb2
    },
    substract: (parent, args, context, info) => {
      const numb1 = args.number1
      const numb2 = args.number2
      return numb1-numb2
    },
    multiply: (parent, args, context, info) => {
      const numb1 = args.number1
      const numb2 = args.number2
      console.log(numb1*numb2)
      return numb1*numb2
    },
    divide: (parent, args, context, info) => {
      if (args.number2 == 0 ) {

      }
      const numb1 = args.number1
      const numb2 = args.number2
      return numb1/numb2
    },
    closestColor: (parent, args, context, info) => {
      return getClosestColor(args.color,)
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
