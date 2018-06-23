import axios from "axios";

//apikey is builtin
const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=51c234d9d2b943dd8f9a0561a5e8722c";

export default {
  //Scrape for articles 
  searchArticles: function(query) {
    return axios.get(baseUrl+query)
  },
  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
