import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from '../../components/Select';
import './styles.scss';

type MenuItem = {
  title: string;
  link: string;
};

const MENU_ITEMS: MenuItem[] = [
  { title: 'About Us', link: '#' },
  { title: 'Customer Service', link: '#' },
  { title: 'Site Map', link: '#' },
  { title: 'Search Terms', link: '#' },
  { title: 'Advanced Search', link: '#' },
  { title: 'Contact Us', link: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="b-footer">
      <div className="g-container b-footer__menu">
        {MENU_ITEMS.map((item, index, arr) => (
          <React.Fragment key={index}>
            <Link className="b-footer__menu__item-link" to={item.link}>
              {item.title}
            </Link>
            {arr.length - 1 > index && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
      <div className={'b-footer__line'} />
      <div className="b-footer__site-info">
        <div className={'g-container b-footer__site-info__container'}>
          <div className="b-footer__site-info__container__text">
            © 2011 Magento Demo Store. All Rights Reserved
          </div>
          <div className="b-footer__site-info__container__select-wrapper">
            <Select options={[{ label: 'US Dollar - USD', value: 'usd' }]} />
            <Select options={[{ label: 'English', value: 'eng' }]} />
          </div>
        </div>
      </div>
    </footer>
  );
};
