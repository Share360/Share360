import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';

class VideoReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            videos: []
        };
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    // addProfileImage(images) {
    //     console.log('adding profile image:', images)
    //     axios.post('/api/addprofileimg', {
    //         url: images[0].url,
    //         id: this.props.loginStatus.id
    //     }).then((res) => {
    //         console.log(res);
    //     });
    // }


    handleOnDrop(files) {
        this.setState({isUploading: true});

        Promise.all(files.map(file => this.uploadVideo(file)))
            .then(videos => {
                this.setState({
                    isUploading: false,
                    videos: this.state.videos.concat(videos)
                });
            }).catch(e => console.log(e));
    }

    uploadVideo(file) {
        return axios.get('/vid/upload', {
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
                url: `share360fineuploader.s3.amazonaws.com/${file.name}`
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
                <h1>Video Uploader</h1>
                <Dropzone
                    onDrop={this.handleOnDrop}
                    accept="image/*"
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

export default connect(mapStateToProps)(VideoReader);