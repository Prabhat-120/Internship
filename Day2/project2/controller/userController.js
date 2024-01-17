const User = require("../model/usermodel");

const getUser = async(req,res)=>{
    res.render('register');
}

const createUser = async (req, res) => {
try {
    const { name, address, gender, hobbies } = req.body;
    const image = req.file ? req.file.filename : null;

    console.log(image);
    
    const newUser = new User({ name, address, gender, hobbies, image });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={createUser,getUser};
