import React from 'react';
import "../iconFont.css";

class SmallCard extends React.Component{

    constructor(props){
        super(props);

        this.icon= "feature-box__icon";
        this.findFont(this.props.type);

    }

    findFont(type){
        switch(type){
            case "world":
            this.iconType=this.icon.concat(" icon-basic-world");
            break;

            case "compass":
            this.iconType=this.icon.concat(" icon-basic-compass");
            break;

            case "map":
            this.iconType=this.icon.concat(" icon-basic-map");
            break;

            case "heart":
            this.iconType=this.icon.concat(" icon-basic-heart");
            break;

            default:
            break;
        }
    }

    render(){
        return(
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className={this.iconType}></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">{this.props.title}</h3>
                    <p className="feature-box__text">
                        Proident elit elit consectetur enim nisi consectetur do est occaecat qui magna veniam eu. Dolor mollit nisi minim eiusmod amet excepteur. Pariatur eu duis aliquip nostrud reprehenderit commodo aute. Est est cillum occaecat nisi dolore qui voluptate consequat.
                    </p>
                </div>
            </div>
        )
    }
}

export default SmallCard;