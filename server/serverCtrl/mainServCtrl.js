let app = require('../../server.js');
let db = app.get('db');

module.exports = {
    test: function(req, res) {
        db.test((err, response) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(response)
            }
        })
    },
    getVideoById: (req, res) => {
    	db.getVideoById([req.params.id], (err, response) => {
    		if (err) {
    			res.send(err);
    		} else {
    			res.status(200).send(response);
    		}
    	});
    }
};