// TODO: decide what stays here and what can be stored as a JSON file for the API to send
export const utilitiesOffered = Object.freeze([
  'Hardware',
  '3-D Printing',
  '3-D Scanning',
  'Raspberry Pi',
  'Arduino',
  'LUG API',
  'Board Games',
  'Ice Cream',
]);

export const servicesOffered = Object.freeze([
  // TODO: fill in empty entries
  {
    name: 'Hardware',
    image: require("@/assets/whiteTux.png"),
    description: 'From resistors to soldering irons, the LUG is stocked with a wide variety of hardware componants available for student use.',
    url: '',
  },
  {
    name: '3D Printing',
    image: '',
    description: 'Becoming a LUG member brings many perks such as having easy access to our 3D printer located in the ACM/LUG office. Members can watch their creations come alive for minimal cost.',
    url: 'https://lug.cs.uic.edu/3dprint/home',
  },
  {
    name: '3-D Scanning',
    image: '',
    description: 'A 3-D scanner is a device that scans and analyses objects and returns a 3-D 360° image. Available for use in the LUG office, students will have access to a rare 3-D technology, which could be used along side the 3-D scanner.',
    url: 'https://lug.cs.uic.edu/3dprint/home',
  },
  {
  name: 'Raspberry Pi',
  image: '',
  description: 'The Raspberry Pi, single-board computer, has been instrumental in encouraging student creativity and LUG is here to help students gain access to one. We offer Raspberry Pi rentals for any student interested. A Raspberry Pi is powerful enough to run a full Linux installation and many student projects; ask an officer if it\'s the right choice for you.',
  url: '',
    },
  {
    name: 'Arduino',
    image: '',
    description: 'Arduino was born to be an easy tool for fast prototyping, aimed at students without a background in electronics and programming. If you are in need of an Arduino for a class or simply want to test out the technology, LUG has you covered.',
    url: '',
  },
  {
    name: 'LUG API',
    image: '',
    description: 'LUG is determined to present students with tools that will help them on their road to success, which is why we made our API open to anyone, presenting students with the opportunity to see how this technology works.',
    url: '',
  },
  {
    name: 'Board Games',
    image: '',
    description: 'Need a break a stressful week of classes? Pick up a board game, located in the LUG office, and grab some friends. There are plenty of games to choose from.',
    url: '',
  },
  {
    name: 'Ice Cream',
    image: '',
    description: 'Ice cream, being an important part of a students diet, is available in the LUG office for a mandatory donation.',
    url: '',
  },


])
