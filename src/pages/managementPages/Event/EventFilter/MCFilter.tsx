import { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./FilterLayout.styled";

const MCFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedItem || "MC Filter"}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick("MC 1")}>
          MC 1
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("MC 2")}>
          MC 2
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("MC 3")}>
          MC 3
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default MCFilter;
