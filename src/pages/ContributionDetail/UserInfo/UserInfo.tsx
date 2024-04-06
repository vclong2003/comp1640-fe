import Avatar from "@components/Avatar/Avatar";
import * as S from "./UserInfo.styled";

const UserInfo = () => {
    return (
        <S.Container>
            <S.AvatarContainer>
                <Avatar />
            </S.AvatarContainer>
            <S.InfoContainer>
                <S.NameUser>Bui Thi Huong</S.NameUser>
                <S.Date>6-4-2024</S.Date>
            </S.InfoContainer>
        </S.Container>
    );
};

export default UserInfo;