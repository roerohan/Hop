// index.js
var User = require('../models/user.model');

// Sample code for usage
function collectData(req, res) {
    let user = new User();
    user.name = req.body.name.toString().trim();
    user.email = req.body.email.toString().toLowerCase().trim();
    user.password = req.body.password.toString().trim();
    user.mobile = req.body.mobile.toString();

}
