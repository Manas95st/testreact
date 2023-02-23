import React from 'react';
import Logo from '../../assets/images/logo.png';
import MyProfile from '../../assets/icons/my-profile.png';
import Wishlist from '../../assets/icons/wishlist.png';
import Checkout from '../../assets/icons/checkout.png';
import Login from '../../assets/icons/login.png';
import Search from '../../assets/images/search.png';
import Cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import './styles.scss';

type UserNavigation = {
  title: string;
  icon: string;
};

const USER_NAVIGATION: UserNavigation[] = [
  { title: 'My Account', icon: MyProfile },
  { title: 'My Wishlist', icon: Wishlist },
  { title: 'Checkout', icon: Checkout },
  { title: 'Log in', icon: Login },
];

type MenuItem = {
  title: string;
  link: string;
};

const MENU_ITEMS: MenuItem[] = [
  { title: 'home page', link: '#' },
  { title: 'brands', link: '#' },
  { title: 'women’s shoes', link: '#' },
  { title: 'men’s shoes', link: '#' },
  { title: 'kid’s shoes', link: '#' },
  { title: 'sale', link: '#' },
];

export const Header: React.FC = () => {
  const renderUserNavigation = (item: UserNavigation) => (
    <div
      className={'b-header__content__right-items__menu__item'}
      key={item.title}
    >
      <img src={item.icon} alt={item.title} />
      <span className={'b-header__content__right-items__menu__item__text'}>
        {item.title}
      </span>
    </div>
  );

  const renderSearch = () => (
    <div className={'b-header__content__right-items__search'}>
      <div className={'b-header__content__right-items__search__field'}>
        <input
          type="text"
          className={'b-header__content__right-items__search__field__input'}
          placeholder={'Size, Brands, Men’s, Women’s, Kid’s, etc.'}
        />
        <img
          src={Search}
          alt={'Search'}
          className={
            'b-header__content__right-items__search__field__search-icon'
          }
        />
      </div>
      <div className={'b-header__content__right-items__search__cart'}>
        <div className={'b-header__content__right-items__search__cart__items'}>
          <p className="b-header__content__right-items__search__cart__items__text">
            4
          </p>
          <img src={Cart} alt={'Cart'} />
        </div>
        <div className={'b-header__content__right-items__search__cart__text'}>
          My Cart
        </div>
      </div>
    </div>
  );

  return (
    <header className={'b-header'}>
      <div className={'b-header__line'} />
      <div className={'g-container b-header__content'}>
        <div className={'b-header__content__logo'}>
          <img src={Logo} alt={'logo'} />
        </div>
        <div className={'b-header__content__right-items'}>
          <div className={'b-header__content__right-items__menu'}>
            {USER_NAVIGATION.map(renderUserNavigation)}
          </div>
          <p className={'b-header__content__right-items__welcome-text'}>
            Welcome, Admin Admin
          </p>
          {renderSearch()}
        </div>
      </div>
      <div className={'g-container b-header__menu'}>
        <div className={'b-header__menu__bg'} />
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.title}
            className={'b-header__menu__item-link'}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};
