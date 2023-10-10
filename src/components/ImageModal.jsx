/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function ImageModal({ imageUrl, onClose }) {
    const [zoomFactor, setZoomFactor] = useState(1);

    const closeModal = (e) => { 
      e.stopPropagation();
      onClose();
    };
  
    const zoomIn = () => {
      setZoomFactor((prevZoom) => prevZoom + 0.2); // Increase zoom by 20%
    };
  
    const zoomOut = () => {
      if (zoomFactor > 0.5) {
        setZoomFactor((prevZoom) => prevZoom - 0.2); // Decrease zoom by 20%, but not below 100%
      }
    };
    
  return (
    <div className="">
      <div className="fixed inset-0 bg-black opacity-50" />

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className=" bg-gray-700 p-4 rounded-lg shadow-lg" style={{ transform: `scale(${zoomFactor})` }}>
          
          <img
            src={imageUrl}
            alt="Zoomed Image"
            className="zoomable-image cursor-pointer rounded-lg"
            style={{ width: '400px', height: '300px', objectFit: 'cover', }}
            onClick={onclose}
          />
        </div>
        <div className="fixed inset-0 z-60 flex items-end justify-center mb-20">
          <div className="flex justify-end mb-2 gap-6">
              <button
                onClick={zoomIn}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                +
              </button>
              <button
                onClick={zoomOut}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                -
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg top-0 right-0 cursor-pointer" onClick={closeModal}>
                 X
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
