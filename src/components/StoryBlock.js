import React from "react";

class StoryBlock extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img className="story__image" src={this.props.picture} alt="Person on a tour"/>
                        <figcaption className="story__caption">{this.props.name}</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottomsmall">{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default StoryBlock;