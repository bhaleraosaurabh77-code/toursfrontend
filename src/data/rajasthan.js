// import heroImage from "../assets/bg.jpg";

// const rajasthan = {
//   id: 1,

//   title: "Royale Rajasthan",

//   subtitle: "Jaipur • Jodhpur • Jaisalmer • Udaipur",

//   heroImage,

//   duration: "7 Days / 6 Nights",

//   state: "Rajasthan",

//   cities: 3,

//   rating: 4.9,

//   basePrice: 11999,

//   seats: 44,

//   nextDeparture: "06 Sept 2026",

//   tourIncludes: [
//     "Hotel",
//     "Meals",
//     "Transport",
//     "Sightseeing"
//   ],

//   itinerary: [
//   {
//     day: 1,
//     title: "Pune to Jaipur by Train",
//     description:
//       "Assemble at the designated departure point, meet your tour coordinators and begin your exciting journey towards Jaipur.",
//     highlights: [
//       "Group Introduction",
//       "Journey Begins",
//       "Overnight Train Journey"
//     ],
//     meals: [],
//     stay: "Train"
//   },

//   {
//     day: 2,
//     title: "Arrive in Jaipur - The Pink City",
//     description:
//       "Arrival at Jaipur. Check into the hotel and explore the beautiful Pink City.",
//     highlights: [
//       "Jantar Mantar",
//       "Hawa Mahal",
//       "Albert Hall Museum"
//     ],
//     meals: ["Dinner"],
//     stay: "Hotel"
//   },

//   {
//     day: 3,
//     title: "Jaipur Sightseeing",
//     description:
//       "Visit Jaipur's famous attractions before boarding the overnight train.",
//     highlights: [
//       "Amer Fort",
//       "Jal Mahal",
//       "Birla Mandir",
//       "Block Printing Market"
//     ],
//     meals: ["Breakfast", "Dinner"],
//     stay: "Train"
//   },

//   {
//     day: 4,
//     title: "Jaisalmer Desert Camp",
//     description:
//       "Experience the golden desert with camel safari, sunset and cultural evening.",
//     highlights: [
//       "Sam Sand Dunes",
//       "Camel Safari",
//       "Desert Sunset",
//       "Bonfire",
//       "Cultural Music"
//     ],
//     meals: ["Breakfast", "Dinner"],
//     stay: "Desert Camp"
//   },

//   {
//     day: 5,
//     title: "Jaisalmer to Jodhpur",
//     description:
//       "Explore Jaisalmer before proceeding towards Jodhpur.",
//     highlights: [
//       "Jaisalmer Fort",
//       "Patwon Ki Haveli",
//       "Kuldhara Village"
//     ],
//     meals: ["Breakfast", "Dinner"],
//     stay: "Hotel"
//   },

//   {
//     day: 6,
//     title: "Jodhpur Sightseeing",
//     description:
//       "Explore the Blue City before boarding the return train.",
//     highlights: [
//       "Mehrangarh Fort",
//       "Jaswant Thada",
//       "Umaid Bhawan Palace"
//     ],
//     meals: ["Breakfast", "Dinner"],
//     stay: "Train"
//   },

//   {
//     day: 7,
//     title: "Arrival in Pune",
//     description:
//       "Reach Pune with unforgettable memories of Rajasthan.",
//     highlights: [
//       "Tour Ends",
//       "Arrival at Pune"
//     ],
//     meals: [],
//     stay: "-"
//   }
// ],

// };
// highlights: [

// {
// title: "Amer Fort",
// description: "Explore the magnificent hill fort of Jaipur.",
// icon: "castle",
// },

// {
// title: "Sam Sand Dunes",
// description: "Enjoy breathtaking sunset views in the Thar Desert.",
// icon: "mountain",
// },

// {
// title: "Luxury Desert Camp",
// description: "Experience an unforgettable overnight desert stay.",
// icon: "tent",
// },

// {
// title: "Camel Safari",
// description: "Ride through the golden dunes of Jaisalmer.",
// icon: "camera",
// },

// {
// title: "Cultural Evening",
// description: "Traditional Rajasthani folk dance and music.",
// icon: "music",
// },

// {
// title: "Mehrangarh Fort",
// description: "Visit one of India's largest and most beautiful forts.",
// icon: "landmark",
// },

// ]

// export default rajasthan;


import heroImage from "../assets/bg.jpg";

const rajasthan = {
  id: 1,

  title: "Royale Rajasthan",

  subtitle: "Jaipur • Jodhpur • Jaisalmer • Udaipur",

  heroImage,

  duration: "7 Days / 6 Nights",

  state: "Rajasthan",

  cities: 3,

  rating: 4.9,

  basePrice: 11999,

  seats: 44,

  nextDeparture: "06 Sept 2026",

  tourIncludes: [
    "Hotel",
    "Meals",
    "Transport",
    "Sightseeing"
  ],

  // ⭐ Tour Highlights
  highlights: [
    {
      title: "Amer Fort",
      description: "Explore Jaipur's magnificent hill fort.",
      icon: "castle",
    },
    {
      title: "Hawa Mahal",
      description: "Visit the iconic Palace of Winds.",
      icon: "landmark",
    },
    {
      title: "Jantar Mantar",
      description: "UNESCO World Heritage astronomical observatory.",
      icon: "landmark",
    },
    {
      title: "Jal Mahal",
      description: "Beautiful palace located in Man Sagar Lake.",
      icon: "camera",
    },
    {
      title: "Albert Hall Museum",
      description: "Discover Rajasthan's rich history and art.",
      icon: "landmark",
    },
    {
      title: "Block Printing Market",
      description: "Shop for authentic Rajasthani handicrafts.",
      icon: "map",
    },
    {
      title: "Sam Sand Dunes",
      description: "Enjoy breathtaking desert sunset views.",
      icon: "mountain",
    },
    {
      title: "Camel Safari",
      description: "Ride through the golden Thar Desert.",
      icon: "camera",
    },
    {
      title: "Luxury Desert Camp",
      description: "Experience an unforgettable desert stay.",
      icon: "tent",
    },
    {
      title: "Cultural Evening",
      description: "Traditional folk dance and music performance.",
      icon: "music",
    },
    {
      title: "Jaisalmer Fort",
      description: "Explore the Golden Fort of Rajasthan.",
      icon: "castle",
    },
    {
      title: "Patwon Ki Haveli",
      description: "Visit beautifully carved heritage havelis.",
      icon: "landmark",
    },
    {
      title: "Kuldhara Village",
      description: "Explore Rajasthan's mysterious abandoned village.",
      icon: "map",
    },
    {
      title: "Mehrangarh Fort",
      description: "One of India's largest and most beautiful forts.",
      icon: "castle",
    },
    {
      title: "Umaid Bhawan Palace",
      description: "Visit the magnificent royal palace of Jodhpur.",
      icon: "landmark",
    },
  ],

  itinerary: [
    {
      day: 1,
      title: "Pune to Jaipur by Train",
      description:
        "Assemble at the designated departure point, meet your tour coordinators and begin your exciting journey towards Jaipur.",
      highlights: [
        "Group Introduction",
        "Journey Begins",
        "Overnight Train Journey"
      ],
      meals: [],
      stay: "Train"
    },

    {
      day: 2,
      title: "Arrive in Jaipur - The Pink City",
      description:
        "Arrival at Jaipur. Check into the hotel and explore the beautiful Pink City.",
      highlights: [
        "Jantar Mantar",
        "Hawa Mahal",
        "Albert Hall Museum"
      ],
      meals: ["Dinner"],
      stay: "Hotel"
    },

    {
      day: 3,
      title: "Jaipur Sightseeing",
      description:
        "Visit Jaipur's famous attractions before boarding the overnight train.",
      highlights: [
        "Amer Fort",
        "Jal Mahal",
        "Birla Mandir",
        "Block Printing Market"
      ],
      meals: ["Breakfast", "Dinner"],
      stay: "Train"
    },

    {
      day: 4,
      title: "Jaisalmer Desert Camp",
      description:
        "Experience the golden desert with camel safari, sunset and cultural evening.",
      highlights: [
        "Sam Sand Dunes",
        "Camel Safari",
        "Desert Sunset",
        "Bonfire",
        "Cultural Music"
      ],
      meals: ["Breakfast", "Dinner"],
      stay: "Desert Camp"
    },

    {
      day: 5,
      title: "Jaisalmer to Jodhpur",
      description:
        "Explore Jaisalmer before proceeding towards Jodhpur.",
      highlights: [
        "Jaisalmer Fort",
        "Patwon Ki Haveli",
        "Kuldhara Village"
      ],
      meals: ["Breakfast", "Dinner"],
      stay: "Hotel"
    },

    {
      day: 6,
      title: "Jodhpur Sightseeing",
      description:
        "Explore the Blue City before boarding the return train.",
      highlights: [
        "Mehrangarh Fort",
        "Jaswant Thada",
        "Umaid Bhawan Palace"
      ],
      meals: ["Breakfast", "Dinner"],
      stay: "Train"
    },

    {
      day: 7,
      title: "Arrival in Pune",
      description:
        "Reach Pune with unforgettable memories of Rajasthan.",
      highlights: [
        "Tour Ends",
        "Arrival at Pune"
      ],
      meals: [],
      stay: "-"
    }
  ],
};

export default rajasthan;