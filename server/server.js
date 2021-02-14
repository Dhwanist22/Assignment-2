const express = require('express');
const application = express();
application.use(express.static('public'));
application.listen(3000, function () {
 console.log('Application started on port 3000');
});