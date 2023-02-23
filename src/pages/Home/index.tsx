import React from 'react';
import { AboutUs } from '../../components/AboutUs';
import './styles.scss';
import { HomeBanner1 } from '../../banners/HomeBanner1';
import { HomeBanner2 } from '../../banners/HomeBanner2';
import { Carousel } from '../../components/Carousel';
import { MultiCarousel } from '../../components/MultiCarousel';

export const Home: React.FC = () => {
  return (
    <div className={'b-home'}>
      <Carousel />
      <div className={'b-home__info g-container'}>
        <h4 className={'b-home__info__title'}>welcome to Moving</h4>
        <p className={'b-home__info__desc'}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Sed euismod, nisl ut aliquam mollis, justo nisl
          aliquet mauris, quis aliquet nunc quam nec dui. Sed euismod, nisl ut
          aliquam mollis, justo nisl aliquet mauris, quis aliquet nunc quam nec
          dui. Sed euismod, nisl ut aliquam mollis, justo nisl aliquet mauris,
          quis aliquet nunc quam nec dui. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod,
          nisl ut aliquam mollis, justo nisl aliquet mauris, quis aliquet nunc
          quam nec dui. Sed euismod, nisl ut aliquam mollis, justo nisl aliquet
          mauris, quis aliquet nunc quam nec dui. Sed euismod, nisl ut aliquam
          mollis, justo nisl aliquet mauris, quis aliquet nunc quam nec dui.
        </p>
      </div>
      <MultiCarousel />
      <div className={'b-home__banner g-container'}>
        <HomeBanner1 />
        <HomeBanner2 />
      </div>
      <AboutUs />
    </div>
  );
};
