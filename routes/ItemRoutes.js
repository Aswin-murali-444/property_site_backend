const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// POST route for creating a new item
router.post("/", async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item created successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET route for retrieving all items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items from the database
        console.log("Items fetched:", items); // Log fetched items for debugging
        res.status(200).json({ items }); // Respond with the list of items
    } catch (error) {
        console.error("Error fetching items:", error.message); // Log the error
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
