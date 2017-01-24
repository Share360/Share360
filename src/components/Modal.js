
import React, { Component } from 'react';
import FileReader from './FileReader';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-position">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Select file to upload</h4>
                        </div>
                        <div className="modal-body">
                            <FileReader />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-custom">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;