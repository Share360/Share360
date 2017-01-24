import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';


exports = module.exports = React.createClass({
    _onDrop: function (files) {
        console.log('upload file');
        var file = files[0];
        console.log(files[0]);

        axios.get('/upload', {
            filename: file.name,
            filetype: file.type
        })
            .then(function (result) {
                console.log('then ' + result);
                var signedUrl = result.data.signedUrl;
                console.log('this is result data ' + signedUrl);
                var options = {
                    headers: {
                        'Content-Type': file.type
                    }
                };

                return axios.put(signedUrl, file, options);
            })
            .then(function (result) {
                console.log('rest after post' + result);
            })
            .catch(function (err) {
                console.log('this is an error ' + err);
            });
    },
    render: function () {
        return (
            <Dropzone onDrop={ this._onDrop } >
                <div>
                    Drop some files here!
                </div>
            </Dropzone>
        );
    }
});