const { Router } = require("express");
const Blog = require("../models/blog");
const { multerUpload } = require("../services/multerService");

const router = Router();

router.get("/add-new", (req, res) => {
  return res.render("addBlog", { user: req.user });
});

router.post("/", multerUpload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageUrl: `uploads/${req.file.filename}`,
  });

  return res.redirect(`/blog/${blog._id}`);
});

module.exports = router;
