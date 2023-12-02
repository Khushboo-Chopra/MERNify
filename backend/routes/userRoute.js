const express = require('express');
const User = require('../models/userModel');

const router = express.Router();


//create operation
router.post('/', async (req, res) => {
    var { name, email, age } = req.body;
    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });
        res.status(201).json(userAdded);
    }

    catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message
        })
    }
})

//read operation
router.get("/", async (req, res) => {
    const showAll = await User.find();
    try {
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
})

//get single user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
})

//delete operation
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
})

//update operation -> put/patch
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true, });
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = router;
