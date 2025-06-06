import { useState } from 'react';
import closeSvg from '../assets/close.svg'

interface Day{
  name:string;
  repeat:string;
  image:string;
  video:string;
}

interface ImageWithModalProps {
  item: Day;
}

function ImageWithModal({ item }: ImageWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = () => {
    setModalImage(item.image);
    setIsModalOpen(true);
    // Optionally disable scrolling on the body when the modal is open
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
    // Re-enable scrolling on the body when the modal is closed
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <img
        className="border border-1 border-slate-200 shadow-xs rounded-xl my-3 h-35 w-35 cursor-pointer"
        src={item.image}
        alt={'Click to view full screen'}
        onClick={openModal}
      />

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <img onClick={closeModal} className="fixed top-2 left-2 w-10 h-10 bg-white border border-b rounded-xl border-dark z-10" src={closeSvg} />
          <div className="relative">
            <img
              src={modalImage}
              alt="Full screen view"
              className="max-w-screen-lg max-h-screen-lg object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageWithModal;
