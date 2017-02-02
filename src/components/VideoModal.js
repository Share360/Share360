
import React, { Component } from 'react';
import VideoUploader from './VideoUploader';

class VideoModal extends Component {
    render() {
        return (
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="videoModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-position">
                        <div className="modal-header uploader-modal-header">
                            <h1 className="text-center">360 Video Uploader</h1>
                        </div>
                        <div className="modal-body">
                            <VideoUploader />
                        </div>
                        <div className="modal-footer uploader-modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoModal;