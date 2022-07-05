const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//  finding single user by id
router.get("/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).lean().exec();
        if (!user) {
            return res.status(400).send({})
        }
        return res.status(201).send(user)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// updating user's data after applied for job

router.patch("/:id", async (req, res) => {
    try {
        let user = await User.updateOne(
            { _id: req.params.id },
            { $push: { applyjob: req.body } }
        );

        return res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: "error", error: error.message })
    }
})
module.exports = router