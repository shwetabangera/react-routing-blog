# react-routing-blog

Intro:

This is a project to diplay a page that consists of all the blogs present in the blog-backend server. The blogs are displayed in the form tiles. Each tile consists of blog banner, author and title. On clicking upon the blog banner, that particular blog gets rendered. The rendered blog has related links section which consists of link of other blogs. upon clicking the link, that partcular blog will be rendered.
Backend:

A node js express server is designed for backend. The backend has following api endpoints :

  To get all the blogs:

To get all the blogs stored in the file system, the api endpoint used is "/blogs". The url for the same is http://localhost:3000/blogs.

  To get a particular blog based on its Id:

To get a particular blog based on its Id, the api endpoint used is "/blogs/:id". The url for the same is http://localhost:3000/blogs/:id. Here ":/id" will have the Id of the blog that needs to be rendered.

The Tiles Markup Component contains contents for Blog Tile, i.e. a Blog Title, Blog Author & Blog Image.
The Blog Markup Component contains contents for Blog Page, i.e. a Blog Title, Blog Author, Blog Image, Blog Content, & a set of Related Links.

Frontend:

The UI of the application is designed using React. The routing to different pages is implemented using React Routing. The frontend consists of the following pages:

  Home Page:

The home page consists of all the blogs that are fetched from the backend server. This page consists of blog tiles which has blog's banner image and its title. To read about a particular blog, the user can click the tile of that particular blog and it will be directed to the detailed information contained in that blog.

   Blog Page:

This page contains the detailed information about a particular blog. It consists of a blog title, an banner image, and brief description about the blog. It also has an aside section which consists of a column known as Related Links. This column consists of few links which are relatable to the blog.
Running the Application:

   Clone the repository using

      git clone https://github.com/shwetabangera/react-routing-blog.git

   Run this command only once:

    - npm install

To install all the dependencies.

   Then run the command:

    - npm run start

To start the React Application.

  The Backend is hosted on Heroku.

  Link for Backend : https://blogsbackend.herokuapp.com/blogs

 The application is hosted on vercel.
  
  The Live link for the same is: https://react-routing-blog.vercel.app/blogs
