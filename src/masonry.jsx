import React, {Component} from "react";
import uuid from "uuid";


const MsnItem = ({imgReference, onImageClose, id, likes, onImageUpvote, onImageDownvote}) => (
    <div className ="msn__row__item">        
        <img src = {imgReference}/>
        <div className = "msn__row__item__social">
            <div className = "msn__row__item__social__icon" onClick = {onImageClose.bind(this, id)}>X</div>
            <div className = "msn__row__item__social__icon" onClick = {onImageUpvote.bind(this, id)}>^</div>
            <div className = "msn__row__item__social__icon" onClick = {onImageDownvote.bind(this, id)}>V</div>
        </div>            
        <div className = "msn__row__item__summary">{likes} Likes</div>
    </div>    
);

const MsnRow = ({gallery, onImageClose, onImageUpvote, onImageDownvote}) => (
    <div className = "msn__row">
        {
            gallery.map((item) => {
                if(item.visible){
                    return <MsnItem imgReference = {item.imageLink} 
                        key = {item.id} 
                        id = {item.id}
                        likes = {item.likes} 
                        onImageClose = {onImageClose}
                        onImageUpvote = {onImageUpvote}
                        onImageDownvote = {onImageDownvote}/>;
                }
            })            
        }
        <MsnFooter/>
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
                {visible: false}
            );            
            const beginning = prevState.pictures.slice(0, index);            
            const end = prevState.pictures.splice(index + 1);                            
            const updatedlist = beginning.concat(updatedImg).concat(end);            
            return {
                pictures: updatedlist
            };
                
        });
    }

    handleUpvote = (id) => {
        let index = null;
        for(let i = 0; i < this.state.pictures.length; i++){
            if(this.state.pictures[i].id === id){
                index = i;
            }
        }
                
        this.setState(prevState => {
            const updatedImg = Object.assign({}, 
                this.state.pictures[index], 
                {likes: prevState.pictures[index].likes + 1}
            );

            return {
                pictures: prevState.pictures.slice(0, index)
                    .concat(updatedImg)
                    .concat(prevState.pictures.splice(index + 1))
            };
        });
    }

    handleDownVote = (id) => {
        let index = null;
        for(let i = 0; i < this.state.pictures.length; i++){
            if(this.state.pictures[i].id === id){
                index = i;
            }
        }
                
        this.setState(prevState => {
            const updatedImg = Object.assign({}, 
                this.state.pictures[index], 
                {likes: prevState.pictures[index].likes - 1}
            );

            return {
                pictures: prevState.pictures.slice(0, index)
                    .concat(updatedImg)
                    .concat(prevState.pictures.splice(index + 1))
            };
        });
    }
    render(){
        return (
            <div className = "msn">                
                <MsnRow gallery = {this.state.pictures} 
                    onImageClose = {this.handleVisibilityChange}
                    onImageUpvote = {this.handleUpvote}
                    onImageDownvote = {this.handleDownVote}/>                
            </div>            
        );
    }
}

const MsnViewer = () => (
    <div>
        Viewer
    </div>
);

const MsnFooter = () => (
    <div className ="msn__footer">  
        <div className = "msn__footer__content">
            <span>That's all for now.</span>
        </div>        
    </div>
);

export default Masonry;