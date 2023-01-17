export const zodiacSigns = [
  {
    id: '111',
    label: 'Aries',
    from: {
      month: 'March',
      day: '21'
    },
    to: {
      month: 'April',
      day: '19'
    },
    sandwich: ['hot dog', 'burrito', 'wrap'],
    sign: 'Ram',
    icon: '♈️',
  },
  {
    id: '222',
    label: 'Taurus',
    from: {
      month: 'April',
      day: '20'
    },
    to: {
      month: 'May',
      day: '20'
    },
    sandwich: ['BLT', 'taco', 'sub'],
    sign: 'Bull',
    icon: '♉️',
  },
  {
    id: '333',
    label: 'Gemini',
    from: {
      month: 'March',
      day: '21'
    },
    to: {
      month: 'April',
      day: '19'
    },
    sandwich: ['Pop-Tart', 'ice cream waffles', 'BLT'],
    sign: 'Twins',
    icon: '♊️'
  },
  {
    id: '444',
    label: 'Cancer',
    from: {
      month: 'June',
      day: '22'
    },
    to: {
      month: 'July',
      day: '22'
    },
    sandwich: ['burrito', 'wrap', 'taco'],
    sign: 'Crab',
    icon: '♋️'
  },
  {
    id: '555',
    label: 'Leo',
    from: {
      month: 'July',
      day: '23'
    },
    to: {
      month: 'August',
      day: '22'
    },
    sandwich: ['hot dog', 'BLT', 'taco'],
    sign: 'Lion',
    icon: '♌️'
  },
  {
    id: '666',
    label: 'Virgo',
    from: {
      month: 'August',
      day: '23'
    },
    to: {
      month: 'September',
      day: '22'
    },
    sandwich: ['sub', 'club', 'wrap'],
    sign: 'Virgin',
    icon: '♍️'
  },
  {
    id: '777',
    label: 'Libra',
    from: {
      month: 'September',
      day: '23'
    },
    to: {
      month: 'October',
      day: '22'
    },
    sandwich: ['taco', 'Pop-Tart', 'BLT'],
    sign: 'Balance',
    icon: '♎️'
  },
  {
    id: '888',
    label: 'Scorpius',
    from: {
      month: 'October',
      day: '24'
    },
    to: {
      month: 'November',
      day: '21'
    },
    sandwich: ['ice cream waffles', 'BLT', 'club'],
    sign: 'Scorpion',
    icon: '♏️'
  },
  {
    id: '999',
    label: 'Sagittarius',
    from: {
      month: 'November',
      day: '22'
    },
    to: {
      month: 'December',
      day: '21'
    },
    sandwich: ['hot dog', 'club', 'ice cream waffles'],
    sign: 'Archer',
    icon: '♐️'
  },
  {
    id: '112',
    label: 'Capricorn',
    from: {
      month: 'December',
      day: '22'
    },
    to: {
      month: 'January',
      day: '19'
    },
    sandwich: ['BLT', 'sub', 'wrap'],
    sign: 'Goat',
    icon: '♋️'
  },
  {
    id: '223',
    label: 'Aquarius',
    from: {
      month: 'January',
      day: '20'
    },
    to: {
      month: 'February',
      day: '18'
    },
    sandwich: ['taco', 'burrito', 'wrap'],
    sign: 'Water Bearer',
    icon: '♒️'
  },
  {
    id: '334',
    label: 'Pisces',
    from: {
      month: 'February',
      day: '19'
    },
    to: {
      month: 'March',
      day: '20'
    },
    sandwich: ['Pop-Tart', 'taco', 'ice cream waffles'],
    sign: 'Fish',
    icon: '♓️'
  }
]

export const sandwiches = [
  {
    id: 'aaa',
    label: 'BLT',
    image: '/sandwiches/BLT.png',
  },
  {
    id: 'bbb',
    label: 'club',
    image: '/sandwiches/club.png',
  },
  {
    id: 'ccc',
    label: 'ice cream waffles',
    image: '/sandwiches/ice_cream_waffles.png',
  },
  {
    id: 'ddd',
    label: 'sub',
    image: '/sandwiches/sub.png',
  },
  {
    id: 'eee',
    label: 'hot dog',
    image: '/sandwiches/hot_dog.png',
  },
  {
    id: 'fff',
    label: 'taco',
    image: '/sandwiches/taco.png',
  },
  {
    id: 'ggg',
    label: 'wrap',
    image: '/sandwiches/wrap.png',
  },
  {
    id: 'hhh',
    label: 'burrito',
    image: '/sandwiches/burrito.png',
  },
  {
    id: 'jjj',
    label: 'Pop-Tart',
    image: '/sandwiches/pop_tart.png',
  },
]

export const structures = [
  {
    id: '!!!',
    label: 'Structure Purist',
    sandwiches: ['BLT', 'club', 'ice cream waffles'],
    description: 'A sandwich must have a classic sandwich shape'
  },
  {
    id: '@@@',
    label: 'Structure Neutral',
    sandwiches: ['sub', 'hot dog', 'taco'],
    description: 'The container must be on either side of the toppings'
  },
  {
    id: '###',
    label: 'Structure Rebel',
    sandwiches: ['wrap', 'burrito', 'Pop-Tart'],
    description: 'Can contain any food enveloped in any way by a containing food'
  },
]

export const ingredients = [
  {
    id: '$$$',
    label: 'Ingredient Purist',
    sandwiches: ['BLT', 'sub', 'wrap'],
    description: 'Must have classic sandwich toppings'
  },
  {
    id: '%%%',
    label: 'Ingredient Neutral',
    sandwiches: ['club', 'hot dog', 'burrito'],
    description: 'Can contain a broader scope of savoury ingredients'
  },
  {
    id: '^^^',
    label: 'Ingredient Rebel',
    sandwiches: ['ice cream waffles', 'taco', 'Pop-Tart'],
    description: 'Can contain literally any food products sandwiched together'
  },
]
