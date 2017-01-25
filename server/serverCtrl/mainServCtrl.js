let app = require('../../server.js');
let db = app.get('db');


module.exports = {
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
    signUp: ( req, res ) => {
        db.signUp( [ req.body.fname, req.body.lname, req.body.email, req.body.username, req.body.password, req.body.birthday ], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        } )
    },
    getSearchResults: (req, res) => {
        db.getSearchResults(['%' + req.params.searchterm.toUpperCase() + '%'], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getFavoritesById: (req, res) => {
        db.getFavoritesById([req.params.id], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    addFavorite: (req, res) => {
        db.addFavorite([req.body.userID, req.body.videoID], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getProfile: (req, res) => {
        db.getProfile([req.params.id], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    addProfileImg: (req, res) => {
        db.addProfileImg([req.body.id, req.body.url], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    }
};