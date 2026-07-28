const sampleListings = [
{
  title: "Heritage Villa in Mysuru",
  description: "Stay in a beautifully restored heritage villa located close to Mysore Palace and lush gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Near Mysore Palace, Mysuru, Karnataka",
  country: "India",
},

{
  title: "Beachfront Cottage in Diu",
  description: "Wake up to the sound of waves in this charming beachfront cottage overlooking the Arabian Sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Nagoa Beach, Diu",
  country: "India",
},

{
  title: "Royal Palace Stay",
  description: "Experience royal hospitality in the Pink City with traditional Rajasthani architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Pink City, Jaipur, Rajasthan",
  country: "India",
},

{
  title: "Luxury Beach Resort",
  description: "Enjoy pristine beaches, water sports, and breathtaking sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 6900,
  location: "Baga Beach, North Goa",
  country: "India",
},

{
  title: "Skyline Apartment",
  description: "Modern apartment with panoramic city views and premium amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5500,
  location: "Marine Drive, Mumbai, Maharashtra",
  country: "India",
},

{
  title: "Modern City Loft",
  description: "A stylish loft located in the heart of India's capital.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 4800,
  location: "Connaught Place, New Delhi",
  country: "India",
},

{
  title: "Lake View Haveli",
  description: "Relax beside the beautiful lakes with luxurious heritage interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=800&q=60",
  },
  price: 6100,
  location: "Lake Pichola, Udaipur, Rajasthan",
  country: "India",
},

{
  title: "Tea Garden Retreat",
  description: "A peaceful retreat surrounded by lush tea plantations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Tea Gardens, Munnar, Kerala",
  country: "India",
},

{
  title: "Ganges Riverside Stay",
  description: "Wake up to mesmerizing sunrise views over the holy Ganges.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Dashashwamedh Ghat, Varanasi, Uttar Pradesh",
  country: "India",
},

{
  title: "Yoga Ashram Retreat",
  description: "Reconnect with nature and yourself in the yoga capital of the world.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Laxman Jhula, Rishikesh, Uttarakhand",
  country: "India",
},

{
  title: "Snow Mountain Chalet",
  description: "Stay amidst snow-capped mountains and scenic pine forests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 5800,
  location: "The Ridge, Shimla, Himachal Pradesh",
  country: "India",
},

{
  title: "Adventure Cabin",
  description: "Perfect stay for trekking and adventure lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=60",
  },
  price: 4900,
  location: "Old Manali, Himachal Pradesh",
  country: "India",
},

{
  title: "Tea Estate Bungalow",
  description: "Experience colonial charm surrounded by rolling tea gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Mall Road, Darjeeling, West Bengal",
  country: "India",
},

{
  title: "Hill Station Cottage",
  description: "Cozy wooden cottage with spectacular mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Doddabetta Peak, Ooty, Tamil Nadu",
  country: "India",
},

{
  title: "Backwater Houseboat",
  description: "Enjoy a luxurious stay floating through Kerala's backwaters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a26db0f5b3c6?auto=format&fit=crop&w=800&q=60",
  },
  price: 7200,
  location: "Alleppey Backwaters, Kerala",
  country: "India",
},

{
  title: "Colonial Heritage Home",
  description: "Experience Portuguese-inspired architecture and coastal beauty.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Fort Kochi, Kerala",
  country: "India",
},

{
  title: "French Quarter Villa",
  description: "Elegant villa in the heart of Pondicherry's French Quarter.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 4600,
  location: "White Town, Puducherry",
  country: "India",
},

{
  title: "Golden Desert Camp",
  description: "Luxury tents with unforgettable desert sunsets and camel safaris.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 6500,
  location: "Sam Sand Dunes, Jaisalmer, Rajasthan",
  country: "India",
},

{
  title: "Himalayan View Hotel",
  description: "Breathtaking Himalayan views with modern comfort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
  },
  price: 7100,
  location: "Shanti Stupa, Leh, Ladakh",
  country: "India",
},

{
  title: "Ancient Temple Retreat",
  description: "Stay near the UNESCO World Heritage ruins and monuments.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Virupaksha Temple, Hampi, Karnataka",
  country: "India",
},

{
  title: "Luxury Houseboat",
  description: "Cruise through the tranquil backwaters while enjoying luxury accommodations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 7600,
  location: "Vembanad Lake, Kumarakom, Kerala",
  country: "India",
},

{
  title: "Snow Valley Resort",
  description: "Beautiful resort surrounded by snow-covered mountains.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 6400,
  location: "Gulmarg Gondola, Jammu & Kashmir",
  country: "India",
},

{
  title: "Valley View Cottage",
  description: "Enjoy breathtaking Himalayan valley views from your private balcony.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 5400,
  location: "Dal Lake, Srinagar, Jammu & Kashmir",
  country: "India",
},

{
  title: "Tea Estate Villa",
  description: "A peaceful villa surrounded by lush tea plantations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Sim's Park, Coonoor, Tamil Nadu",
  country: "India",
},

{
  title: "Riverfront Camp",
  description: "Luxury camping experience beside the river with adventure activities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Parvati River, Kasol, Himachal Pradesh",
  country: "India",
},

{
  title: "Beach Paradise Villa",
  description: "A luxurious villa just steps away from the golden beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 7200,
  location: "Lighthouse Beach, Kovalam, Kerala",
  country: "India",
},

{
  title: "Colonial Heritage Stay",
  description: "Stay in a beautifully restored colonial mansion.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5100,
  location: "Fontainhas, Panaji, Goa",
  country: "India",
},

{
  title: "Lakeside Cabin",
  description: "Relax beside a serene lake surrounded by lush greenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Naini Lake, Nainital, Uttarakhand",
  country: "India",
},

{
  title: "Mountain Escape",
  description: "Perfect destination for trekking and nature lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Auli Ski Resort, Uttarakhand",
  country: "India",
},

{
  title: "Royal Haveli",
  description: "Experience Rajasthan's royal heritage in a luxurious haveli.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 6900,
  location: "Junagarh Fort, Bikaner, Rajasthan",
  country: "India",
},

{
  title: "Temple City Retreat",
  description: "Stay near ancient temples with modern comfort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Meenakshi Amman Temple, Madurai, Tamil Nadu",
  country: "India",
},

{
  title: "Coastal Escape",
  description: "Wake up to stunning sea views and fresh ocean breeze.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 6100,
  location: "Om Beach, Gokarna, Karnataka",
  country: "India",
},

{
  title: "Forest Eco Resort",
  description: "Reconnect with nature in the heart of a wildlife sanctuary.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 5700,
  location: "Bandipur National Park, Karnataka",
  country: "India",
},

{
  title: "Coffee Plantation Stay",
  description: "Wake up surrounded by aromatic coffee plantations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 4900,
  location: "Madikeri, Coorg, Karnataka",
  country: "India",
},

{
  title: "Island Beach Resort",
  description: "A tropical island experience with crystal-clear waters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 9800,
  location: "Cellular Jail, Port Blair, Andaman & Nicobar Islands",
  country: "India",
},

{
  title: "Ocean View Villa",
  description: "Luxury accommodation overlooking the Bay of Bengal.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 7100,
  location: "RK Beach, Visakhapatnam, Andhra Pradesh",
  country: "India",
},

{
  title: "Heritage Fort Stay",
  description: "Live like royalty in a restored historic fort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 8700,
  location: "Chittorgarh Fort, Rajasthan",
  country: "India",
},

{
  title: "Waterfall Cottage",
  description: "Stay close to spectacular waterfalls and lush forests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Jog Falls View Point, Karnataka",
  country: "India",
},

{
  title: "Hilltop Retreat",
  description: "A peaceful escape with panoramic mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 5300,
  location: "Nakki Lake, Mount Abu, Rajasthan",
  country: "India",
},

{
  title: "Sunset Beach Cottage",
  description: "Watch unforgettable sunsets from your private beachfront cottage.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 6800,
  location: "Golden Beach, Puri, Odisha",
  country: "India",
},

{
  title: "Luxury Riverside Villa",
  description: "Elegant riverside villa with stunning sunrise views and modern amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 7800,
  location: "Har Ki Pauri, Haridwar, Uttarakhand",
  country: "India",
},

{
  title: "Hill View Cottage",
  description: "A peaceful cottage surrounded by green hills and fresh mountain air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4600,
  location: "Camel's Back Road, Mussoorie, Uttarakhand",
  country: "India",
},

{
  title: "Royal Desert Camp",
  description: "Luxury camping experience with camel safaris and cultural performances.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 6200,
  location: "Mehrangarh Fort, Jodhpur, Rajasthan",
  country: "India",
},

{
  title: "Backwater Escape",
  description: "Private villa surrounded by Kerala's peaceful backwaters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 7100,
  location: "Ashtamudi Lake, Kollam, Kerala",
  country: "India",
},

{
  title: "Lakefront Resort",
  description: "Relax beside a crystal-clear lake with premium hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 6700,
  location: "Upper Lake, Bhopal, Madhya Pradesh",
  country: "India",
},

{
  title: "Beach Breeze Villa",
  description: "Enjoy spectacular sunsets just steps from the beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 6900,
  location: "Shore Temple, Mahabalipuram, Tamil Nadu",
  country: "India",
},

{
  title: "Coffee Estate Cottage",
  description: "Stay amidst lush coffee plantations and misty hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Mullayanagiri Peak, Chikmagalur, Karnataka",
  country: "India",
},

{
  title: "Wildlife Jungle Resort",
  description: "Luxury stay near India's famous tiger reserve.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 6100,
  location: "Ranthambore National Park, Rajasthan",
  country: "India",
},

{
  title: "Mountain View Chalet",
  description: "Enjoy breathtaking Himalayan landscapes from your balcony.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5800,
  location: "McLeod Ganj, Dharamshala, Himachal Pradesh",
  country: "India",
},

{
  title: "Colonial Garden Villa",
  description: "A charming colonial villa surrounded by beautiful gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5400,
  location: "Ward's Lake, Shillong, Meghalaya",
  country: "India",
},

{
  title: "Lakeside Palace Stay",
  description: "Traditional palace converted into a luxury lakeside hotel.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 8200,
  location: "Naini Lake, Nainital, Uttarakhand",
  country: "India",
},

{
  title: "Nature Eco Lodge",
  description: "Eco-friendly stay surrounded by forests and waterfalls.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Edakkal Caves, Wayanad, Kerala",
  country: "India",
},

{
  title: "Luxury City Apartment",
  description: "Modern apartment located in the city's prime business district.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 6300,
  location: "Charminar, Hyderabad, Telangana",
  country: "India",
},

{
  title: "Heritage Haveli",
  description: "Experience authentic Rajasthani culture in a restored haveli.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 7600,
  location: "Brahma Temple, Pushkar, Rajasthan",
  country: "India",
},

{
  title: "Island Paradise Resort",
  description: "Luxury beachfront resort with crystal-clear waters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 9900,
  location: "Agatti Island, Lakshadweep",
  country: "India",
},

{
  title: "Temple View Homestay",
  description: "Comfortable homestay close to famous temples and cultural attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 3800,
  location: "Tirumala Temple, Tirupati, Andhra Pradesh",
  country: "India",
},

{
  title: "Sunrise Beach Resort",
  description: "Wake up to spectacular sunrise views over the Bay of Bengal.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 7400,
  location: "New Digha Beach, West Bengal",
  country: "India",
},

{
  title: "Forest Treehouse",
  description: "Stay in a luxury treehouse surrounded by lush forests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 5600,
  location: "Periyar Wildlife Sanctuary, Thekkady, Kerala",
  country: "India",
},

{
  title: "Luxury Farm Stay",
  description: "Experience rural life with modern comforts and organic farming.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 4100,
  location: "Sula Vineyards, Nashik, Maharashtra",
  country: "India",
},
];

module.exports = { data: sampleListings };