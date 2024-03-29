import { Button, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { IFaculty } from "@interfaces/faculty.interfaces";

export interface IFacultyRowProps {
  faculty: Omit<IFaculty, "description" | "banner_image_url">;
}

export default function FacultyRow({ faculty }: IFacultyRowProps) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {faculty._id}
      </TableCell>
      <TableCell align="left">{faculty.name}</TableCell>
      <TableCell align="left">{faculty.mc?.name || "No MC"}</TableCell>
      <TableCell align="left">{faculty.mc?.email || "No MC"}</TableCell>
      <TableCell align="left">
        <Button
          variant="outlined"
          size="small"
          color="warning"
          startIcon={<EditIcon />}
          sx={{ mr: 4 }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
