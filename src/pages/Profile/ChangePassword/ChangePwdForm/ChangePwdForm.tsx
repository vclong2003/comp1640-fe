import { Form, FormGroup, FormLabel } from "@components/formComponents";
import { Formik } from "formik";

export default function ChangePwdForm() {
  return (
    <Formik>
      <Form>
        <FormGroup>
          <FormLabel>Old Password</FormLabel>
        </FormGroup>
      </Form>
    </Formik>
  );
}
