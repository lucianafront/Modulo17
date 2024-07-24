import React, { useState } from 'react';
import BaseComponent from './components/BaseComponent'
import ExtendedComponent from './components/ExtendedComponent';
import Button from './components/Button';
import Form from './components/Form';
import Modal from './components/Modal';


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const b = {
    title: 'Título base',
    description: 'Descrição base',
    data: ['item 1', 'item 2', 'item 3'],
    valiation: 15
  };

  const other = {
    title: 'Título Outro',
    description: 'Descrição outro',
    data: ['nome 1', 'nome 2', 'nome 3'],
    valiation: 8
  };


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (data: any) => {
    console.log('Form data:', data);
    setIsModalOpen(false);
  };


  return (
    <div>
      <BaseComponent title="Componente base" description="Este compontente usa o compoente base 'BaseComponent'" />
      <ExtendedComponent base={b} additionalInfo="Informação adicional" tipo="música" />
      <ExtendedComponent base={other} additionalInfo="Segunda utilização" tipo="livro" />

      
      
      <Button label="Abrir modal" onClick={handleOpenModal} />
      <Modal title="Formulario de modal" isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onSubmit={handleSubmit} />
      </Modal>



    </div>



  );
};

export default App;
