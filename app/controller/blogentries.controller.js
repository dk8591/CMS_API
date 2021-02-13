 const blogmodel = require("../model/blogentries.model.js");

 // upload azure storage
 const azureStorage = require("azure-storage")
 const blobService = azureStorage.createBlobService()
 const getStream = require("into-stream")
 const containerName = "soliscontainer";



 exports.allblogEntries = async (req, res) => {
     try {

         const blogdata = await blogmodel.getAllblogentries();
         res.status(200).send({
             message: "blog post fetched successfully",
             data: blogdata,
         });

     } catch (err) {
         res.status(500).send({
             message: err.message,
             data: []
         });
     }



 };

 exports.addblogEntries = async (req, res) => {

     const data = {
         blogHeading: req.body.blogHeader,
         blogBody: req.body.blogBody,
         postedBy: 'Admin',
         createdDate: new Date()
     }
     try {
         const add = await blogmodel.addBlogentries(data);
         if (req.body.buffer.length > 0) {
             picupload(add.id, req.body.name, req.body.buffer)
         }
         res.status(200).send({
             message: "blog post added successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }

 exports.blogEntriesByid = async (req, res) => {
     try {

         const blogdata = await blogmodel.entryByid(req.params.id);
         res.status(200).send({
             message: " Entry fetched successfully",
             data: blogdata,
         });

     } catch (err) {
         res.status(500).send({
             message: err.message,
             data: []
         });
     }



 }

 exports.updateBlogentry = async (req, res) => {

     const data = {
         id: req.body.id,
         blogheading: req.body.title,
         blogbody: req.body.content,

     }
     try {
         const update = await blogmodel.updateentry(data);
         if (req.body.buffer.length > 0) {
             picupload(req.body.id, req.body.name, req.body.buffer)
         }
         res.status(200).send({
             message: "Entry updated successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }

 exports.deleteBlogenrty = async (req, res) => {


     try {
         const deleteblog = await blogmodel.deletentry(req.params.id);
         res.status(200).send({
             message: "entry deleted successfully",

         });
     } catch (err) {
         res.status(500).send({
             message: err.message,

         });
     }

 }

 async function picupload(id, name, buffer) {
     try {

         const AccountName = "soliscontainer";
         var fs = require("fs");
         const imgBuffer = Buffer.from(buffer, "base64");

         const blobName = name,
             stream = getStream(imgBuffer),
             streamLength = buffer.length;
         blobService.createBlockBlobFromStream(
             containerName,
             blobName,
             stream,
             streamLength,
             (err) => {
                 if (err) {
                     handleError(err);

                     console.log('error')

                 } else {
                     var url =
                         "https://" +
                         AccountName +
                         ".blob.core.windows.net/" +
                         containerName +
                         "/" +
                         blobName +
                         "";

                 }


                 const upload = blogmodel.pictureupload(url, id)

             }

         );

     } catch (err) {

         console.log(err)
     }
 };