import * as S from "./ProfileInfoForm.styled";
import { Formik } from "formik";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { EGender, IUpdateUserPayload } from "@interfaces/user.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { toIsoDate } from "@utils/date.utils";
import { notifySuccess } from "@utils/notification.utils";
import { UpdateUservalidationSchema } from "@utils/user.utils";
import { updateUser } from "@store/user";
import { useState } from "react";

export default function ProfileInfoForm() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const initialValues: IUpdateUserPayload = {
    name: user?.name,
    phone: user?.phone,
    dob: user?.dob && toIsoDate(user.dob),
    gender: user?.gender,
  };

  const onUpdateProfile = (values: IUpdateUserPayload) => {
    setLoading(true);
    dispatch(updateUser(values))
      .unwrap()
      .then(() => notifySuccess("Profile updated successfully"))
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onUpdateProfile}
      validationSchema={UpdateUservalidationSchema}
    >
      <Form>
        <S.FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            disabled={true}
            type="text"
            name="email"
            value={user?.email}
          />
        </S.FormGroup>
        <S.HorizontalFormGroup>
          <S.FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" />
            <FormError name="name" />
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
          <S.SaveButton type="submit" disabled={loading}>
            {loading ? "Loading..." : "Save"}
          </S.SaveButton>
          <S.CancelButton type="reset">Cancel</S.CancelButton>
        </S.ButtonGroup>
      </Form>
    </Formik>
  );
}
