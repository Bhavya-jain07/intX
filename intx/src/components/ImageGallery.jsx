import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Technical Session',
      caption: 'Reverse Engineering Workshop'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Hardware Hacking',
      caption: 'Hardware Security Session'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Web Security',
      caption: 'Web Penetration Testing Workshop'
    },
    {
      src: '/src/assets/images/opening.jpg',
      alt: 'Opening Ceremony',
      caption: 'Inauguration by Industry Experts'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Mentoring Session',
      caption: 'One-on-One Mentoring with Cyber Security Experts'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Team Collaboration',
      caption: 'Participants Working on Challenges'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Winners',
      caption: 'Winners with Their Trophies'
    },
    {
      src: '/src/assets/images/img1.jpg',
      alt: 'Networking',
      caption: 'Networking Session with Industry Leaders'
    }
  ];

  const maxIndex = images.length - 3; 

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="image-gallery">
      <h2>Event Highlights</h2>
      <div className="gallery-container">
        <button 
          className="gallery-button prev-button" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        
        <div className="gallery-slider">
          <div 
            className="gallery-track" 
            style={{ 
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt} />
                <p className="image-caption">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="gallery-button next-button" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ImageGallery;


