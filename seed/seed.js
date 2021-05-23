const sequel = require("../config/connection");
const { User, Post } = require("../Model");
const userData = require("./userData.json");
const postData = require("./postData.json");



const seedDatabase = async() => {
    try {
        await sequel.sync({ force: false });

        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        console.log(users);
        for (const post of postData) {
            await Post.create({
                ...post,
                user_id: users[Math.floor(Math.random() * users.length)].id,
            });
            console.log(post);

        }


        process.exit(0);
    } catch (error) {
        console.log(error);
    }
};
seedDatabase()