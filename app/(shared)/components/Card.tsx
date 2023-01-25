'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import placeholder from '@/public/images/placeholder.png';
import { CARD_MAX_BODY_LENGTH } from '@/constants/globalConstants';
import { CardProps } from '@/types/CardProps';

function Card({
  buttonText,
  buttonStyle,
  cardBody,
  cardHeader,
  cardLink,
  cardTitle,
  cardFirstSubtitle,
  cardSecondSubtitle,
}: CardProps): JSX.Element {
  const content =
    cardBody.length > CARD_MAX_BODY_LENGTH ? cardBody.substring(0, CARD_MAX_BODY_LENGTH).concat('...') : cardBody;

  return (
    <div className='container col-md-6'>
      <div className='card text-bg-light mb-3'>
        <div className='card-body'>
          <div className='card-header text-info text-bg-light'>{cardHeader}</div>
          <div className='card-body'>
            <div className='card-title fs-3'>{cardTitle}</div>
            <div className='card-subtitle fs-6 text-muted'>
              <s>{cardFirstSubtitle}</s>
            </div>
            <div className='card-subtitle fs-6 text-danger'>{cardSecondSubtitle}</div>
            <p className='card-text fs-5'>{content}</p>
            <span className='col-md-6'>
              <Image src={placeholder} alt={'productPic'} className='img-fluid rounded' />
            </span>
            <Link href={cardLink}>
              <button className='btn btn-primary mt-3' {...buttonStyle}>
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
