import React, { Component } from 'react';
import './PersonCard.css'

import Avatar from '../Avatar/Avatar'

class PersonCard extends Component {
  render() {
    return (
      <article className="person-card">
        <section className="person-card__person">
          <Avatar image={this.props.person.imageUrl}  />
          <div>
            <h1 className="person-card__name"><a href="/">{this.props.person.firstName} {this.props.person.lastName}</a></h1>
            <p>Age: {this.props.person.age}</p>
          </div>
        </section>
        <section className="person-card__contact-info">
          <span className="ion-ios-home"></span>
          <address className="person-card__contact-info__address">
            <section>{this.props.person.address}</section>
            <section className="person-card__contact-info__address__street">{this.props.person.homeAddressStreet}</section>
            <section className="person-card__contact-info__address__city-state">{this.props.person.homeAddressCityStateZip}</section>
          </address>
          <span className="ion-ios-telephone"></span>
          <ul className="phone-numbers">
            <li  className="phone-numbers__number">
              <a className="phone" href="tel: 1-507-867-5309">
                {this.props.person.homePhone} (Home)
              </a>
            </li>
            <li className="phone-numbers__number">
              <a className="phone" href="tel: 1-507-309-1777 (Work)">
                {this.props.person.workPhone} (Work)
              </a>
            </li>
          </ul>
          <span className="ion-email"></span>
          <a href="/">
            {this.props.person.personalEmail}
          </a>
        </section>
      </article>
    );
  }
}

export default PersonCard;
