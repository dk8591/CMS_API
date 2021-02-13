module.exports = app => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        )
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
        if (req.method === 'OPTIONS') {
            res.header(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            )
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
            return res.status(200).json({});

        }
        next();
    });
    const comments=require('../controller/comments.controller.js');
   // var VerifyToken = require('./VerifyToken');
  
    app.get("/allcomments", comments.allcomments);
    app.post("/addcomment", comments.addcomment);
    app.get("/commentsByblogid/:id", comments.commentsByblogid);
    app.put("/updatecomment", comments.updatecomment);
    app.delete("/deletecomment/:id", comments.deletecomment);

   

  };
  


