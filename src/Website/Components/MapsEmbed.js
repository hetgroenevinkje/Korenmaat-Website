import React, { Component } from 'react';
import CustomButton from './CustomButton';
import API_Data from './API_Data';

export default class MapsEmbed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGoogleMapsEmbed: false
    }
  }

  componentDidMount() {
    // check the browsers DNT
    if (
      (typeof navigator.doNotTrack === 'undefined' || navigator.doNotTrack !== "1") ||
      (navigator.doNotTrack === "1" && accessCookie("showRegardlessOfDNT") === "1")
    ) this.setState({showGoogleMapsEmbed: true});
  }

  UserHasDNT = () =>
    <div className="mainGoogleMapsEmbed doNotTrackMessage">
      <p>Deze website maakt gebruik van externe services maar omdat uw browser een Do Not Track signaal verstuurd hebben wij deze tijdelijk uitgezet.</p>
      <p>U kan deze externe services hier onder weer inschakelen</p>
      <p><CustomButton text="Inschakelen" onClickCallback={() => {
        this.setState({showGoogleMapsEmbed: true});
        createCookie('showRegardlessOfDNT', '1', 365);
      }}/></p>
    </div>

  GoogleMapsEmbed = () =>
    <iframe
      className="mainGoogleMapsEmbed"
      title="korenmaatLocationMapsEmbed"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${API_Data.MAPS_API_KEY}&q=${API_Data.MAPS_API_LOCATION}&zoom=15`} allowFullScreen
    />

  render() {
    return (
      (API_Data.MAPS_API_KEY !== "" && this.state.showGoogleMapsEmbed) ? <this.GoogleMapsEmbed/> : <this.UserHasDNT/>
    );
  }
}

function createCookie(cookieName,cookieValue,daysToExpire) {
  let date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + "; expires=" + date.toGMTString() + "; SameSite=Strict; Secure";
}

function accessCookie(cookieName) {
  let name = encodeURIComponent(cookieName) + "=";
  let allCookieArray = document.cookie.split(';');
  for (let i=0; i < allCookieArray.length; i++) {
    let temp = allCookieArray[i].trim();
    if (temp.indexOf(name) === 0)
    return temp.substring(name.length, temp.length);
  }
  return "";
}
