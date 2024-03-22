import { useState } from "react";
import {
  Headline,
  ListAllFaculty,
  ModalContainer,
  ModalContent,
  SaveAndClose,
  SearchAndSort,
} from "../Faculty/Faculty.styled";
import {
  TableComponent,
  Th,
} from "../../../components/ManagementComponent/Table/Table.styled";

import { LargeButton } from "../../../components/ManagementComponent/Button/LargeButton/LargeButton.styled";
import Dropdown from "../../../components/ManagementComponent/Dropdown/Dropdown";
import AuthorizedPage from "../../../components/Authorized/AuthorizedPage";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <SaveAndClose>
          <LargeButton onClick={onClose}>Close</LargeButton>
          <LargeButton color="#71984A">Add</LargeButton>
        </SaveAndClose>
      </ModalContent>
    </ModalContainer>
  );
};

const User = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthorizedPage>
      <Headline>Users</Headline>
      <SearchAndSort>
        <input type="text" placeholder="Search" />
        <button>Sort</button>
      </SearchAndSort>
      <ListAllFaculty>
        <h3>List All User</h3>
        <LargeButton color="#71984A" onClick={() => setShowModal(true)}>
          New User
        </LargeButton>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2> Add new User</h2>
            <p>Name Faculty</p>
            <input type="text" placeholder="Information technology" required />
            <p>Choose MC</p>
            <Dropdown options={[]} />
          </Modal>
        )}
        <TableComponent>
          <thead>
            <tr>
              <Th>Faculty Name</Th>
              <Th>MC Name</Th>
              <Th>MC Email</Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {/* {.map(
            (faculty, index) =>
              index % 2 === 0 ? (
                <EvenRow key={index}>
                  <Td>{faculty.name}</Td>
                  <Td>{faculty.mc ? faculty.mc.name : "N/A"}</Td>
                  <Td>{faculty.mc ? faculty.mc.email : "N/A"}</Td>
                  <Td>
                    <MediumButton color="#F2BA1D">
                      <FaEdit /> Edit
                    </MediumButton>
                  </Td>
                  <Td>
                    <MediumButton color="#FF0000">
                      <MdDelete /> Delete
                    </MediumButton>
                  </Td>
                </EvenRow>
              ) : (
                <OddRow key={index}>
                  <Td>{faculty.name}</Td>
                  <Td>{faculty.mc ? faculty.mc.name : "N/A"}</Td>
                  <Td>{faculty.mc ? faculty.mc.email : "N/A"}</Td>
                  <Td>
                    <MediumButton color="#F2BA1D">
                      <FaEdit /> Edit
                    </MediumButton>
                  </Td>
                  <Td>
                    <MediumButton color="#FF0000">
                      <MdDelete /> Delete
                    </MediumButton>
                  </Td>
                </OddRow>
              ),
          )} */}
          </tbody>
        </TableComponent>
      </ListAllFaculty>
    </AuthorizedPage>
  );
};

export default User;
