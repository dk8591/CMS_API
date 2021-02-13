 const commentmodel = require("../model/comments.model.js");
 const blogmodel = require("../model/blogentries.model.js");




 exports.allcomments = async (req, res) => {
     try {

         const comments = await commentmodel.getAllcomments();
         res.status(200).send({
             message: "comments fetched successfully",
             data: comments,
         });

     } catch (err) {
         res.status(500).send({
             message: err.message,
             data: []
         });
     }



 };

 exports.addcomment = async (req, res) => {

     const data = {
         comment:req.body.comment,
         blogentryid: req.body.blogentryid,
         postedby: req.body.postedby,
         status:false,
         createddate: new Date()
     }
     try {
         const add = await commentmodel.addcomments(data);
         res.status(200).send({
             message: "comment added successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }

 exports.commentsByblogid = async (req, res) => {
     try {

         const comment = await commentmodel.commentByid(req.params.id);
       
console.log(comment)
         res.status(200).send({
             message: "comment for blog entry fetched successfully",
             data:comment ,
         });

     } catch (err) {
         res.status(500).send({
             message: err.message,
             data: []
         });
     }



 }

 exports.updatecomment = async (req, res) => {

     const data = {
         id: req.body.id,        
         status:req.body.status,
       

     }
     try {
         const update = await commentmodel.updatecommentstatus(data);
         res.status(200).send({
             message: "comment status updated successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }



 exports.deletecomment = async (req, res) => {


     try {
         const deletecomments = await commentmodel.deletecommentbyid(req.params.id);
         res.status(200).send({
             message: "comment deleted successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }