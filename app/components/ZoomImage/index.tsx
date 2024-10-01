import { useState, useRef } from 'react';
import { ImageZoomm } from "./styles"

interface ImageZoomProps {
  src: string;
  zoomImageSrc: string;
  zoomFactor: number;
  width: number;
  height: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, zoomImageSrc, zoomFactor, width, height }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const { left, top } = imageRef.current.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;

      setZoomPosition({ x, y });
    }
  };

  return (

    <ImageZoomm>
      <div style={{ width, height }} ref={imageRef}>
        <img
          src={src}
          alt="Imagem principal"
          className="mainImage"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
        {isZoomed && (
          <div
            className="zoomedImage"
            style={{
              backgroundImage: `url(${zoomImageSrc})`,
              backgroundPosition: `-${zoomPosition.x * zoomFactor}px -${zoomPosition.y * zoomFactor}px`,
              backgroundSize: `${width * zoomFactor}px ${height * zoomFactor}px`,
            }}
          />
        )}
      </div>
    </ImageZoomm>
  );
};

export default ImageZoom;