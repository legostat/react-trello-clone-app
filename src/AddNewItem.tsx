import { useState } from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  const handleAdd = (text: string) => {
    onAdd(text);
    setShowForm(false);
  };

  if (showForm) {
    return <NewItemForm onAdd={handleAdd} />;
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
