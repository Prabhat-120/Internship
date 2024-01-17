
// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const port = 3000;
// const app = express();

// const storage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         cb(null,"uploads")
//     },
//     filename:(req, file, cb)=>{
//        cb(null,file.fieldname+ "-"+ Date.now() +path.extname(file.originalname));
//     }
// });

// const fileFilter = (req,file,cb) => {
//     const allowedFile = /jpeg|jpg|png/;
//     const extname = allowedFile.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedFile.test(path.extname(file.mimetype));

//     if(extname && mimetype){
//         return cb(null, true);
//     }else{
//         return cb(new Error('only jpeg and png files are allowed'),false);
//     }
// };
// const upload = multer({
//     storage:storage,
//     fileFilter:fileFilter,
//     limits:{
//         fileSize:5*1024*1024
//     }
// }).single("user_file")


// // app.post("/upload",upload,(req,res)=>{
// //     res.send("file uploaded")
// // })


// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading
//         return res.status(500).json({ error: err.message });
//       } else if (err) {
//         // An unknown error occurred
//         return res.status(500).json({ error: err.message });
//       }
  
//       // File uploaded successfully
//       res.json({ success: true, message: 'File uploaded successfully!' });
//     });
//   });

// app.listen(port,()=>{
//     console.log(`this server run at port ${port} `);
// })






// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Set up multer storage and validation
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads'); // Destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     // Generate a unique filename with the original extension
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   // Validate file type (in this example, allow only JPEG and PNG files)
//   const allowedFileTypes = /jpeg|jpg|png/;
//   const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedFileTypes.test(file.mimetype);
  
//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     return cb(new Error('Only JPEG and PNG files are allowed!'), false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: {
//     fileSize: 2 * 2 * 1,
//   }
// }).single('user_file');

// // Handle file upload route
// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading
//       return res.status(500).json({ error: err.message });
//     } else if (err) {
//       // An unknown error occurred
//       return res.status(500).json({ error: err.message });
//     }

//     // File uploaded successfully
//     res.json({ success: true, message: 'File uploaded successfully!' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const multer = require('multer');
const path = require("path");

const app =express();
const port = 3000;

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = (req,file,cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype)

    if(extname && mimetype){
        return cb(null,true);     
    }else{
        return cb(new error("only jpeg and jpg or png file are upload"),false);
    }
};

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
}).single("profile_file");

app.post('/upload',(req,res)=>{

    upload(req,res,(err)=>{
        if(err instanceof multer.MulterError){
           return res.status(500).json({error:err.message});
        }else if(err){
            return res.status(500).json({error:err.message});
        }

        res.json({success:true,message:'file upload successfuly!'});
    });

});


app.listen(port,()=>{
    console.log(`server run at port ${port}`);
});