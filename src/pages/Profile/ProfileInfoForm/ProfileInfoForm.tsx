import * as S from "./ProfileInfoForm.styled";
import { Formik } from "formik";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender } from "../../../interfaces/user.interfaces";

export default function ProfileInfoForm() {
  return (
    <Formik>
      <Form>
        <S.FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput disabled={true} type="text" name="name" />
        </S.FormGroup>
        <S.HorizontalFormGroup>
          <S.FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" />
          </S.FormGroup>
          <S.FormGroup>
            <FormLabel>Phone</FormLabel>
            <FormInput type="text" name="phone" />
          </S.FormGroup>
        </S.HorizontalFormGroup>
        <S.HorizontalFormGroup>
          <S.FormGroup>
            <FormLabel>DOB</FormLabel>
            <FormInput type="date" name="dob" />
          </S.FormGroup>
          <S.FormGroup>
            <FormLabel>Gender</FormLabel>
            <FormInput component="select" name="gender">
              {Object.values(EGender).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </FormInput>
          </S.FormGroup>
        </S.HorizontalFormGroup>
        <S.ButtonGroup>
          <S.SaveButton>Save</S.SaveButton>
          <S.CancelButton>Cancel</S.CancelButton>
        </S.ButtonGroup>
      </Form>
    </Formik>
  );
}
