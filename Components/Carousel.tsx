import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { css } from '@emotion/react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const carouselStyles = css`
  margin: 24px;
  width: 720px;
  .legend {
    width: 720px;
  }
  .legend p {
    font-family: inherit;
    font-size: 24px;
    text-decoration: dashed;
  }
`;

function ImageCarousel({ className }: { className: string }) {
  return (
    <div css={carouselStyles}>
      <h2>Some of our spaceships!</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <Image
            src="/img/3-millennium-falcon.jpg"
            width={720}
            height={480}
            alt="The spaceship Millennium Falcon, known from Star Wars"
          />
          <p className="legend">Millennium Falcon</p>{' '}
        </div>
        <div>
          <Image
            src="/img/4-avalon.jpg"
            width={720}
            height={480}
            alt="The spaceship Avalon, known from Passengers"
          />
          <p className="legend">Avalon</p>{' '}
        </div>
        <div>
          <Image
            src="/img/1-nostromo.jpg"
            width={720}
            height={480}
            alt="The spaceship Nostromo, known from Alien"
          />
          <p className="legend">Nostromo</p>{' '}
        </div>
        <div>
          <Image
            src="/img/8-endurance.jpg"
            width={720}
            height={480}
            alt="The spaceship Endurance, known from Interstellar"
          />
          <p className="legend">Endurance</p>{' '}
        </div>
        <div>
          <Image
            src="/img/5-serenity.jpg"
            width={720}
            height={480}
            alt="The spaceship Serenity, known from Firefly"
          />
          <p className="legend">Serenity</p>{' '}
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
