import React, { Component } from 'react';

class VideosCatagoryForm extends Component {
    render() {
        return (
            <div className="checkbox">
                <label className="checkbox-inline">
                    <input type="checkbox" name="music" id="checkboxMusic" value={"Music"} onChange={this.handleChange}  /> "Music"
                </label>
                <label className="checkbox-inline">
                    <input type="checkbox" name="sports" id="checkboxSports" value={"Sports"} onChange={this.handleChange} /> "Sports"
                </label>
                <label className="checkbox-inline">
                    <input type="checkbox" name="gaming" id="checkboxGaming" value={"Gaming"} onChange={this.handleChange} /> "Gaming"
                </label>
                <label className="checkbox-inline">
                    <input type="checkbox" name="entertainment" id="checkboxEntertainment" value={"Entertainment"} onChange={this.handleChange} /> "Entertainment"
                </label><br/>
                <label className="checkbox-inline">
                    <input type="checkbox" name="news" id="checkboxNews" value={"News"} onChange={this.handleChange} /> "News"
                </label>
                <label className="checkbox-inline">
                    <input type="checkbox" name="travel" id="checkboxTravel" value={"Travel"} onChange={this.handleChange} /> "Travel"
                </label>
            </div>
        );
    }
}

export default VideosCatagoryForm;