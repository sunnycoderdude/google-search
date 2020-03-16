import axios from "axios";
require('dotenv').config()
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.APIKEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


// 