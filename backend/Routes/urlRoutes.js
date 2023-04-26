const express = require('express');
const router = express.Router();
const urlController = require('../Controller/url-controller')


router.post("/api/shorten", urlController.shoternUrl);
router.get("/:shortUrl", urlController.shortUrlById);


module.exports = router;