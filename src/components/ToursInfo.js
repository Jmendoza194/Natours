import React from 'react';
import Card1 from "./Card1"

class ToursInfo extends React.Component{
    
    render(){
        return(
            <div>
                 <div className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most Popular Tours
                        </h2>
                        <div className="row">
                            <Card1 
                                title={this.props.title1}
                                description={this.props.description1}
                                price={this.props.price1}
                                btnText={this.props.btnText2}
                                type={this.props.type1}
                            />
                            <Card1
                                title={this.props.title2}
                                description={this.props.description2}
                                price={this.props.price2}
                                btnText={this.props.btnText2}
                                type={this.props.type2}
                            />
                            <Card1 
                                title={this.props.title3}
                                description={this.props.description3}
                                price={this.props.price3}
                                btnText={this.props.btnText2}
                                type={this.props.type3}
                            />
                        </div>
                        <div className="u-center-text u-margin-top-huge">
                            <a href ="#" className="btn btn--green">{this.props.btnText1}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToursInfo;