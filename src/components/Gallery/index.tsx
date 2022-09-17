import React from "react";

import "./index.css";

type GalleryElement = {
  key: string;
  value: React.ReactNode;
};

interface GalleryProps {
  elements: GalleryElement[];
}

const Gallery: React.FC<GalleryProps> = ({ elements }) => {
  return (
    <div className="gallery__container">
      <ul>
        {elements.map((element) => {
          return (
            <li key={element.key} className="gallery-item__container">
              {element.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
