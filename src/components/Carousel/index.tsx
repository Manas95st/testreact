import React, { useEffect, useState } from 'react';
import './styles.scss';
import { getMainCarouselShoes } from '../../api/shoes';
import { Shoes } from '../../models/Shoes';
import classNames from 'classnames';

const ITEM_WIDTH = 870;

export const Carousel: React.FC = () => {
  const [shoes, setShoes] = useState<Shoes[]>([]);
  const [left, setLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getMainCarouselShoes().then((data) => setShoes(data));
  }, []);

  const goToLeft = () => {
    const _currentIndex =
      currentIndex === 0 ? shoes.length - 1 : currentIndex - 1;
    setLeft(-1 * _currentIndex * ITEM_WIDTH);
    setCurrentIndex(_currentIndex);
  };
  const goToRight = () => {
    const _currentIndex =
      shoes.length - 1 === currentIndex ? 0 : currentIndex + 1;
    setLeft(-1 * _currentIndex * ITEM_WIDTH);
    setCurrentIndex(_currentIndex);
  };

  if (!shoes.length) return null;

  return (
    <div className={'b-carousel'}>
      <div className={'b-carousel_wrapper g-container'}>
        <div className={'b-carousel__arrows'}>
          <div className={'b-carousel__arrows__left'} onClick={goToLeft} />
          <div className={'b-carousel__arrows__right'} onClick={goToRight} />
        </div>
        <div className={'b-carousel__carousel'}>
          <div
            className={'b-carousel__carousel__items'}
            style={{ width: ITEM_WIDTH * shoes.length, left }}
          >
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className={'b-carousel__carousel__items__item'}
                style={{ width: ITEM_WIDTH }}
              >
                <img
                  src={shoe.images?.[0]}
                  className={'b-carousel__carousel__items__item__img'}
                  alt={'carousel item'}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={'b-carousel__indicator'}>
          <p className={'b-carousel__indicator__title'}>
            0{currentIndex + 1}. {shoes[currentIndex]?.title}
          </p>
          <div className={'b-carousel__indicator__items'}>
            {shoes.map((_, index) => (
              <div
                key={index}
                className={classNames('b-carousel__indicator__items__item', {
                  'b-carousel__indicator__items__item--active':
                    index === currentIndex,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
