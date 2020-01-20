import axios from "axios";
const APIkey = "4681256-c51c2d2cfbfc0b79b27448a20";
axios.defaults.baseURL = "https://pixabay.com/api";

export default {
  async getData(searchItem = "nature", pageNumber = "1") {
    try {
      const data = await axios.get(
        `/?q=${searchItem}&page=${pageNumber}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
