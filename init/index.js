const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const dbUrl = process.env.ATLASDB_URL;
const mapToken = process.env.MAP_TOKEN;

console.log("MAP_TOKEN:", mapToken); // Remove after testing

const geocodingClient = mbxGeocoding({
  accessToken: mapToken,
});

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB");
}

main()
  .then(() => initDB())
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});

  const listings = await Promise.all(
    initData.data.map(async (obj) => {
      const response = await geocodingClient
        .forwardGeocode({
          query: `${obj.location}, ${obj.country}`,
          limit: 1,
        })
        .send();

      console.log(obj.location);
      console.log(response.body.features[0].geometry);

      return {
        ...obj,
        owner: "6a4e11cc9d972b9f463a853f",
        geometry: response.body.features[0].geometry,
      };
    })
  );

  await Listing.insertMany(listings);
  console.log("Data initialized successfully!");
  mongoose.connection.close();
};