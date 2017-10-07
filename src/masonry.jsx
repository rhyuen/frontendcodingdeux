import React, {Component} from "react";
import img from "./images/spiderman.jpg";


const MsnItem = ({imgReference}) => (
    <div className ="msn__row__item">        
        <img src = {imgReference}/>
        <div className = "msn__row__item__social">
            <div className = "msn__row__item__social__icon">X</div>
            <div className = "msn__row__item__social__icon">^</div>
            <div className = "msn__row__item__social__icon">V</div>
        </div>            
    </div>    
);

const MsnRow = ({gallery}) => (
    <div className = "msn__row">
        {
            gallery.map((item, index) => <MsnItem imgReference = {item.imageLink} key = {index}/>)
        }
    </div>
);
class Masonry extends Component{
    state = {
        pictures: []
    }

    componentDidMount= () => {
        const images = require.context("./images", false, /\.(png|jpg)$/);
        const handled = images.keys().map(images);
        const imageList = handled.map((currImage) => {
            return {
                imageLink: currImage,
                visible: true,
                likes: 0
            };
        });

        this.setState((prevState) => {
            return {
                pictures: imageList
            };
        });
    }

    handleVisibilityChange = () => {

    }

    handleUpvote = () => {
        
    }
    render(){
        return (
            <div className = "msn">                
                <MsnRow gallery = {this.state.pictures}/>
            </div>
        );
    }
}

export default Masonry;