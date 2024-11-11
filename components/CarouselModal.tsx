import { useState, useEffect, useCallback, MouseEvent } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

interface CarouselModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileView, setIsMobileView] = useState(false);

  // Preload the next/previous image
  const preloadImage = useCallback((index: number) => {
    if (images[index]) {
      const img = new window.Image();
      img.src = images[index];
    }
  }, [images]);

  useEffect(() => {
    // Preload the next and previous images
    preloadImage((currentIndex + 1) % images.length);
    preloadImage((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, preloadImage, images.length]);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleImageClick = () => {
    setIsMagnifying((prev) => !prev);
  };

  return (
    <div className="no-select fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <AiOutlineClose
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl cursor-pointer z-50 hover:text-red-500 transition-transform transform hover:scale-110"
      />
      <div className="absolute left-4 md:left-6 text-white text-3xl md:text-4xl cursor-pointer z-50">
        <div
          className="bg-hoverColor bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 hover:text-white transition-all duration-300 ease-in-out"
          onClick={handlePrev}
        >
          <AiOutlineLeft />
        </div>
      </div>

      <div
        className="relative w-full max-w-[100%] md:max-w-[100%] h-[1000%] md:h-[100%] rounded-lg shadow-lg flex justify-center items-center p-4 md:p-6"
        onMouseMove={isMobileView || !isMagnifying ? undefined : handleMouseMove}
      >
        <div
          className="relative w-full h-full cursor-pointer"
          style={{
            backgroundImage: isMagnifying && !isMobileView ? `url(${images[currentIndex]})` : 'none',
            backgroundSize: isMagnifying ? '120%' : 'contain',
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            transition: 'background-size 0.3s ease',
          }}
          onClick={handleImageClick}
        >
          <Image
            src={images[currentIndex]}
            alt={`carousel image ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className={`rounded-lg transition-opacity duration-300 ${isMagnifying && !isMobileView ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>

      <div className="absolute right-4 md:right-6 text-white text-3xl md:text-4xl cursor-pointer z-50">
        <div
          className="bg-hoverColor bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 hover:text-white transition-all duration-300 ease-in-out"
          onClick={handleNext}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
