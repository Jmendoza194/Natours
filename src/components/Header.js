import React from "react";

class Header extends React.Component{

    render(){
        return(
            <div>
                <header className="header">
                    <div className="header__logo-box">
                        <img src={this.props.logo} alt="logo" className="header__logo"/>
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">{this.props.title}</span>
                            <span className="heading-primary--sub">{this.props.subTitle}</span>
                        </h1>

                        <a className="btn btn--white btn--animated">{this.props.btnText}</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;