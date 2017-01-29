import React, {Component} from 'react';
import {render} from 'react-dom';
import FineUploaderS3 from 'react-fine-uploader/wrappers/s3'
import axios from 'axios';
import { connect } from 'react-redux';


class VideoReader extends Component {
    constructor(props) {
        super(props);
        const uploader = new FineUploaderS3({
            options: {
                request: {
                    endpoint: "http://fineuploadertest.s3.amazonaws.com",
                    accessKey: "AKIAIXVR6TANOGNBGANQ"
                },
                signature: {
                    endpoint: "/vendor/fineuploader/php-s3-server/endpoint.php"
                }
            }
        })
    }

    render() {
        return (
            <div style={{width: 400, margin: '30px auto'}}>
                <Gallery fileInput-children={ fileInputChildren } uploader={ uploader } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps)(VideoReader);