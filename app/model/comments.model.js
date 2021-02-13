const pool = require("../../db");

exports.getAllcomments = async () => {
    const entries = await pool.query(
        "SELECT * FROM comments");
    return entries.rows;
}


exports.addcomments = async (params) => {
    const addentry = await pool.query(
        "INSERT INTO comments (comment,blogentryid,postedby,status,createddate) VALUES($1,$2,$3,$4,$5) RETURNING *",
        [params.comment, params.blogentryid, params.postedby,false, params.createddate]
    );
    return addentry.rows[0];
}

exports.commentByid = async (id) => {
    const entries = await pool.query(
        "SELECT * FROM comments WHERE blogentryid=$1 AND status=$2", [id,true]);
    return entries.rows;
}

exports.updatecommentstatus = async (params) => {
    const updatecomment = await pool.query(

        "UPDATE  comments SET status=$1  WHERE id = $2 RETURNING *",
        [params.status, params.id]
    );
    return updatecomment;
}

exports.deletecommentbyid = async (id) => {
    const deletecomment = await pool.query(

        "DELETE FROM comments WHERE id = $1",
        [id]
    );
    return deletecomment;
}