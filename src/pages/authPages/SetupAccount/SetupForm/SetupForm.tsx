import * as S from "./SetupForm.styled";

const SetupForm = () => {
  return (
    <S.Container>
      <S.Title>Setup Your Account</S.Title>
      <S.Description>
        <a href="">Already have an account?</a>
      </S.Description>
      <S.Center>
        <S.CenterLeft>
          <S.Input placeholder="First Name *"></S.Input>

          <S.Input placeholder="Faculty *"></S.Input>
          <S.Input4>
            <input type="checkbox" />
            Male
            <input type="checkbox" />
            Female
            <input type="checkbox" />
            Other
          </S.Input4>
          <S.Input5>
            <input type="password" placeholder="Password *" />
          </S.Input5>
        </S.CenterLeft>
        <S.CenterRight>
          <S.Input placeholder="Last Name *"></S.Input>

          <S.Input placeholder="Phone Number *"></S.Input>
          <S.Input4>
            <input type="date" />
          </S.Input4>
          <S.Input5>
            <input type="password" placeholder="Confirm Password *" />
          </S.Input5>
        </S.CenterRight>
      </S.Center>
      <S.CheckTerm>
        <input type="Checkbox" />I agree with term and privacy
      </S.CheckTerm>
      <S.Register>
        <S.BtnRegister>Register</S.BtnRegister>
      </S.Register>
    </S.Container>
  );
};

export default SetupForm;
