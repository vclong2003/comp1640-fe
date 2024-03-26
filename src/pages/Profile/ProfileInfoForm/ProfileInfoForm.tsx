import * as S from "./ProfileInfoForm.styled";
import { Formik } from "formik";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { EGender } from "../../../interfaces/user.interfaces";

export default function ProfileInfoForm() {
  return (
    <Formik>
      <Form>
        <S.HorizontalFormGroup>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <FormInput type="text" name="phone" />
          </FormGroup>
        </S.HorizontalFormGroup>
        <S.HorizontalFormGroup>
          <FormGroup>
            <FormLabel>DOB</FormLabel>
            <FormInput type="date" name="dob" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Gender</FormLabel>
            <FormInput component="select" name="gender">
              {Object.values(EGender).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </FormInput>
          </FormGroup>
        </S.HorizontalFormGroup>
      </Form>
    </Formik>
  );
}
