import * as S from "./LeftContainer.styled";

const LeftContainer = () => {
  return (
    <S.Container>
      <S.Title>Filter </S.Title>
      <S.StatusFilter>
        <S.TitleStatus>Status</S.TitleStatus>
        <S.CheckBoxStatus>
          <S.ItemCheckbox>
            <input type="checkbox" /> Submit
          </S.ItemCheckbox>
          <S.ItemCheckbox>
            <input type="checkbox" /> Not yet submitted
          </S.ItemCheckbox>
          <S.ItemCheckbox>
            <input type="checkbox" /> Out of date
          </S.ItemCheckbox>
        </S.CheckBoxStatus>
      </S.StatusFilter>
      <S.DateFilter>
        <S.TitleDate>Date</S.TitleDate>
        <S.DateTime>
          <S.StartDate>
            <input type="date" />
          </S.StartDate>
          <S.EndDate>
            <input type="date" />
          </S.EndDate>
        </S.DateTime>
        <S.BtnDate>Apply</S.BtnDate>
      </S.DateFilter>
      <S.BottomFilter>
        <S.BtnOldest>From Newest To Oldest</S.BtnOldest>
        <S.Text>From Oldest To Newest</S.Text>
      </S.BottomFilter>
    </S.Container>
  );
};

export default LeftContainer;
