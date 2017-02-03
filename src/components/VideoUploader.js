import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';
import VideosCatagoryForm from './VideosCatagoryForm';
import profileActions from '../actions/profileActions';

class VideoUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            videos: [],
            title: '',
            description: '',
            cat1: '',
            cat2: '',
            cat3: '',
            thumbnail_url: '',
            detailsStatus: false
        };
        this.handleOnDrop = this.handleOnDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // const checkedArr = this.props.checked;
        // if(e.target.type === 'checkbox') {
        //     const newChecked = update(checkedArr, {$push: [e.target.value]})
        //     this.setState({[this.props.checked]: newChecked});
        // }
        if (e.target.type === "file") {
            // e.target.value = e.target.value.replace(/.*[\/\\]/, '');
            let f = e.target.value.replace(/.*[\/\\]/, '');
            return this.setState({[e.target.name]: f})
        }
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
            console.log(this.state)
            this.setState({detailsStatus: true});
    }

    addVideoDetails(videos) {
        console.log('adding video details:', videos)
        axios.post('/api/addvideo', {
            url: videos[0].url,
            uploader_id: this.props.loginStatus.id,
            thumbnail_url: this.state.thumbnail_url,
            title: this.state.title,
            description: this.state.description,
            cat1: this.state.cat1,
            cat2: this.state.cat2,
            cat3: this.state.cat3
        }).then((res) => {
            console.log(res);
        });
    }


    handleOnDrop(files) {
        if(this.state.detailsStatus === true)
        this.setState({isUploading: true});
        if(this.state.detailsStatus === true)
        Promise.all(files.map(file => this.uploadVideo(file)))
            .then(videos => {
                this.setState({
                    isUploading: false,
                    videos: this.state.videos.concat(videos),
                    videoDetails: {
                        thumbnail_url: this.state.thumbnail_url,
                        title: this.state.title,
                        description: this.state.description,
                        cat1: this.state.cat1,
                        cat2: this.state.cat2,
                        cat3: this.state.cat3
                    }
                });
                this.addVideoDetails(videos);
                this.props.dispatch(profileActions.getVideoByUser(this.props.params.id));
            }).catch(e => console.log(e));
    }

    uploadVideo(file) {
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" name="title" id="videoTitle" placeholder="Enter the video title here." value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea type="text" className="form-control" name="description" id="videoDescription" placeholder="Enter the video description here" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Select your Thumbnail</label>
                        <input type="text" name="thumbnail_url" id="videoThumbnail" value={this.state.value} onChange={this.handleChange} />
                            <p className="help-block">Image size: 300 x 250</p>
                    </div>
                    <select id="cat1select" name="cat1" onChange={this.handleChange} value={this.state.value}>
                        <option>Category 1</option>
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="gaming">Gaming</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="news">news</option>
                        <option value="travel">travel</option>
                    </select>
                    <select id="cat2select" name="cat2" onChange={this.handleChange} value={this.state.value}>
                        <option>Category 2</option>
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="gaming">Gaming</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="news">news</option>
                        <option value="travel">travel</option>
                    </select>
                    <select id="cat3select" name="cat3" onChange={this.handleChange} value={this.state.value}>
                        <option>Category 3</option>
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="gaming">Gaming</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="news">news</option>
                        <option value="travel">travel</option>
                    </select>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <br />

                    <Dropzone
                        onDrop={this.handleOnDrop}
                        accept="video/*"
                        style={divStyle}
                        multiple={false}
                        activeStyle={activeStyle}
                        rejectStyle={rejectStyle}
                    >
                        {this.state.isUploading ?
                            <div>Uploading file</div> :
                            <div>Enter Details Above Then Drag or Click Here</div>}
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