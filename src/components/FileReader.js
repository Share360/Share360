import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class FileReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            images: []
        };
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    handleOnDrop(files) {
        this.setState({isUploading: true});

        Promise.all(files.map(file => this.uploadImage(file)))
            .then(images => {
                this.setState({
                    isUploading: false,
                    images: this.state.images.concat(images)
                });
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
            <div style={{width: 760, margin: '30px auto'}}>
                <h1>React Uploader</h1>
                <Dropzone
                    onDrop={this.handleOnDrop}
                    accept="image/*"
                    style={divStyle}
                    activeStyle={activeStyle}
                    rejectStyle={rejectStyle}
                >
                    {this.state.isUploading ?
                        <div>Uploading file</div> :
                        <div>Drag or Click Here</div>}
                </Dropzone>
                {this.state.images.length > 0 &&
                <div style={{margin: 30}}>
                    {this.state.images.map(({name, url}) =>
                        <img key={name} src={url} style={{width: 200, height: 200}}/>)}
                </div>}
            </div>
        );
    }
}

export default FileReader;