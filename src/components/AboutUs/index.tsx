import React from 'react';
import Apostrof from '../../assets/icons/apostrof.png';
import AboutAsIcon from '../../assets/icons/card.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import ContactIcon from '../../assets/icons/contact.png';
import PhoneIcon from '../../assets/icons/phone.png';
import MobileIcon from '../../assets/icons/mobile.png';
import './styles.scss';

export const AboutUs: React.FC = () => {
  return (
    <div className={'b-about-us'}>
      <div className={'g-container b-about-us__content'}>
        <div className={'b-about-us__content__info'}>
          <div className={'b-about-us__content__info__title'}>
            <img src={AboutAsIcon} alt={'About Us'} />
            <h4 className={'b-about-us__content__info__title__text'}>
              About Us
            </h4>
          </div>
          <p className={'b-about-us__content__info__desc'}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut
            pharetra augue nec augue. Nam elit agna, endrerit sit amet,
            tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque
            diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede.
            Donec eget tellus non erat lacinia fermentum. Donec in velit vel
            ipsum auctor pulvinar.
          </p>
        </div>
        <div className={'b-about-us__content__twitter'}>
          <div className={'b-about-us__content__twitter__title'}>
            <img src={TwitterIcon} alt={'About Us'} />
            <h4 className={'b-about-us__content__twitter__title__text'}>
              Twitter
            </h4>
          </div>
          <div className={'b-about-us__content__twitter__tweet'}>
            <img src={Apostrof} alt={'Apostrof'} />
            <p className={'b-about-us__content__twitter__tweet__text'}>
              Vestibulum ante ipsum primisan nulla diamfaucib ...
              www.company.com 25 day ago Curae;
            </p>
          </div>
          <div className={'b-about-us__content__twitter__tweet'}>
            <img src={Apostrof} alt={'Apostrof'} />
            <p className={'b-about-us__content__twitter__tweet__text'}>
              Vestibulum ante ipsum primisan nulla diamfaucib ...
              www.company.com 25 day ago Curae;
            </p>
          </div>
        </div>
        <div className={'b-about-us__content__contact'}>
          <div className={'b-about-us__content__contact__title'}>
            <img src={ContactIcon} alt={'ContactIcon'} />
            <h4 className={'b-about-us__content__contact__title__text'}>
              Contact
            </h4>
          </div>
          <div className={'b-about-us__content__contact__phone'}>
            <img
              src={PhoneIcon}
              alt={'PhoneIcon'}
              className={'b-about-us__content__contact__phone__phone-img'}
            />
            <p className={'b-about-us__content__contact__phone__text'}>
              +1234567890
              <br />
              +1234567890
            </p>
          </div>
          <div className={'b-about-us__content__contact__phone'}>
            <img
              src={MobileIcon}
              alt={'MobileIcon'}
              className={'b-about-us__content__contact__phone__mobile-img'}
            />
            <p className={'b-about-us__content__contact__phone__text'}>
              +1234567890
              <br />
              +1234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
