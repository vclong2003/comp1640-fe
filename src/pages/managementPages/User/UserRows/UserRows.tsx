import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IUser } from "@interfaces/user.interfaces";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { enableUser, disableUser } from "@store/user";
import { notifySuccess } from "@utils/notification.utils";
import { AppDispatch } from "@store/index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
interface UserRowProps {
  user: IUser;
}

const UserRow: React.FC<UserRowProps> = ({ user }: UserRowProps) => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleToggleUserStatus = () => {
    if (user.disabled) {
      dispatch(
        enableUser({
          id: user._id,
          disabled: false,
        }),
      )
        .unwrap()
        .then(() => notifySuccess("You enabled the user successfully"));
    } else {
      dispatch(
        disableUser({
          id: user._id,
          disabled: true,
        }),
      )
        .unwrap()
        .then(() => notifySuccess("You disabled the user successfully"));
    }
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left">{user?.name}</TableCell>
        <TableCell align="left">{user?.email}</TableCell>
        <TableCell align="left">{user?.faculty?.name}</TableCell>
        <TableCell align="left">{user?.role}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<VisibilityIcon />}
            sx={{ mr: 4 }}
            onClick={() => navigate(`${user._id}`)}
          >
            View
          </Button>

          <Button
            variant="outlined"
            size="small"
            color={user.disabled ? "success" : "error"}
            startIcon={user.disabled ? <CheckCircleIcon /> : <DeleteIcon />}
            onClick={handleToggleUserStatus}
          >
            {user.disabled ? "Enable" : "Disable"}
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserRow;
