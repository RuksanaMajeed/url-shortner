const urlSchema = require('../Model/urlSchema');

const shoternUrl = async(req, res, next) => {
 const {originalUrl, shortUrl} = req.body;
 console.log("url req", req.body);
 let url;
 try {
    url = new urlSchema({
        originalUrl, shortUrl
    });
    await url.save();
    return res.status(201).json({message: "Success" })
 } catch(err) {
    console.error(err)
 }
 if (!url) {
    return res.status(500).json({message:' Unable to Add' });
}
} 

const shortUrlById = async(req, res, next) => {
    const { shortUrl } = req.params;
    let url;
    try {
        url = await urlSchema.findOne({ shortUrl });
    } catch (err) {
        console.error(err);
    }
    if (!url) {
        return res.status(500).json({
            message: "Unable to find"
        });
    }
    res.redirect(url.originalUrl);
    return res.status(201).json({url})
}
exports.shoternUrl = shoternUrl;
exports.shortUrlById = shortUrlById;
