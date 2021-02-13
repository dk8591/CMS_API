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
    const users=require('../controller/user.controller.js');
   // var VerifyToken = require('./VerifyToken');
   app.post("/login",users.login);
   app.post("/token", users.token);

    app.get("/allusers", users.allusers);
    app.post("/adduser", users.createUser);
    app.put("/updateuser", users.updateUser);
    app.get("/getuserbyid/:id", users.usersByid);
    app.delete("/deleteuser/:id", users.deleteUser);
    

   

  };
  


