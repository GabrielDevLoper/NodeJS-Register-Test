const User =  require('../models/Client');

module.exports = {
    async index(req, res) {
        const user = await User.find();

        return res.json(user);
    },
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({
            name, 
            email
        });

        return res.json(user);
    }
}
