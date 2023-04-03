const express = require('express')
const app = express()

// This is a branch called 11-13, and I just updated it
// Let's see if my pull request trigger the deployment
// This should be a version 5 app

// Please skip this commit

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('5') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
