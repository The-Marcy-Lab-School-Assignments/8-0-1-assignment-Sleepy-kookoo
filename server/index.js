/** FEEDBACK: Great job! */
const express = require('express')

const app = express();
const path = require('path')

const pathToDistFolder = path.join(__dirname, '../vite-project/dist')

const serverStatic = express.static(pathToDistFolder)

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();

  console.log(`${req.method}: ${req.originalUrl} - ${time}`);

  next();
}

app.use(logRoutes)
app.use(serverStatic)


const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})


