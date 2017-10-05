import React, {Component} from "react";
import img from "./images/spiderman.jpg";

const MsnItem = ({imgReference}) => (
    <div className ="msn__row__item">        
        <img src = {imgReference}/>
        <div className = "msn__row__item__social">
            <div clasName = "msn__row__item__social__icon">A</div>
            <div clasName = "msn__row__item__social__icon">B</div>
            <div clasName = "msn__row__item__social__icon">B</div>
        </div>            
    </div>    
);

const MsnRow = () => {
    const images = require.context("./images", false, /\.(png|jpg)$/);
    const handled = images.keys().map(images);

    const list = handled.map((item, index) => {
        return <MsnItem imgReference = {item} key = {index}/>
    });

    return (
        <div className = "msn__row">
            {list}
        </div>
    );
};
class Masonry extends Component{
    state = {

    }
    render(){
        return (
            <div className = "msn">
                <MsnRow/>
            </div>
        );
    }
}

export default Masonry;