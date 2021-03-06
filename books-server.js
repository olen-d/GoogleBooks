const express = require("express");
const mongoose = require("mongoose");

// For the api calls
const axios = require("axios");

// Require all models
//const db = require("./models");

// Initialize Express
const app = express();
const PORT =  process.env.PORT || 3031;

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

// Connect to the Mongo DB
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });



// // Routes
// app.get("/", (req, res) => {
//   axios.get(`http://127.0.0.1:${PORT}/articles`)
//   .then(response => {
//     let hbsObj = {
//       articles : response.data 
//     };
//     res.render("index", hbsObj);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// });

// // A GET route for scraping Artvoice
// app.get("/scrape", (req, res)=>{
//     // First, we grab the body of the html with axios
//     axios.get("https://artvoice.com/").then(function(response) {
//       // Then, we load that into cheerio and save it to $ for a shorthand selector
//       let $ = cheerio.load(response.data);

//       // Now, we grab every h2 within an article tag, and do the following:
//       $("h2").each(function(i, element) {
//         // Save an empty result object
//         let result = {};

//         // Add the text and href of every link, and save them as properties of the result object
//         result.title = $(this)
//         .children("a")
//         .text();
//         result.link = $(this)
//         .children("a")
//         .attr("href");

//          // If this found element had both a title and a link
//          if (result.title && result.link) {
//             // Insert the data in the scrapedData db
//             db.Article.update({
//                 title: result.title
//             },
//             {
//               title: result.title,
//               link: result.link
//             },
//             {
//                 upsert: true
//             },
//             (err, inserted) => {
//               if (err) {
//                 res.json({scrapeStatus: "Scrape Failed"});
//                 // Log the error if one is encountered during the query
//                 // console.log(err);
//               }
//               else {
//                 // Otherwise, log the inserted data
//                 // console.log(inserted);
//               }
//             });
//           }
//     });

//     // Reload the articles
//     axios.get(`http://127.0.0.1:${PORT}/articles`)
//     .then(response => {
//       let hbsObj = {
//         articles : response.data 
//       };
//       res.render("index", hbsObj);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   });
// });

// // Route for clearing the articles from the db
// app.get("/clear", (req, res) => {
//   db.Article.collection.drop()
//   .then(result => {
//     // Refresh the page
//     axios.get(`http://127.0.0.1:${PORT}/articles`)
//     .then(response => {
//       let hbsObj = {
//         articles : response.data 
//       };
//       res.render("index", hbsObj);
//     })
//     .catch(error => {
//       console.log(error);
//     });    
//   });
// });

// // Route for getting all Articles from the db
// app.get("/articles", (req, res) => {
//   // Grab every document in the Articles collection
//   db.Article.find({})
//     .then(dbArticle => {
//       // If we were able to successfully find Articles, send them back to the client
//       res.json(dbArticle);
//     })
//     .catch(err => {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Article.findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("note")
//     .then(function(dbArticle) {
//       // If we were able to successfully find an Article with the given id, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});
