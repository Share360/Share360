import React, {Component} from 'react';



class ThumbnailCreator extends Component {


    screenShot(e) {
        e.preventDefault();

        let cap = this.capture2(document.querySelector('a-scene').components.screenshot, 'projection');
        let canv = document.querySelector('a-scene').components.screenshot.getCanvas;
        console.log(cap);
    }

    capture2(el, projection) {
        var el = this.el;
        var renderer = el.renderer;
        var size;
        var camera;
        var cubeCamera;
        // Configure camera
        if (projection === 'perspective') {
            // the quad is used for projection in the equirectangular mode
            // we hide it in this case.
            this.quad.visible = false;
            // use scene camera
            camera = el.camera;
            size = renderer.getSize();
        } else {
            // use ortho camera
            camera = this.camera;
            // copy position and rotation of scene camera into the ortho one
            camera.position.copy(el.camera.getWorldPosition());
            camera.rotation.copy(el.camera.getWorldRotation());
            // create cube camera and copy position from scene camera
            cubeCamera = new THREE.CubeCamera(el.camera.near, el.camera.far, Math.min(this.cubeMapSize, 2048));
            cubeCamera.position.copy(el.camera.getWorldPosition());
            cubeCamera.rotation.copy(el.camera.getWorldRotation());
            // render scene with cube camera
            cubeCamera.updateCubeMap(el.renderer, el.object3D);
            this.quad.material.uniforms.map.value = cubeCamera.renderTarget.texture;
            size = {width: this.data.width, height: this.data.height};
            // use quad to project image taken by the cube camera
            this.quad.visible = true;
        }
        this.renderCapture(camera, size, projection);
        // Trigger file download
        this.saveCapture();
    }

    render() {
        return (
            <div>

                <a-scene embedded style={{height: "200px", width: "355px", margin: "auto"}}>
                    <a-assets>
                        <video id="video" src="https://s3-us-west-2.amazonaws.com/share360videosbucket/explore360.mp4" crossOrigin></video>
                    </a-assets>
                    <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
                </a-scene>
                <br />
                <div className="form-group">
                    <label>Select your Thumbnail</label>
                    <input type="file" name="thumbnail_url" id="videoThumbnail" />
                    <p className="help-block">Image size: 300 x 250</p>
                </div>
                <button onClick={this.screenShot.bind(this)}>Screen Shot</button>
            </div>
        );
    }
}

export default ThumbnailCreator;