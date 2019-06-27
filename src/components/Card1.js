import React from "react";
import List from "./List";


class Card1 extends React.Component{
    constructor(props){
        super(props);
        this.getType(this.props.type);
    }

    list= this.props.description.map((list)=>{
        return (
            <List detail={list} />
        )
    })

    defaultBack = "card__side card__side--back" ;
    defaultPic= "card__picture";
    defaultHeading="card__heading-span";
    

    getType(type){
        switch(type){
            case "blue":
                this.backCard=this.defaultBack.concat(" card__side--back-3");
                this.realPic=this.defaultPic.concat(" card__picture--3");
                this.realHeading=this.defaultHeading.concat(" card__heading-span--3");
                break;
            case "green": 
                this.backCard=this.defaultBack.concat(" card__side--back-2");
                this.realPic=this.defaultPic.concat(" card__picture--2");
                this.realHeading=this.defaultHeading.concat(" card__heading-span--2");
                break;
            default:
                this.backCard=this.defaultBack.concat(" card__side--back-1");
                this.realPic=this.defaultPic.concat(" card__picture--1");
                this.realHeading=this.defaultHeading.concat(" card__heading-span--1");
                break;
        }    

    } 
    

    render(){
        return(
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className={this.realPic}>
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className={this.realHeading}>
                                {this.props.title}
                            </span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                {this.list}
                            </ul>
                        </div>
                    </div>
                    <div className={this.backCard}>
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">{this.props.price}</p>
                            </div>
                            <a href="#" className="btn btn--white">{this.props.btnText}</a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default Card1;