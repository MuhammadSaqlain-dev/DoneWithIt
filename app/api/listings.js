import clientApi from "./client";

const endpoint = "/listings";
const getListings = () => clientApi.get(endpoint);

const addListings = (listing) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("category", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return clientApi.post(endpoint, data);
};

export default {
  addListings,
  getListings,
};
