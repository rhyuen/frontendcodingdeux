import React, {Component} from "react";
import img from "./images/spiderman.jpg";
import uuid from "uuid";


const MsnItem = ({imgReference, onImageClose, id}) => (
    <div className ="msn__row__item">        
        <img src = {imgReference}/>
        <div className = "msn__row__item__social">
            <div className = "msn__row__item__social__icon" onClick = {onImageClose.bind(this, id)}>X</div>
            <div className = "msn__row__item__social__icon">^</div>
            <div className = "msn__row__item__social__icon">V</div>
        </div>            
    </div>    
);

const MsnRow = ({gallery, onImageClose}) => (
    <div className = "msn__row">
        {
            gallery.map((item) => {
                if(item.visible){
                    return <MsnItem imgReference = {item.imageLink} 
                        key = {item.id} 
                        id = {item.id} 
                        onImageClose = {onImageClose}/>;
                }
            })
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
                likes: 0,
                id: uuid.v4()                
            };
        });

        this.setState((prevState) => {
            return {
                pictures: imageList
            };
        });
    }

    handleVisibilityChange = (id) => {
        const selectedID = id;        
        this.setState(prevState => {
            let index = null;            
            for(let i = 0; i < this.state.pictures.length; i++){
                if(this.state.pictures[i].id === selectedID){
                    index = i;                    
                    break;
                }
            }       
            const updatedImg = Object.assign({},
                prevState.pictures[index], 
                {visible: !prevState.pictures[index].visible}
            );
            
            const beginning = prevState.pictures.slice(0, index);
            console.log(beginning);
            const end = prevState.pictures.splice(index + 1);                
            console.log(end);
            const updatedlist = beginning.concat(updatedImg).concat(end);
            console.log(updatedlist);
            return updatedlist;
                
        });
    }

    handleUpvote = () => {

    }
    render(){
        return (
            <div className = "msn">                
                <MsnRow gallery = {this.state.pictures} onImageClose = {this.handleVisibilityChange}/>
            </div>
        );
    }
}

export default Masonry;