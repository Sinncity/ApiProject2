import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./LazyLoad.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import Axios from "axios";

export default function LazyLoad(props) {
  const url =
    "https://api.unsplash.com/photos/random?client_id=__0Nyo0wv6sod8vSxYPWQise3IFmAvUplKDnIyvazl8&count=50";
  const [images, setImages] = useState([]);

  const getImages = () => {
    Axios.get(url).then((res) => {
      setImages(res.data);
    });
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      {images.map((image) => {
        return (
          <LazyLoadImage
            className="LazyLoad"
            src={image.urls.regular}
            effect="blur"
            alt={image.alt_description}
            key={image.id}
          />
        );
      })}
    </div>
  );
}
