const pool = require("../../db");

exports.getAllblogentries = async () => {
    const entries = await pool.query(
        "SELECT * FROM blogentries");
    return entries.rows;
}


exports.addBlogentries = async (params) => {
    const addentry = await pool.query(
        "INSERT INTO blogentries (blogheading,blogbody,postedby,createddate) VALUES($1,$2,$3,$4) RETURNING *",
        [params.blogHeading, params.blogBody, params.postedBy, params.createdDate]
    );
    return addentry.rows[0];
}

exports.entryByid = async (id) => {
    const entries = await pool.query(
        "SELECT * FROM blogentries WHERE id=$1", [id]);
    return entries.rows[0];
}

exports.updateentry = async (params) => {
    const updateuser = await pool.query(

        "UPDATE  blogentries SET blogheading=$1,blogbody=$2, modifieddate=$3 WHERE id = $4 RETURNING *",
        [params.blogheading, params.blogbody, new Date(), params.id]
    );
    return updateuser;
}
exports.deletentry = async (id) => {
    const deleteuser = await pool.query(

        "DELETE FROM blogentries WHERE id = $1",
        [id]
    );
    return deleteuser;
}

exports.pictureupload = async (url,id) => {
    const updateuser = await pool.query(

        "UPDATE  blogentries SET pictureurl=$1 WHERE id = $2 RETURNING *",
        [url,  id]
    );
    return updateuser;
}