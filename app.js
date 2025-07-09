const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/', indexRouter);

// Export for testing
module.exports = app;

// Only run server if this is the main module
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
