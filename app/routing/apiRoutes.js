
var friendListData = require("../data/friendlistData");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendListData);
  });


  app.post("/api/friend", function(req, res) {
    if (friendListData.length < 5) {
      tfriendListData.push(req.body);
      res.json(true);
    }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

};

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendListData = [];

//     console.log(tableData);
//   });
// };
