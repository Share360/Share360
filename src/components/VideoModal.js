
import React, { Component } from 'react';
import UploadComponent from './VideoReader';

class VideoModal extends Component {
    render() {
        return (
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="videoModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-position">
                        <div className="modal-header">
                            <h4 className="modal-title" id="videoModalLabel">Select file to upload</h4>
                        </div>
                        <div className="modal-body">
                            <UploadComponent />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoModal;