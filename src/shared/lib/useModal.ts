import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setTimeout(() => setIsModalOpen(false), 100);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return { isModalOpen, openModal, closeModal, toggleModal };
};
