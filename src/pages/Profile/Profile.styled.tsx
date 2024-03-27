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
  background-color: var(--ice-blue);
  padding: var(--s-10) 0;
  border-radius: var(--br-md);
  margin-bottom: var(--s-8);
`;

export const FormContainer = styled.div`
  flex: 6;
`;

export const AvatarContainer = styled.div`
  flex: 6;
`;
