import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ad127a9a6254c21adfe08559c555a11",
  },
});
