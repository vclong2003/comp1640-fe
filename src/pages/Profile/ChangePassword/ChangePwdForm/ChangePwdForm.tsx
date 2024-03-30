import * as S from "./ChangePwdForm.styled";
import {
  Form,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { Formik } from "formik";
import { IChangePasswordPayload } from "@interfaces/user.interfaces";
import userService from "@service/api/user";
import { notifySuccess } from "@utils/notification.utils";
import { ChangePasswordValidationSchema } from "@utils/auth.utils";

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
      .then(() => onDone());
  };

  return (
    <Formik
      onSubmit={onSubmit}
      onReset={onCancel}
      initialValues={initialValues}
      validationSchema={ChangePasswordValidationSchema}
    >
      <Form>
        <FormGroup>
          <FormLabel>Old Password</FormLabel>
          <FormInput type="password" name="oldPassword" />
          <FormError name="oldPassword" />
        </FormGroup>
        <FormGroup>
          <FormLabel>New Password</FormLabel>
          <FormInput type="password" name="newPassword" />
          <FormError name="newPassword" />
        </FormGroup>
        <S.BtnConatiner>
          <S.SaveButton type="submit">Save</S.SaveButton>
          <S.CancelButton type="reset" onClick={onCancel}>
            Cancel
          </S.CancelButton>
        </S.BtnConatiner>
      </Form>
    </Formik>
  );
}
