const router =require("express").Router();
const subtaskController = require("./subtask.controller");

router.get("/", (req, res) => {
    res.send("Hello from Subtask API!");
});
router.post("/", async (req, res) => {
    const result = await subtaskController.create(req.body);
    res.json({data: result});
});

module.exports = router;