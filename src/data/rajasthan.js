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


const heroImage =
  "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751427/Rajasthan_zgmyyl.jpg";

const rajasthan = {
  id: 1,

  title: "Royale Rajasthan",

  subtitle: "Jaipur • Jodhpur • Jaisalmer",

  heroImage,

  duration: "7 Days / 6 Nights",

  state: "Rajasthan",

  cities: 3,

  rating: 4.9,

  basePrice: 11999,

  seats: 44,

  nextDeparture: "06 Sept 2026",

 includes: [
  {
    title: "Hotel",
    icon: "Hotel",
  },
  {
    title: "Meals",
    icon: "Meals",
  },
  {
    title: "Train",
    icon: "Train",
  },
  {
    title: "Transport",
    icon: "Transport",
  },
  {
    title: "Sightseeing",
    icon: "Sightseeing",
  },
  {
    title: "Coordinator",
    icon: "Coordinator",
  },
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

  tourInformation: {

  transportation: [
    "Railway Journey in Sleeper Class Non-AC / AC 3 Tier (as selected) from Pune to Pune.",
    "Comfortable AC / Non-AC Bus, Tempo Traveller or Mini Bus depending on group size."
  ],

  accommodation: [
    "Hotels on sharing basis as selected while booking.",
    "One night Desert Camp stay in Jaisalmer."
  ],

  meals: [
    "Breakfast & Dinner as mentioned in itinerary.",
    "No meals during train journey.",
    "Meals served at hotel or enroute as per itinerary."
  ],

  includes: [
    "Railway journey from Pune to Pune.",
    "Hotel accommodation.",
    "Desert Camp stay.",
    "Breakfast & Dinner.",
    "All sightseeing as per itinerary.",
    "Entry charges included.",
    "Music Night.",
    "Desert Jeep Safari.",
    "Team Building Activities.",
    "Experienced Tour Coordinators.",
    "Security arrangements.",
    "Bag Tags for all participants."
  ],

  excludes: [
    "Meals during onward and return train journey.",
    "Room upgrades.",
    "Adventure activity charges.",
    "Personal expenses.",
    "Laundry.",
    "Room Service.",
    "Telephone charges.",
    "Professional camera charges.",
    "Accommodation not mentioned.",
    "Sightseeing not mentioned.",
    "Anything not mentioned under Includes."
  ]

},
needToKnow: {

  thingsToCarry: [

    "Original Government Photo ID",

    "College / School ID Card",

    "Sports Shoes",

    "Comfortable Clothes",

    "Cap / Hat",

    "Sunglasses",

    "Sunscreen Lotion",

    "Water Bottle",

    "Mobile Charger",

    "Personal Medicines"

  ],

  documents: [

    "Original Aadhaar Card",

    "Student ID",

    "Booking Confirmation"

  ],

  weather:

  "September to February offers pleasant weather with warm days and cool nights. Carry a light jacket for evenings.",

  notes: [

    "Follow Tour Manager Instructions.",

    "Reach station before reporting time.",

    "Respect local culture.",

    "Keep valuables safely.",

    "Do not litter tourist places."

  ]

},
policies: {

  payment: [

    "30% advance payment is mandatory for booking confirmation.",

    "Remaining balance must be paid 30 days before departure.",

    "Payments accepted via UPI, NEFT, RTGS, IMPS, Debit/Credit Card."

  ],

  cancellation: [

    "30+ Days : Booking amount deduction only.",

    "15–29 Days : 50% cancellation charges.",

    "7–14 Days : 75% cancellation charges.",

    "Less than 7 Days : No Refund."

  ]

},
faq: [

  {

    question:
      "Is train ticket included?",

    answer:
      "Yes. Sleeper or AC ticket is included depending upon your selected package."

  },

  {

    question:
      "Are sightseeing entry tickets included?",

    answer:
      "Yes. All sightseeing mentioned in the itinerary is included."

  },

  {

    question:
      "Do you provide Tour Coordinators?",

    answer:
      "Yes. Experienced Tour Coordinators travel with every group."

  },

  {

    question:
      "Can solo travellers join?",

    answer:
      "Yes. Solo travellers are welcome."

  },

  {

    question:
      "Will hotels be AC?",

    answer:
      "Yes. Comfortable hotels are provided according to the selected package."

  },

  {

    question:
      "Is Desert Camp included?",

    answer:
      "Yes. One night Desert Camp stay with cultural program is included."

  }

],
    quickIncludes: [
  { title: "Hotel", icon: "Hotel" },
  { title: "Meals", icon: "Meals" },
  { title: "Train", icon: "Train" },
  { title: "Transport", icon: "Transport" },
  { title: "Sightseeing", icon: "Sightseeing" },
  { title: "Coordinator", icon: "Coordinator" },
  ],
};

export default rajasthan;