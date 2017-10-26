import React, {Component} from "react";
import uuid from "uuid";


const MsnItem = ({imgReference, onImageClose, id, likes, onImageUpvote, onImageDownvote, onImageClick}) => (
    <div className ="msn__row__item">        
        <img src = {imgReference} onClick = {onImageClick.bind(this)}/>
        <div className = "msn__row__item__social">
            <div className = "msn__row__item__social__icon" onClick = {onImageClose.bind(this, id)}>X</div>
            <div className = "msn__row__item__social__icon" onClick = {onImageUpvote.bind(this, id)}>^</div>
            <div className = "msn__row__item__social__icon" onClick = {onImageDownvote.bind(this, id)}>V</div>
        </div>            
        <div className = "msn__row__item__summary">{likes} Likes</div>
    </div>    
);

const MsnRow = ({gallery, onImageClose, onImageUpvote, onImageDownvote, onImageClick}) => (
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
                        onImageDownvote = {onImageDownvote}
                        onImageClick = {onImageClick.bind(this, item.id)}/>;
                }
            })            
        }
        <MsnFooter/>
    </div>
);
class Masonry extends Component{
    state = {
        pictures: [],
        isViewerVisible: false,
        viewerImage: ""
    }

    componentDidMount= () => {
        const images = require.context("./images", false, /\.(png|jpg)$/);
        const handled = images.keys().map(images);
        const imageList = handled.map((currImage) => {            
            return {
                imageLink: currImage,
                visible: true,
                likes: 0,
                id: uuid.v4(),
                comments: [{
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre."
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Kubernetes solves lots of problems.  It perplexes me as to why the 8 in the abbreviation.  I however, did find out that it denotes eight characters between the k and the s.  This is for super long lenght of text."
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre. For Y-Height"
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre I mean y-axis overflow."
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre I mean y-axis overflow."
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre I mean y-axis overflow."
                }, {
                    commentid: uuid.v4(),
                    name: `user ${Math.floor(Math.random()*100)}`,
                    text: "Test of varying length goes ehre.  Test by iteration and fail to see what happens."
                }]
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

    handleImageClick = (id, e) => {        
        const clickedImage = e.target.src.split("/").pop();         
        const imageObj = this.state.pictures.filter(pic => {
            return pic.id === id;
        });
        this.setState(prevState => {
            return {
                ...prevState,
                isViewerVisible: true,
                // viewerImage: clickedImage
                viewerImage: imageObj[0]
            };
        });
    }

    handleViewerClose = () => {               
        this.setState(prevState => {
            return {
                ...prevState,
                isViewerVisible: false,
                viewerImage: ""
            };
        });        
    }

    render(){
        return (
            <div className = "msn">
                <MsnViewer isVisible = {this.state.isViewerVisible} 
                    imageLink = {this.state.viewerImage.imageLink}
                    comments = {this.state.viewerImage.comments}
                    onViewerClose = {this.handleViewerClose}/>
                <MsnRow gallery = {this.state.pictures} 
                    onImageClose = {this.handleVisibilityChange}
                    onImageUpvote = {this.handleUpvote}
                    onImageDownvote = {this.handleDownVote}
                    onImageClick = {this.handleImageClick}/>
            </div>            
        );
    }
}

const MsnCommentsList = ({comments}) => (
    <div className ="msn__viewer__content__text__comments">
        {
            comments.map(comment => {
                return (
                    <div className = "msn__viewer__content__text__comments__item" key = {comment.commentid}>
                        <span className = "msn__viewer__content__text__comments__item__name">{comment.name}: </span>
                        <span className = "msn__viewer__content__text__comments__item__text">{comment.text}</span>
                    </div>
                );
            })
        }
    </div>
);

const MsnViewerSummary = () => (
    <div className ="msn__viewer__content__text__summary">
        <div className = "msn__viewer__content__text__summary__buttons">
            <div className = "msn__viewer__content__text__summary__buttons__item"></div>
            <div className = "msn__viewer__content__text__summary__buttons__item"></div>
        </div>
        <div className = "msn__viewer__content__text__summary__likes">{Math.floor(Math.random() * 100)} Likes</div>
        <div className = "msn__viewer__content__text__summary__date">{new Date().toLocaleString()}</div>
    </div>
);

const MsnViewer = ({isVisible, imageLink, onViewerClose, comments}) => {
    if(isVisible){
        return (
            <div className = "msn__viewer">        
                <div className = "msn__viewer__content">            
                    <div className ="msn__viewer__content__picture">
                        <img src = {imageLink}/>
                    </div>
                    <div className = "msn__viewer__content__text">
                        <div className ="msn__viewer__content__text__user">
                            <div className = "msn__viewer__content__text__user__icon"></div>
                            <div className = "msn__viewer__content__text__user__name">aNameIsHere</div>
                        </div>
                       <MsnCommentsList comments = {comments}/>
                        <MsnViewerSummary/>
                    </div>
                    <div className = "msn__viewer__content__closebutton"
                        onClick = {onViewerClose.bind(this)}>
                    </div>
                </div>
            </div>
        );
    }else{
        return null;
    }
};

const MsnFooter = () => (
    <div className = "msn__footer">
        <div className = "msn__footer__content">
            <span>That's all for now.</span>
        </div>
    </div>
);

export default Masonry;