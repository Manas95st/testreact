import React from 'react';
import './styles.scss';

export const HomeBanner1: React.FC = () => {
  return (
    <div className={'b-home-banner1'}>
      <h4 className={'b-home-banner1__text'}>
        get <span>$25.00 back</span>
        <br />
        after your first purchase
      </h4>
    </div>
  );
};
