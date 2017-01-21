const app = require('../../server.js');
const db = app.get('db');

module.exports = {
    test: function(req, res) {
        db.test((err, response) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(response)
            }
        })
    }
};
