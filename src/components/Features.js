import React from "react";
import SmallCard from "./SmallCard";

class Features extends React.Component{
    render(){
        return(
            <div className="section-features">
                    <div className="row">
                        <SmallCard description={this.props.description1} title={this.props.title1} type={this.props.type1}/>
                        <SmallCard description={this.props.description2} title={this.props.title2} type={this.props.type2}/>
                        <SmallCard description={this.props.description3} title={this.props.title3} type={this.props.type3}/>
                        <SmallCard description={this.props.description4} title={this.props.title4} type={this.props.type4}/>
                    </div>
            </div>
        );
    }
}

export default Features;