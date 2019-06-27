import React from "react";

class About extends React.Component{

    render(){
        return(
            <div className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        {this.props.title}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">{this.props.heading1}</h3>
                        <p class="paragraph">{this.props.description1}</p>
                        <h3 className="heading-tertiary u-margin-bottom-small">{this.props.heading2}</h3>
                        <p class="paragraph">{this.props.description2}</p>
                        <a href="#" className="btn-text">Learn More &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div class="composition">
                            <img src={this.props.pic1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={this.props.pic2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={this.props.pic3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;