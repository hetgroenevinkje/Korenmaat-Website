import React, { Component } from 'react';
import KorenmaatLogo from '../img/huisje-1.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNavBar: false,
      // extraCSSclasses: "waitUpTop ",
      extraCSSclasses: "",
      // windowHeight: 0,
      // windowWidth: 0
    };
    // // https://stackoverflow.com/a/42141641
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.checkForDisplayNavBar = this.checkForDisplayNavBar.bind(this);
  }

  // AnimationDelay = 700;

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  //
  //   window.addEventListener("scroll", this.checkForDisplayNavBar);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  //   window.removeEventListener("scroll", this.checkForDisplayNavBar);
  // }

  // checkForDisplayNavBar() {
  //   // If the user scrolled for more than 50% of the view height
  //   if (window.scrollY > this.state.windowHeight * 0.5 && !this.state.displayNavBar)
  //     return this.makeNavbarFadeIn();
  //   if (window.scrollY < this.state.windowHeight * 0.5 && this.state.displayNavBar)
  //     return this.makeNavbarFadeOut();
  // }

  // makeNavbarFadeIn = () => {
  //   this.setState({
  //     displayNavBar: true,
  //     extraCSSclasses: "downFromTopAnimation "
  //   });
  //   setTimeout(() => this.setState({extraCSSclasses: ""}), this.AnimationDelay);
  // }
  //
  // makeNavbarFadeOut = () => {
  //   this.setState({
  //     displayNavBar: false,
  //     extraCSSclasses: "upToTopAnimation "
  //   });
  //   setTimeout(() => this.setState({extraCSSclasses: "waitUpTop "}), this.AnimationDelay);
  // }
  //
  // updateWindowDimensions() {
  //   this.setState({
  //     // windowWidth: window.screen.width,
  //     windowHeight: window.screen.height
  //   });
  // }

  render() {
    return (
      <nav className={`${this.state.extraCSSclasses}navbar`}>
        {/*"downFromTopAnimation navbar"*/}
        <div className="navBarLogoLeft">
          <img src={KorenmaatLogo} alt="Logo" />
        </div>
        <div className="navbarContent">
          <span className="navbarTitle">De Korenmaat</span>
        </div>
        <div className="navbarLogoRight">
          <span className="navbarTitleRight">
            Biologische (web) winkel met bezorg service
          </span>
          <img src={KorenmaatLogo} alt="Logo" />
        </div>
      </nav>
    );
  }
}
