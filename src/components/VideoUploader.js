/**
 * Created by robertd on 1/26/17.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';

class VideoUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            videos: []
        };
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }


    handleOnDrop(files) {
        this.setState({isUploading: true});
        console.log(Dropzone);
        Promise.all(files.map(file => this.uploadVideo(file)))
            .then(images => {
                this.setState({
                    isUploading: false,
                    videos: this.state.videos.concat(images)
                });
                // this.addProfileImage(images);
            }).catch(e => console.log(e));
    }

    uploadImage(file) {
        return axios.get('/upload', {
            params: {
                filename: file.name,
                filetype: file.type
            }
        }).then(res => {
            const options = {
                headers: {
                    'Content-Type': file.type
                }
            };
            return axios.put(res.data.url, file, options);
        }).then(res => {
            const {name} = res.config.data;
            return {
                name,
                isUploading: true,
                url: `https://share360videosbucket.s3.amazonaws.com/${file.name}`
            };
        });
    }

    render() {
        const divStyle = {
            width: 400,
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'solid',
            borderRadius: 5
        };

        const activeStyle = {
            opacity: 0.5,
            backgroundColor: '#eee'
        };

        const rejectStyle = {
            backgroundColor: '#ffdddd'
        };

        return (
            <div style={{width: 400, margin: '30px auto'}}>
                <h1 className="text-center">Video Uploader</h1>
                <Dropzone
                    onDrop={this.handleOnDrop}
                    accept=".mp4/*"
                    style={divStyle}
                    multiple={false}
                    activeStyle={activeStyle}
                    rejectStyle={rejectStyle}
                >
                    {this.state.isUploading ?
                        <div>Uploading file</div> :
                        <div>Drag or Click Here</div>}
                </Dropzone>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps)(VideoUploader);