// Import necessary modules
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

// Initialize Express app
const app = express();

// Set up Handlebars view engine with express-handlebars
app.engine('hbs', engine({
  extname: 'hbs', // Extension for Handlebars files
  defaultLayout: 'main', // Default layout file (views/layouts/main.hbs)
  layoutsDir: path.join(__dirname, 'views/layouts'), // Path to layout files
  partialsDir: path.join(__dirname, 'views/partials') // Path to partials
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    message: 'Welcome to our website!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    message: 'Learn more about our team and mission.'
  });
});

// Start the server
const PORT = 3000; // Set the port number directly
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

