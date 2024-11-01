# 📚 Blog-Api

## Description

#### A RESTful API for blog publishing, built with Express.js and MongoDB, featuring vanilla server-side rendering. This API provides secure user authentication (sign-in and sign-out) with password hashing. Authenticated users can create , comments and publish blog posts.

| Note: You must connect to MongoDB for this project to function.

> How to Start

---

Install Dependencies

```
    npm i express ejs mongoose multer cookie-parser jsonwebtoken nodemon -D

```

Run the Server

```
    npm run dev

```

### Features

- User Authentication: Secure sign-in and sign-out functionality.
- Password Hashing: User passwords are hashed to ensure security.
- Publish Blogs: Authenticated users can create and publish their blog posts.
- Commenting: Users can comment on each blog post, and view comments made by other users.
- Server-Side Rendering: Renders HTML on the server for seamless user experience.
