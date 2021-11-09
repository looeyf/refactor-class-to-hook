import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { FormHandles } from "@unform/core";
import Input from "../Input";

interface FoodData {
  id: number;
  name: string;
  description: string;
  available: boolean;
  price: string;
  image: string;
}

interface ModalAddFoodProps {
  setIsOpen: () => void;
  handleAddFood: (food: FoodData) => void;
  isOpen: boolean;
}

export function ModalAddFood(props: ModalAddFoodProps) {
  const { setIsOpen, handleAddFood, isOpen } = props;
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FoodData) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

// class ModalAddFood extends Component {
//   constructor(props) {
//     super(props);

//     this.formRef = createRef();
//   }

//   handleSubmit = async (data) => {
//     const { setIsOpen, handleAddFood } = this.props;

//     handleAddFood(data);
//     setIsOpen();
//   };

//   render() {
//     const { isOpen, setIsOpen } = this.props;

//     return (

//     );
//   }
// }

// export default ModalAddFood;
