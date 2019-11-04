const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { username } = req.body;
    const userExits = await Dev.findOne({ user: username });

    if (userExits) return res.json(userExits);

    const response = await axios.get(`https://api.github.com/users/${username}`);
    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }
};
