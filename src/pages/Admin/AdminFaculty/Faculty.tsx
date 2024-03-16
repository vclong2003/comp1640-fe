import React, { useEffect, useState } from "react";
import { AdminLayout } from "../AdminLayout/AdminLayout";
import { Headline, ListAllFaculty, SearchAndSort } from "./Faculty.styled";
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
interface Faculty {
  _id: string;
  name: string;
  mc: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

const AdminFaculty = () => {
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

  return (
    <AdminLayout>
      <Headline>Faculty</Headline>
      <SearchAndSort>
        <input type="text" placeholder="Search" />
        <button>Sort</button>
      </SearchAndSort>
      <ListAllFaculty>
        <h3>List All Faculty</h3>
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
