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
    },
    getVideoById: (req, res) => {
    	db.getVideoById([req.params.id], (err, response) => {
    		if (err) {
    			res.send(err);
    		} else {
    			res.status(200).send(response);
    		}
    	});
    },
    findUser: function(username, password, cb) {
        db.findUser( [ username, password], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                cb( response );
            }
        });
    },
    signUp: ( fname, lname, email, username, password, passwordConfirm, day, month, year ) => {
        db.signUp( [ fname, lname, email, username, password, passwordConfirm, day, month, year], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        } )
    }
};
