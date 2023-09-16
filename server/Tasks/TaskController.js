const express = require('express');
const { taskDataValidation } = require('./task.validation');
const { validationResult } = require('express-validator')
const router = express.Router();
const Task = require('./TaskSchema');
const Cart = require('./CartSchema')
const axios = require('axios')


router.post('/addtask', taskDataValidation, async (req, res) => {

    try {
        const { title, description, status } = req.body;

        if (!title || !description) {
            return res.status(401).json({ message: "enter required fields", sucess: false })
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

        }
        await Task.create({
            title,
            description,
            status

        })
        return res.status(200).json({ message: "Task created successfully", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})


router.get('/task/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        return res.status(200).json({ task: task, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: true });

    }
})


router.put('/task/:id', taskDataValidation, async (req, res) => {

    try {
        const { title, description, status } = req.body;
        const { id } = req.params
        if (!title || !description) {
            return res.status(401).json({ message: "enter required fields", sucess: false })
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

        }
        await Task.findByIdAndUpdate(id, { title, description, status });
        return res.status(200).json({ message: "Task updated successfully", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})


router.delete('/task/:id', async (req, res) => {

    try {
        const { id } = req.params
        const task = await Task.findById(id);
        if (!task) {
            return res.status(400).json({ message: "Task not found", sucess: true });

        }
        await Task.findByIdAndDelete(id);
        return res.status(200).json({ message: "Task deleted successfully", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})



router.get('/getalltask', async (req, res) => {

    try {
        const tasks = await Task.find();
        return res.status(200).json({ tasks: tasks, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: true });

    }
})

router.get('/getallnews', async (req, res) => {

    try {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`)

        return res.status(200).json({ news: data.articles, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})

router.get('/getallcarts', async (req, res) => {


    try {
        let carts = await Cart.find()

        return res.status(200).json({ carts, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})

router.post('/cart/add', async (req, res) => {


    try {
        const { source, author, title, description, url, urlToImage, publishedAt, content } = req.body

        let cart = await Cart.findOne({ urlToImage: urlToImage })
        if (cart) {
            return res.status(500).json({ message: "Item Already Added In Cart", sucess: true });

        }
        const newcart = await Cart.create({
            source, author, title, description, url, urlToImage, publishedAt, content
        })
        return res.status(200).json({ cart: newcart, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})

router.delete('/cart/delete/:id', async (req, res) => {


    try {
        const { id } = req.params
        let cart=await Cart.findById(id);
        if(!cart){
        return res.status(200).json({ message: "Item not Found", sucess: false });

        }
        await Cart.findByIdAndDelete(id)

        return res.status(200).json({ message: "Cart Item Deleted Successfully!", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})




module.exports = router