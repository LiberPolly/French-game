const express = require('express')
const serveStatic = require('serve-static') 
const path = require('path')

const app = express()

// app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)




// var router = express.Router();

// // serve angular front end files from root path
// router.use('/', express.static('app', { redirect: false }));

// // rewrite virtual urls to angular app to enable refreshing of internal pages
// router.get('*', function (req, res, next) {
//     res.sendFile(path.resolve('app/index.html'));
// });

// module.exports = router;