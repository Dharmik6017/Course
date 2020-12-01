import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID h54mEw-uJxxNMOQ8rSroblMHX0Fj47QPpt01R5TU03Q",
  },
});
