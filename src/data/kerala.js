import heroImage from "../assets/bg.jpg";

const rajasthan = {
  id: 1,

  title: "kerala Delight",

  subtitle: "Kochi • Munnar • Alleppey" ,

  heroImage,

  duration: "6 Days / 5 Nights",

  state: "Kerala",

  cities: 3,

  rating: 4.9,

  basePrice: 14999,

  seats: 44,

  nextDeparture: "13 Sept 2026",

  tourIncludes: [
    "Hotel",
    "Meals",
    "Transport",
    "Sightseeing"
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

departures: [
  { id: 1, date: "06 Sept 2026", price: 11999, seats: 44 },
  { id: 2, date: "13 Sept 2026", price: 11999, seats: 44 },
  { id: 3, date: "20 Sept 2026", price: 11999, seats: 44 },
  { id: 4, date: "27 Sept 2026", price: 11999, seats: 44 },

  { id: 5, date: "04 Oct 2026", price: 11999, seats: 44 },
  { id: 6, date: "11 Oct 2026", price: 12499, seats: 44 },
  { id: 7, date: "18 Oct 2026", price: 13999, seats: 44 },
  { id: 8, date: "25 Oct 2026", price: 14999, seats: 44 },

  { id: 9, date: "01 Nov 2026", price: 15499, seats: 44 },
  { id: 10, date: "08 Nov 2026", price: 14499, seats: 44 },
  { id: 11, date: "15 Nov 2026", price: 13999, seats: 44 },
  { id: 12, date: "22 Nov 2026", price: 12999, seats: 44 },
  { id: 13, date: "29 Nov 2026", price: 12999, seats: 44 },

  { id: 14, date: "06 Dec 2026", price: 13499, seats: 44 },
  { id: 15, date: "13 Dec 2026", price: 13499, seats: 44 },
  { id: 16, date: "20 Dec 2026", price: 16999, seats: 44 },
  { id: 17, date: "27 Dec 2026", price: 18999, seats: 44 },

  { id: 18, date: "03 Jan 2027", price: 15999, seats: 44 },
  { id: 19, date: "10 Jan 2027", price: 13999, seats: 44 },
  { id: 20, date: "17 Jan 2027", price: 13999, seats: 44 },
  { id: 21, date: "24 Jan 2027", price: 15499, seats: 44 },
  { id: 22, date: "31 Jan 2027", price: 13499, seats: 44 },

  { id: 23, date: "07 Feb 2027", price: 13999, seats: 44 },
  { id: 24, date: "14 Feb 2027", price: 15499, seats: 44 },
  { id: 25, date: "21 Feb 2027", price: 14499, seats: 44 },
  { id: 26, date: "28 Feb 2027", price: 13999, seats: 44 },

  { id: 27, date: "07 Mar 2027", price: 12999, seats: 44 },
  { id: 28, date: "14 Mar 2027", price: 12499, seats: 44 },
  { id: 29, date: "21 Mar 2027", price: 12499, seats: 44 },
  { id: 30, date: "28 Mar 2027", price: 11999, seats: 44 },

],
};

export default rajasthan;