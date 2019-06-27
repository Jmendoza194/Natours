import React from 'react';
import StoryBlock from "./StoryBlock";

class Stories extends React.Component{
    render(){
        return(
            <div className="section-stories">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        {this.props.heading}
                    </h2>
                </div>
                <StoryBlock 
                    name={this.props.name1}
                    picture={this.props.pic1}
                    title={this.props.title1}
                    description={this.props.description1}
                />
                <StoryBlock 
                    name={this.props.name2}
                    picture={this.props.pic2}
                    title={this.props.title2}
                    description={this.props.description2}
                />

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">{this.props.btnText}</a>
                </div>
            </div>
        );
       
    }
}

export default Stories;