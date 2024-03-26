import styled from "styled-components";

export const Profile = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: var(--fs-3xl);
  font-weight: bold;
`;

export const FormContainer = styled.div`
  flex: 8;
`;

export const AvatarContainer = styled.div`
  flex: 4;
`;
