import * as S from "./ChangePwdForm.styled";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { Formik } from "formik";
import { IChangePasswordPayload } from "@interfaces/user.interfaces";
import userService from "@service/api/user";
import { notifyError, notifySuccess } from "@utils/notification.utils";

const initialValues: IChangePasswordPayload = {
  oldPassword: "",
  newPassword: "",
};

interface IChangePwdFormProps {
  onDone: () => void;
  onCancel: () => void;
}
export default function ChangePwdForm({
  onCancel,
  onDone,
}: IChangePwdFormProps) {
  const onSubmit = (values: IChangePasswordPayload) => {
    userService
      .changePassword(values)
      .then(() => notifySuccess("Password changed successfully"))
      .then(() => onDone())
      .catch((error) => notifyError(error));
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      onReset={onCancel}
    >
      <Form>
        <FormGroup>
          <FormLabel>Old Password</FormLabel>
          <FormInput type="password" name="oldPassword" />
        </FormGroup>
        <FormGroup>
          <FormLabel>New Password</FormLabel>
          <FormInput type="password" name="newPassword" />
        </FormGroup>
        <S.SaveButton type="submit">Change Password</S.SaveButton>
        <S.CancelButton type="reset" onClick={onCancel}>
          Cancel
        </S.CancelButton>
      </Form>
    </Formik>
  );
}
