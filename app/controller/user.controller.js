const jwt = require("jsonwebtoken");

const usermodel = require("../model/user.model.js");


const pool = require("../../db");


 exports.login = async (req, res) => {
    const {
      email,
      password,

    } = req.body;

    try {

      const users = await usermodel.login_method(email.toLowerCase())
      if (users.rows.length === 0) {
        return res.status(500).send({
          status: false,
          message: 'User not found',
          token: null
        });
      } else {      

        
        if (password!==users.rows[0].password) {

          return res.status(500).send({
            status: false,
            message: 'password not match',
            token: null
          });
        }

        const userdata = {
            firstname: users.rows[0].firstname,
          lastname: users.rows[0].lastname,
          role: users.rows[0].role,
          emailid: users.rows[0].emailid,       

        }     



        const usertoken = {
          email: users.rows[0].emailid, role: users.rows[0].role
        }
        var token = jwt.sign({
          usertoken
        }, 'superkey', {
          expiresIn: 86400, // expires in 24 hours
        })
        res.status(200).send({
          message: "Logged in success",
          data: userdata,
          token: token,
        });

      }
    } catch (err) {
      console.error(err.message);
    }



  };

  exports.token = async (req, res) => {
    var token = req.body.token;
    if (!token) {
       
      return res
        .status(406)
        .send({
          status: false,
          message: "No token provided."
        });
    }
    jwt.verify(token, config.secret, async function (err, decoded) {
      if (err) {
   
  
        return res.status(501).send({
          status: false,
          message: "Failed to authenticate token.",
        });
      } else {
        
        const users = await user_route.login_method(decoded.usertoken.email)
        const userdata = {
            firstname: users.rows[0].firstname,
            lastname: users.rows[0].lastname,
            role: users.rows[0].role,
            emailid: users.rows[0].emailid,
  
        }
       
        res.status(200).send({
          status: true,
          message: "session maintained",
          data: userdata,
          token: token,
        });
  
      }
    });
  };


exports.allusers = async (req, res) => {
    try {

        const blogdata = await usermodel.getAlluser();
        res.status(200).send({
            message: "All Users fetched successfully",
            data: blogdata,
        });

    } catch (err) {
        res.status(500).send({
            message: err.message,
            data: []
        });
    }



};

exports.usersByid = async (req, res) => {
    try {

        const blogdata = await usermodel.getuserByid(req.params.id);
        res.status(200).send({
            message: " User fetched successfully",
            data: blogdata,
        });

    } catch (err) {
        res.status(500).send({
            message: err.message,
            data: []
        });
    }



}


exports.createUser = async (req, res) => {

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        role: req.body.role,
        password: req.body.password
    }
    try {
        const add = await usermodel.addUser(data);
        res.status(200).send({
            message: "User added successfully",

        });
    } catch (err) {
        res.status(500).send({
            message: err.message,

        });
    }

}



exports.updateUser = async (req, res) => {

    const data = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailid: req.body.emailid,
        role: req.body.role,
        password: req.body.password
    }
    try {
        const update = await usermodel.updateUser(data);
        res.status(200).send({
            message: "User updated successfully",

        });
    } catch (err) {
        res.status(500).send({
            message: err.message,

        });
    }

}

exports.deleteUser = async (req, res) => {


    try {
        const deleteuser = await usermodel.deleteUser(req.params.id);
        res.status(200).send({
            message: "User deleted successfully",

        });
    } catch (err) {
        res.status(500).send({
            message: err.message,

        });
    }

}
