import { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./FilterLayout.styled";

const StatusFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedItem || "Status Filter"}{" "}
        {/* Hiển thị mục đã chọn hoặc mặc định */}
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
