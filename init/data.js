const sampleListings = [
  {
  title: "Heritage Villa in Mysuru",
  description:
    "Stay in a beautifully restored heritage villa located close to Mysore Palace and lush gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Mysuru",
  country: "India",
},
{
  title: "Luxury Treehouse in Sakleshpur",
  description:
    "Enjoy a unique treehouse stay surrounded by coffee plantations and misty hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4800,
  location: "Sakleshpur",
  country: "India",
},
{
  title: "Beach Villa in Tarkarli",
  description:
    "A peaceful beach villa with crystal-clear waters and exciting water sports nearby.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5100,
  location: "Tarkarli",
  country: "India",
},
{
  title: "Luxury Homestay in Dharamshala",
  description:
    "Relax in a cozy homestay offering panoramic views of the Dhauladhar mountain range.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Dharamshala",
  country: "India",
},
{
  title: "Riverside Villa in Hampi",
  description:
    "Stay near the Tungabhadra River while exploring the UNESCO World Heritage ruins of Hampi.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Hampi",
  country: "India",
},
{
  title: "Boutique Hotel in Kolkata",
  description:
    "A stylish boutique hotel combining colonial charm with modern comfort in the City of Joy.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Kolkata",
  country: "India",
},
{
  title: "Snow View Resort in Sonamarg",
  description:
    "Enjoy unforgettable mountain views and adventure activities in the beautiful Kashmir valley.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
  },
  price: 6100,
  location: "Sonamarg",
  country: "India",
},
{
  title: "Eco Cottage in Agumbe",
  description:
    "Reconnect with nature in an eco-friendly cottage surrounded by lush rainforests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2900,
  location: "Agumbe",
  country: "India",
},
{
  title: "Beach Resort in Puri",
  description:
    "Stay near the golden beaches of Puri and enjoy easy access to the Jagannath Temple.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Puri",
  country: "India",
},
{
  title: "Luxury Apartment in Noida",
  description:
    "A spacious apartment with premium facilities located near shopping malls and business hubs.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 3400,
  location: "Noida",
  country: "India",
},
{
  title: "Valley View Cottage in Lansdowne",
  description:
    "A peaceful hill cottage surrounded by oak forests and breathtaking valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3300,
  location: "Lansdowne",
  country: "India",
},
{
  title: "Luxury Camp in Spiti Valley",
  description:
    "Experience the rugged beauty of the Himalayas with a comfortable luxury camping experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5500,
  location: "Spiti Valley",
  country: "India",
},
{
  title: "Garden Villa in Nagpur",
  description:
    "A modern villa with a spacious garden, ideal for family vacations and weekend getaways.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  },
  price: 4100,
  location: "Nagpur",
  country: "India",
},
{
  title: "Luxury Stay in Gangtok",
  description:
    "Wake up to spectacular Himalayan views in this elegant mountain retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Gangtok",
  country: "India",
},
{
  title: "Jungle Retreat in Kaziranga",
  description:
    "Enjoy an adventurous stay close to Kaziranga National Park, home of the one-horned rhinoceros.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Kaziranga",
  country: "India",
},
{
  title: "Heritage Haveli in Mandawa",
  description:
    "Stay in a beautifully decorated haveli featuring traditional Rajasthani architecture and hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 4600,
  location: "Mandawa",
  country: "India",
},
{
  title: "Island Cottage in Lakshadweep",
  description:
    "A tropical island cottage offering crystal-clear lagoons, coral reefs, and peaceful beaches.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 7900,
  location: "Lakshadweep",
  country: "India",
},
{
  title: "Luxury Farmhouse in Nashik",
  description:
    "Enjoy vineyards, fresh air, and a peaceful countryside stay in this premium farmhouse.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Nashik",
  country: "India",
},
{
  title: "Lakefront Villa in Bhopal",
  description:
    "Relax by the Upper Lake in a luxurious villa with elegant interiors and scenic surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Bhopal",
  country: "India",
},
{
  title: "Luxury Resort in Tawang",
  description:
    "A peaceful mountain resort offering stunning monastery views and unforgettable Himalayan landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 6200,
  location: "Tawang",
  country: "India",
},
  {
  title: "Luxury Villa in Chandigarh",
  description:
    "Enjoy a peaceful stay in this spacious luxury villa with modern interiors, a private garden, and premium amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 6200,
  location: "Chandigarh",
  country: "India",
},
{
  title: "Beachfront Cottage in Diu",
  description:
    "Wake up to the sound of waves in this charming beachfront cottage overlooking the Arabian Sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Diu",
  country: "India",
},
{
  title: "Heritage Palace Stay in Bikaner",
  description:
    "Experience royal Rajasthani hospitality in this beautifully restored heritage palace.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 5800,
  location: "Bikaner",
  country: "India",
},
{
  title: "Forest Lodge in Bandhavgarh",
  description:
    "Stay close to wildlife in a comfortable forest lodge near Bandhavgarh National Park.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Bandhavgarh",
  country: "India",
},
{
  title: "Lake Cottage in Bhimtal",
  description:
    "A peaceful lakeside cottage perfect for weekend getaways and family vacations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3400,
  location: "Bhimtal",
  country: "India",
},
{
  title: "Luxury Apartment in Chennai",
  description:
    "A stylish apartment with elegant interiors located near Chennai's famous Marina Beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Chennai",
  country: "India",
},
{
  title: "Hilltop Villa in Kodaikanal",
  description:
    "Enjoy breathtaking valley views from this beautiful hilltop villa surrounded by nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Kodaikanal",
  country: "India",
},
{
  title: "Coffee Estate Homestay in Chikmagalur",
  description:
    "Relax in the middle of lush coffee plantations and enjoy authentic local hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Chikmagalur",
  country: "India",
},
{
  title: "Luxury Resort in Shillong",
  description:
    "Stay in a scenic resort surrounded by waterfalls, pine forests, and rolling hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 5400,
  location: "Shillong",
  country: "India",
},
{
  title: "Snow Cabin in Auli",
  description:
    "A cozy wooden cabin offering stunning views of the snow-covered Himalayan peaks.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
  },
  price: 5100,
  location: "Auli",
  country: "India",
},
{
  title: "Riverside Camp in Tirthan Valley",
  description:
    "Spend peaceful evenings beside the river with mountain views and fresh alpine air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Tirthan Valley",
  country: "India",
},
{
  title: "Desert Camp in Kutch",
  description:
    "Experience the beauty of the White Rann while staying in a comfortable luxury desert camp.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
  },
  price: 4100,
  location: "Kutch",
  country: "India",
},
{
  title: "Ocean View Apartment in Visakhapatnam",
  description:
    "Enjoy panoramic sea views from this modern apartment located near RK Beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Visakhapatnam",
  country: "India",
},
{
  title: "Traditional Homestay in Madurai",
  description:
    "Experience Tamil culture with a comfortable stay near the famous Meenakshi Temple.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Madurai",
  country: "India",
},
{
  title: "Nature Retreat in Saputara",
  description:
    "Escape into the lush green hills of Gujarat with this peaceful nature retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Saputara",
  country: "India",
},
  {
  title: "Luxury Beach Villa in Goa",
  description:
    "Relax in a luxurious beach villa with private access to the Arabian Sea and breathtaking sunset views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 6800,
  location: "Goa",
  country: "India",
},
{
  title: "Mountain Cabin in Manali",
  description:
    "Escape to a peaceful wooden cabin surrounded by snow-covered mountains and pine forests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Manali",
  country: "India",
},
{
  title: "Royal Haveli in Jaipur",
  description:
    "Experience the grandeur of Rajasthan in a beautifully restored heritage haveli.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 5600,
  location: "Jaipur",
  country: "India",
},
{
  title: "Tea Estate Cottage in Munnar",
  description:
    "Wake up to stunning tea plantation views in this peaceful hillside cottage.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 3100,
  location: "Munnar",
  country: "India",
},
{
  title: "Lake View Villa in Udaipur",
  description:
    "Enjoy luxury living with beautiful views of Lake Pichola and the City Palace.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 5900,
  location: "Udaipur",
  country: "India",
},
{
  title: "Houseboat on Dal Lake",
  description:
    "Experience Kashmir's famous floating houseboats with mesmerizing lake views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Srinagar",
  country: "India",
},
{
  title: "Modern Apartment in Bengaluru",
  description:
    "A stylish apartment in the heart of the IT city with premium amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Bengaluru",
  country: "India",
},
{
  title: "Beach Cottage in Gokarna",
  description:
    "Spend peaceful days by the beach in this charming seaside cottage.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Gokarna",
  country: "India",
},
{
  title: "Luxury Penthouse in Mumbai",
  description:
    "Stay in a modern penthouse with panoramic skyline views and premium interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 8200,
  location: "Mumbai",
  country: "India",
},
{
  title: "Hill Retreat in Mussoorie",
  description:
    "A cozy retreat offering spectacular Himalayan views and fresh mountain air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
  },
  price: 3300,
  location: "Mussoorie",
  country: "India",
},
{
  title: "Farmhouse in Lonavala",
  description:
    "Escape to a peaceful farmhouse surrounded by lush green hills and waterfalls.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Lonavala",
  country: "India",
},
{
  title: "Treehouse in Coorg",
  description:
    "Stay among coffee plantations in a unique treehouse surrounded by nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4600,
  location: "Coorg",
  country: "India",
},
{
  title: "Luxury Tent in Jaisalmer",
  description:
    "Experience the magic of the Thar Desert in a fully furnished luxury tent.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Jaisalmer",
  country: "India",
},
{
  title: "Backwater Villa in Alleppey",
  description:
    "Enjoy serene backwater views from this elegant waterfront villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60",
  },
  price: 6100,
  location: "Alleppey",
  country: "India",
},
{
  title: "Riverside Cottage in Rishikesh",
  description:
    "Relax beside the Ganges in a peaceful riverside cottage ideal for nature lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 2900,
  location: "Rishikesh",
  country: "India",
},
{
  title: "Heritage Homestay in Amritsar",
  description:
    "Enjoy authentic Punjabi hospitality just minutes from the Golden Temple.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Amritsar",
  country: "India",
},
{
  title: "Snow Chalet in Gulmarg",
  description:
    "A beautiful chalet perfect for skiing adventures and winter vacations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
  },
  price: 6900,
  location: "Gulmarg",
  country: "India",
},
{
  title: "Eco Resort in Wayanad",
  description:
    "Reconnect with nature in an eco-friendly resort surrounded by forests.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3800,
  location: "Wayanad",
  country: "India",
},
{
  title: "City Apartment in Hyderabad",
  description:
    "Modern apartment with excellent connectivity and luxurious facilities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 3100,
  location: "Hyderabad",
  country: "India",
},
{
  title: "Beach Resort in Kovalam",
  description:
    "Stay steps away from the beach and enjoy breathtaking ocean views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Kovalam",
  country: "India",
},
{
  title: "Luxury Stay in Pondicherry",
  description:
    "A French-inspired villa located close to the beach and famous cafés.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 4900,
  location: "Pondicherry",
  country: "India",
},
{
  title: "Hill Cottage in Ooty",
  description:
    "Enjoy cool weather and scenic landscapes from this charming hill cottage.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3400,
  location: "Ooty",
  country: "India",
},
{
  title: "Jungle Resort in Jim Corbett",
  description:
    "Stay close to nature with exciting wildlife safari experiences nearby.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Jim Corbett",
  country: "India",
},
{
  title: "City Loft in Delhi",
  description:
    "A stylish loft located near major tourist attractions and shopping districts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "New Delhi",
  country: "India",
},
{
  title: "Island Villa in Port Blair",
  description:
    "Relax in a tropical island villa with crystal-clear beaches just a short walk away.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
  },
  price: 8700,
  location: "Port Blair",
  country: "India",
},
  {
  title: "Luxury Apartment in Mumbai",
  description:
    "Enjoy a premium stay in the heart of Mumbai with modern amenities and stunning city views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Mumbai",
  country: "India",
},
{
  title: "Beach House in Goa",
  description:
    "Relax in a beautiful beach house just a few minutes from the sea. Perfect for vacations with family and friends.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 5500,
  location: "Goa",
  country: "India",
},
{
  title: "Heritage Haveli in Jaipur",
  description:
    "Experience the royal charm of Rajasthan by staying in a beautifully restored heritage haveli.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 3800,
  location: "Jaipur",
  country: "India",
},
{
  title: "Mountain Cottage in Manali",
  description:
    "A cozy wooden cottage surrounded by snow-capped mountains and lush greenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Manali",
  country: "India",
},
{
  title: "Lake View Villa in Udaipur",
  description:
    "Stay in a luxurious villa with breathtaking views of the famous lakes of Udaipur.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Udaipur",
  country: "India",
},
{
  title: "Tea Garden Homestay in Munnar",
  description:
    "Wake up to refreshing views of tea plantations and enjoy the peaceful atmosphere of Kerala.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Munnar",
  country: "India",
},
{
  title: "Houseboat on Dal Lake",
  description:
    "Enjoy a unique stay on a traditional Kashmiri houseboat with beautiful lake views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Srinagar",
  country: "India",
},
{
  title: "Hilltop Resort in Ooty",
  description:
    "A peaceful hilltop resort surrounded by eucalyptus forests and scenic valleys.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3400,
  location: "Ooty",
  country: "India",
},
{
  title: "Modern Studio in Bengaluru",
  description:
    "A stylish studio apartment ideal for business travelers and digital nomads.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Bengaluru",
  country: "India",
},
{
  title: "Riverside Cottage in Rishikesh",
  description:
    "Unwind by the Ganges in a peaceful riverside cottage surrounded by nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Rishikesh",
  country: "India",
},
{
  title: "Desert Camp in Jaisalmer",
  description:
    "Experience the magic of the Thar Desert with a luxurious tent stay and cultural performances.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Jaisalmer",
  country: "India",
},
{
  title: "Backwater Villa in Alleppey",
  description:
    "Relax in a serene villa overlooking Kerala's famous backwaters with private boat access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60",
  },
  price: 4800,
  location: "Alleppey",
  country: "India",
},
{
  title: "Luxury Villa in Lonavala",
  description:
    "Escape the city and unwind in this spacious villa with a private pool and breathtaking hill views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 7500,
  location: "Lonavala",
  country: "India",
},
{
  title: "Lakefront Cottage in Nainital",
  description:
    "Wake up to peaceful lake views and enjoy a relaxing stay surrounded by the Kumaon hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Nainital",
  country: "India",
},
{
  title: "Royal Palace Stay in Jodhpur",
  description:
    "Experience the grandeur of Rajasthan in a beautifully restored palace with traditional hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 6800,
  location: "Jodhpur",
  country: "India",
},
{
  title: "Forest Cabin in Coorg",
  description:
    "Stay amidst coffee plantations and lush forests in this peaceful wooden cabin.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Coorg",
  country: "India",
},
{
  title: "Penthouse in Hyderabad",
  description:
    "A luxurious penthouse offering skyline views, modern interiors, and premium amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Hyderabad",
  country: "India",
},
{
  title: "Seaside Resort in Kovalam",
  description:
    "Relax by the Arabian Sea in a beautiful beachfront resort with stunning sunset views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Kovalam",
  country: "India",
},
{
  title: "Snow View Chalet in Gulmarg",
  description:
    "Enjoy a cozy stay in a charming chalet with breathtaking views of snow-covered mountains.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
  },
  price: 6200,
  location: "Gulmarg",
  country: "India",
},
{
  title: "Riverside Camp in Kasol",
  description:
    "Spend your evenings by the Parvati River while staying in comfortable riverside tents.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Kasol",
  country: "India",
},
{
  title: "Colonial Bungalow in Shimla",
  description:
    "Stay in a charming colonial-era bungalow surrounded by pine forests and mountain air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4100,
  location: "Shimla",
  country: "India",
},
{
  title: "Luxury Apartment in Pune",
  description:
    "A modern apartment located near the city's business district with all premium facilities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 3300,
  location: "Pune",
  country: "India",
},
{
  title: "Temple View Stay in Varanasi",
  description:
    "Experience the spiritual charm of Varanasi from a comfortable stay overlooking ancient temples.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2700,
  location: "Varanasi",
  country: "India",
},
{
  title: "Beach Cottage in Gokarna",
  description:
    "A peaceful beach cottage perfect for relaxing vacations with direct access to the shoreline.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 4400,
  location: "Gokarna",
  country: "India",
},
{
  title: "Eco Resort in Wayanad",
  description:
    "Reconnect with nature in this eco-friendly resort surrounded by forests and waterfalls.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3700,
  location: "Wayanad",
  country: "India",
},
{
  title: "Island Resort in Andaman",
  description:
    "Enjoy crystal-clear waters, white sandy beaches, and luxury accommodations on a tropical island.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
  },
  price: 8500,
  location: "Port Blair",
  country: "India",
},
{
  title: "Hill Retreat in Mussoorie",
  description:
    "A cozy retreat offering panoramic Himalayan views and peaceful surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Mussoorie",
  country: "India",
},
{
  title: "Luxury Farmhouse in Chandigarh",
  description:
    "Spend quality time in a spacious farmhouse with beautiful gardens and outdoor seating.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  },
  price: 5600,
  location: "Chandigarh",
  country: "India",
},
{
  title: "Waterfront Villa in Pondicherry",
  description:
    "Relax in a stylish villa near the beach with French-inspired architecture and modern comforts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5100,
  location: "Pondicherry",
  country: "India",
},
{
  title: "Nature Lodge in Jim Corbett",
  description:
    "Stay close to wildlife in a comfortable lodge surrounded by dense forests and nature trails.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4300,
  location: "Jim Corbett",
  country: "India",
},
{
  title: "City View Apartment in Ahmedabad",
  description:
    "A spacious apartment offering modern interiors and excellent connectivity to major attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 2900,
  location: "Ahmedabad",
  country: "India",
},
{
  title: "Heritage Homestay in Amritsar",
  description:
    "Enjoy warm Punjabi hospitality while staying close to the iconic Golden Temple.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 3100,
  location: "Amritsar",
  country: "India",
},

];

module.exports = { data: sampleListings };
