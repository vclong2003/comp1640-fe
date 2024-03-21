import { useEffect, useState } from "react";
import {
  Headline,
  ListAllFaculty,
  ModalContainer,
  ModalContent,
  SaveAndClose,
  SearchAndSort,
} from "./Faculty.styled";
import axios from "axios";
import {
  EvenRow,
  OddRow,
  TableComponent,
  Td,
  Th,
} from "../../../components/ManagementComponent/Table/Table.styled";
import { MediumButton } from "../../../components/ManagementComponent/Button/MediumButton/MediumButton.styled";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LargeButton } from "../../../components/ManagementComponent/Button/LargeButton/LargeButton.styled";
import Dropdown from "../../../components/ManagementComponent/Dropdown/Dropdown";
import AuthorizedPage from "../../../components/Authorized/AuthorizedPage";
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

const Faculty = () => {
  const [showModal, setShowModal] = useState(false);
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.alhkq.live/faculty/all");
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
    <AuthorizedPage>
      <Headline>Faculty</Headline>
      <SearchAndSort>
        <input type="text" placeholder="Search" />
        <button>Sort</button>
      </SearchAndSort>
      <ListAllFaculty>
        <h3>List All Faculty</h3>
        <LargeButton color="#71984A" onClick={() => setShowModal(true)}>
          New falcuty
        </LargeButton>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2> Add new Faculty</h2>
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
    </AuthorizedPage>
  );
};

export default Faculty;
