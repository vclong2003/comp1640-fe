import * as S from "./MiddleForm.styled";

const MiddleForm = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Name>
          <S.FirstName>
            <S.Text>First Name</S.Text>
            <input type="text" name="" id="" />
          </S.FirstName>
          <S.LastName>
            <S.Text>Last Name</S.Text>
            <input type="text" name="" id="" />
          </S.LastName>
        </S.Name>
        <S.Email>
          <S.Text>Email</S.Text>
          <input type="email" />
        </S.Email>
        <S.Address>
          <S.Text>Address</S.Text>
          <input type="text" />
        </S.Address>
        <S.ContactNumber>
          <S.Text>Contact Number</S.Text>
          <input type="number" />
        </S.ContactNumber>
        <S.Password>
          <S.Text>Password</S.Text>
          <input type="password" />
        </S.Password>
      </S.LeftContainer>
      <S.RightContainer>
        <S.Avatar>
          <S.Image>
            <S.ImgAva
              src="https://placehold.co/800x450"
              alt="placeholder"
            ></S.ImgAva>
          </S.Image>
          <S.ChangeAva>
            <S.BtnChangeAva>Change Avatar</S.BtnChangeAva>
          </S.ChangeAva>
        </S.Avatar>
        <S.Gender>
          <S.Text>Gender</S.Text>
          <S.GenderType>
            <input type="checkbox" /> Male
          </S.GenderType>
          <S.GenderType>
            <input type="checkbox" /> Femal
          </S.GenderType>
          <S.GenderType>
            <input type="checkbox" /> Other
          </S.GenderType>
        </S.Gender>
        <S.Birthday>
          <S.Text>Birthday</S.Text>
          <S.Date>
            <input type="date" />
          </S.Date>
        </S.Birthday>
      </S.RightContainer>
    </S.Container>
  );
};

export default MiddleForm;
