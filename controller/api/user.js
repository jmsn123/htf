// const router = require("express").Router();
// const  {User}  = require("../../Model/");

// router.post("/", async(req, res) => {
//     console.log("POST request body : ", req.body)

//     try {

//         // console.log(req.session.loggedIn)
//         const newUser = await User.create({
//             name: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//        
//         })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }

// })

// router.post('/userLogin', async (req, res) => {
//     try {
//       // First we find one user record with an email address that matches the one provided by the user logging in
//       const userData = await User.findOne({ where: { email: req.body.email } });
//       // If an account with that email address doesn't exist, the user will recieve an error message
//       if (!userData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
//       // If the user does exist, we will use the checkPassword() instance method to compare the user's input to the password stored in the record
//       const validPassword = await userData.checkPassword(req.body.password);
//       // If checkPassword() evaluates as false, the user will receive an error message
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
//       // If checkPassword() evaluates as true, the user will be logged in
//       res.json({ user: userData, message: 'You are now logged in!' });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
// router.get("/logout",(req,res)=>{
//     console.log("POST /logout")
// })

// module.exports = router;


const router = require("express").Router();
const {  User } = require("../../Model");
const path = require("path");

router.get("/", async(req, res) => {
    console.log("GET /api/post");
    try {
        // // Get all posts with user data
        const postData = await Post.findAll({
            include: [{
                model: User,
            }, ],
        });
        res.json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;