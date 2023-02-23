import React from 'react';
import './styles.scss';

export const HomeBanner2: React.FC = () => {
  return (
    <div className={'b-home-banner2'}>
      <div className={'b-home-banner2__info'}>
        <h4 className={'b-home-banner2__info__title'}>Browse</h4>
        <p className={'b-home-banner2__info__desc'}>
          our mooving spring catalog
        </p>
        <h4 className={'b-home-banner2__info__action'}>Shop Now</h4>
      </div>
    </div>
  );
};
