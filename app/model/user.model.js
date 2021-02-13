const pool = require("../../db");


exports.login_method=async(email)=>{
   
    const users = await pool.query("SELECT * FROM users WHERE emailid = $1", [
      email
    ]);

    return users
}  

exports.getAlluser = async () => {
    const entries = await pool.query(
        "SELECT * FROM users");
    return entries.rows;
    }

    exports.getuserByid = async (id) => {
        const entries = await pool.query(
            "SELECT * FROM users WHERE id=$1",[id]);
        return entries.rows[0];
        }

    exports.addUser = async (params) => {
        const adduser = await pool.query(
          "INSERT INTO users (firstname,lastname,emailid,role, password,createddate) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
          [params.firstName, params.lastName, params.emailId, params.role, params.password, new Date()]
        );
        return adduser.rows[0];
     }

     exports.updateUser = async (params) => {
        const updateuser = await pool.query(
          
          "UPDATE  users SET firstname=$1,lastname=$2,emailid=$3,role=$4,password=$5, modifieddate=$6 WHERE id = $7 RETURNING *",
          [params.firstname, params.lastname, params.emailid, params.role, params.password,new Date(), params.id]
        );
        return updateuser;
     }
     exports.deleteUser = async (id) => {
        const deleteuser = await pool.query(
          
          "DELETE FROM users WHERE id = $1",
[id]
        );
        return deleteuser;
     }