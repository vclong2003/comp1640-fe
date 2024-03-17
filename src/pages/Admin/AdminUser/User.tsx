import React, { useEffect, useState } from "react";
import { AdminLayout } from "../AdminLayout/AdminLayout";
import {
  Headline,
  ListAllFaculty,
  ModalContainer,
  ModalContent,
  SaveAndClose,
  SearchAndSort,
} from "../AdminFaculty/Faculty.styled";
import axios from "axios";
import {
  EvenRow,
  OddRow,
  TableComponent,
  Td,
  Th,
} from "../../../components/AdminComponents/table/Table.styled";
import { MediumButton } from "../../../components/AdminComponents/Button/MediumButton/MediumButton.styled";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LargeButton } from "../../../components/AdminComponents/Button/LargeButton/LargeButton.styled";
import Dropdown from "../../../components/AdminComponents/Dropdown/Dropdown";
interface Faculty {
  _id: string;
  name: string;
  mc: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

interface MC {
  name: string;
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

const AdminFaculty = () => {
  const [showModal, setShowModal] = useState(false);
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.alhkq.live/user/all?role=student",
        );
        setFaculties(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [mcs, setMcs] = useState<MC[]>([]);

  useEffect(() => {
    const fetchMCs = async () => {
      try {
        const response = await axios.get<MC[]>(
          "https://api.alhkq.live/user/all?role=mc",
        );
        setMcs(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchMCs();
  }, []);

  return (
    <AdminLayout>
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
            <Dropdown options={mcs.map((mc) => mc.name)} />
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
            {faculties.map((faculty, index) =>
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
            )}
          </tbody>
        </TableComponent>
      </ListAllFaculty>
    </AdminLayout>
  );
};

export default AdminFaculty;
