import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import Input from "../Input";

interface FoodData {
  id: number;
  name: string;
  description: string;
  available: boolean;
  price: string;
  image: string;
}

type EditingFoodData = Omit<FoodData, "id" | "available">;

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodData) => void;
  isOpen: boolean;
  editingFood: EditingFoodData;
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const { setIsOpen, handleUpdateFood, isOpen, editingFood } = props;
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FoodData) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
