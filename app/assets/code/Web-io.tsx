'use client'
import mbkm1 from "../img/mbkm1.png"
import mbkm2 from "../img/mbkm2.png"
import mbkm3 from "../img/mbkm3.png"
import mbkm4 from "../img/mbkm4.png"
import mbkm5 from "../img/mbkm5.png"
import mbkm6 from "../img/mbkm6.png"
import mbkm7 from "../img/mbkm7.png"
import mbkm8 from "../img/mbkm8.png"
import mbkm9 from "../img/mbkm9.png"
import mbkm10 from "../img/mbkm10.png"
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

const MBKM = [
  {
    src: mbkm1,
    alt: "Dashboard View",
  },
  {
    src: mbkm2,
    alt: "Petugas",
  },
  {
    src: mbkm3,
    alt: "Peternak",
  },
  {
    src: mbkm4,
    alt: "Kandang",
  },
  {
    src: mbkm5,
    alt: "Hewan",
  },
  {
    src: mbkm6,
    alt: "Dashboard View",
  },
  {
    src: mbkm7,
    alt: "Dashboard View",
  },
  {
    src: mbkm8,
    alt: "Dashboard View",
  },
  {
    src: mbkm9,
    alt: "Dashboard View",
  },
  {
    src: mbkm10,
    alt: "Dashboard View",
  },
];

export default function WebIo(){
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % MBKM.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? MBKM.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Close the modal if the click is outside the modal content
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return(
    <div className="w-full mt-5">
      <div className="grid grid-rows-3 grid-flow-col gap-4 justify-center">
        <div className="row-span-2 col-span-2 bg-white border-8 rounded-xl">
          {/* Clickable image to open modal */}
          <Image
            width={500}
            height={400}
            src={MBKM[0].src}
            alt={MBKM[0].alt}
            onClick={openModal}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center w-full justify-center bg-black bg-opacity-70" onClick={handleBackdropClick}>
          <div className="relative bg-white h-[30rem] w-[56rem] justify-center flex rounded-lg shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>

            {/* Image Slider */}
            <div className="flex items-center justify-center">
              <Image
                src={MBKM[currentImage].src}
                width={800}
                height={700}
                alt={MBKM[currentImage].alt}
                className="rounded-lg border-black border-2"
              />
            </div>

            {/* Left/Right Navigation */}
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-2">
              <button
                onClick={prevSlide}
                className="text-black bg-gray-200 p-2 rounded-full"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="text-black bg-gray-200 p-2 rounded-full"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
}