module.exports = app => {
// this module allow access to endpoints
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
    const blogentries=require('../controller/blogentries.controller.js');

  
    app.get("/allblogentries", blogentries.allblogEntries);
    app.post("/addblogentries", blogentries.addblogEntries);
    app.get("/getentrybyid/:id", blogentries.blogEntriesByid);
    app.put("/updateblogentry", blogentries.updateBlogentry);
    app.delete("/deleteentry/:id", blogentries.deleteBlogenrty);

   

  };
  


