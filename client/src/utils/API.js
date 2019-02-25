import axios from "axios";


export default {

  getBook: function (books) {
    //   return axios.get("https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?" + books + "key=AIzaSyAdc4qyr48n_2kEQZD9RHTFo-IuSkO2tMM");
    // }
    // ,
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + books);
  }
};
