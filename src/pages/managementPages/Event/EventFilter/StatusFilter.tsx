import { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./FilterLayout.styled";

const StatusFilter = () => {
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
        {selectedItem || "Status Filter"}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick("Open")}>
          Open
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Close")}>
          Close
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Not be Commented")}>
          Not be Commented
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default StatusFilter;
