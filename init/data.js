const sampleListings = [
      {
  title: "Luxury Beach Villa in Goa",
  description:
    "A beautiful private villa near the beach with modern interiors, swimming pool and peaceful surroundings.",
  category: "Beach",
  images: [
    {
      filename: "goa1",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6"
    },
    {
      filename: "goa2",
      url: "https://images.unsplash.com/photo-1582610116397-edb318620f90"
    },
    {
      filename: "goa3",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    }
  ],
  price: 8500,
  location: "Goa",
  country: "India"
},


{
  title: "Royal Heritage Palace Stay in Jaipur",
  description:
    "Experience royal Rajasthan with traditional architecture, luxury rooms and palace-style hospitality.",
  category: "Historical",
  images: [
    {
      filename: "jaipur1",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245"
    },
    {
      filename: "jaipur2",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41"
    },
    {
      filename: "jaipur3",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada"
    }
  ],
  price: 6500,
  location: "Jaipur, Rajasthan",
  country: "India"
},


{
  title: "Mountain Cottage in Manali",
  description:
    "Cozy wooden cottage surrounded by snow mountains, perfect for couples and nature lovers.",
  category: "Mountain",
  images: [
    {
      filename: "manali1",
      url: "https://images.unsplash.com/photo-1544986581-efac024faf62"
    },
    {
      filename: "manali2",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    {
      filename: "manali3",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    }
  ],
  price: 4500,
  location: "Manali, Himachal Pradesh",
  country: "India"
},


{
  title: "Modern Apartment in Mumbai",
  description:
    "A stylish city apartment close to major attractions with amazing skyline views.",
  category: "Iconic Cities",
  images: [
    {
      filename: "mumbai1",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    {
      filename: "mumbai2",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    {
      filename: "mumbai3",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    }
  ],
  price: 5500,
  location: "Mumbai, Maharashtra",
  country: "India"
},


{
  title: "Luxury Houseboat in Kerala",
  description:
    "Stay on traditional Kerala houseboats with beautiful backwater views and authentic cuisine.",
  category: "Lake",
  images: [
    {
      filename: "kerala1",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
    },
    {
      filename: "kerala2",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
    },
    {
      filename: "kerala3",
      url: "https://images.unsplash.com/photo-1609920658906-8223bd289001"
    }
  ],
  price: 7000,
  location: "Alappuzha, Kerala",
  country: "India"
},


{
  title: "Farmhouse Retreat Near Delhi",
  description:
    "A peaceful farmhouse surrounded by greenery with private garden and outdoor activities.",
  category: "Farmhouse",
  images: [
    {
      filename: "farm1",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      filename: "farm2",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    {
      filename: "farm3",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  ],
  price: 9000,
  location: "Gurgaon, Haryana",
  country: "India"
},


{
  title: "Luxury Desert Camp in Jaisalmer",
  description:
    "Enjoy desert nights with luxury tents, cultural performances and beautiful sunset views.",
  category: "Trending",
  images: [
    {
      filename: "desert1",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada"
    },
    {
      filename: "desert2",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      filename: "desert3",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
    }
  ],
  price: 6000,
  location: "Jaisalmer, Rajasthan",
  country: "India"
},


{
  title: "Cozy Wooden Cabin in Ooty",
  description:
    "A peaceful cabin surrounded by hills and forests, ideal for a relaxing holiday.",
  category: "Mountain",
  images: [
    {
      filename: "ooty1",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    {
      filename: "ooty2",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
    },
    {
      filename: "ooty3",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    }
  ],
  price: 4000,
  location: "Ooty, Tamil Nadu",
  country: "India"
},


{
  title: "Luxury Villa in Udaipur",
  description:
    "Beautiful lakeside villa with royal interiors and breathtaking views of Udaipur.",
  category: "Iconic Cities",
  images: [
    {
      filename: "udaipur1",
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      filename: "udaipur2",
      url: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
    },
    {
      filename: "udaipur3",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    }
  ],
  price: 7500,
  location: "Udaipur, Rajasthan",
  country: "India"
},


{
  title: "Tree House Stay in Coorg",
  description:
    "Unique tree house experience surrounded by coffee plantations and nature.",
  category: "Rooms",
  images: [
    {
      filename: "coorg1",
      url: "https://images.unsplash.com/photo-1520984032042-162d526883e0"
    },
    {
      filename: "coorg2",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    {
      filename: "coorg3",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    }
  ],
  price: 5000,
  location: "Coorg, Karnataka",
  country: "India"
},

];

module.exports = { data: sampleListings };