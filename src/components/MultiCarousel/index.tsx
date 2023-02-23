import React, { useEffect, useState } from 'react';
import { Shoes } from '../../models/Shoes';
import { getMultiCarouselShoes } from '../../api/shoes';
import './styles.scss';

const ITEM_WIDTH = 175;
const GAP = 8;
const SHOWED_MAX_ITEM = 5;

export const MultiCarousel: React.FC = () => {
  const [shoes, setShoes] = useState<Shoes[]>([]);
  const [left, setLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getMultiCarouselShoes().then((data) => {
      setShoes(data);
    });
  }, []);

  const goToLeft = () => {
    const _currentIndex =
      currentIndex === 0 ? shoes.length - SHOWED_MAX_ITEM : currentIndex - 1;
    setLeft(-1 * _currentIndex * ITEM_WIDTH + (-1 * GAP * _currentIndex - 1));
    setCurrentIndex(_currentIndex);
  };
  const goToRight = () => {
    const _currentIndex =
      shoes.length - 1 === currentIndex ||
      currentIndex + 1 + SHOWED_MAX_ITEM > shoes.length
        ? 0
        : currentIndex + 1;
    setLeft(-1 * _currentIndex * ITEM_WIDTH + (-1 * GAP * _currentIndex - 1));
    setCurrentIndex(_currentIndex);
  };

  return (
    <div className={'b-multicarousel'}>
      <div className={'b-multicarousel_wrapper g-container'}>
        <div className={'b-multicarousel__arrows'}>
          <div className={'b-multicarousel__arrows__left'} onClick={goToLeft} />
          <div
            className={'b-multicarousel__arrows__right'}
            onClick={goToRight}
          />
        </div>
        <div className={'b-multicarousel__carousel'} style={{ columnGap: GAP }}>
          <div
            className={'b-multicarousel__carousel__items'}
            style={{
              width: (ITEM_WIDTH * shoes.length) / SHOWED_MAX_ITEM,
              left,
            }}
          >
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className={'b-multicarousel__carousel__items__item'}
                style={{ width: ITEM_WIDTH }}
              >
                <img
                  src={shoe.images?.[0]}
                  className={'b-multicarousel__carousel__items__item__img'}
                  alt={'carousel item'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
