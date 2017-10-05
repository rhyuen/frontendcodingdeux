import React, {Component} from "react";
import img from "./images/spiderman.jpg";

const MsnItem = () => (
    <div className ="msn__col__item">        
        <img src = {img}/>
    </div>
);

// const images = require.context("./images", false, /\.(png|jpg)$/);
// const handled = images.keys().map(images);

const MsnCol = () => (
    <div className = "msn__col">        
        <MsnItem/>
        <MsnItem/>
        <MsnItem/>
        <MsnItem/>
    </div>
);
class Masonry extends Component{
    state = {

    }
    render(){
        return (
            <div className = "msn">
                <MsnCol/>
                <MsnCol/>
                <MsnCol/>
                <MsnCol/>
                <MsnCol/>
            </div>
        );
    }
}

export default Masonry;