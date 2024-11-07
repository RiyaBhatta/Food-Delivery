const express = require("express");
const router = express.Router();

router.post('/fooddata', (req, res)=>{
    try {
        res.send([global.food_items, global.foodcat])
    } catch (error) {
        console.error(error.message);
        res.end("Server Error")
    }
})

module.exports = router;