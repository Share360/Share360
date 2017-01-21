var React = require('react');
var Dropzone = require('react-dropzone');
var axios = require('axios');

exports = module.exports = React.createClass({
    _onDrop: function (files) {
        var file = files[0];

        axios.get("/get_signed_url", {
            filename: file.name,
            filetype: file.type
        })
            .then(function (result) {
                var signedUrl = result.data.signedUrl;

                var options = {
                    headers: {
                        'Content-Type': file.type
                    }
                };

                return axios.put(signedUrl, file, options);
            })
            .then(function (result) {
                console.log(result);
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    render: function () {
        return (
            <Dropzone onDrop={ this._onDrop } size={ 150 }>
                <div>
                    Drop some files here!
                </div>
            </Dropzone>
        );
    }
});