import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Profile = styled.div`
  min-height: 100vh;
  padding-top: var(--s-4);
  padding-bottom: var(--s-8);
  display: flex;
  flex-direction: column;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-top: var(--s-4);
    padding-bottom: var(--s-8);
  }
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

export const InfoContainer = styled.div`
  flex: 7;
  @media ${DEVICES.DESKTOP} {
    margin-right: var(--s-5);
  }
`;
export const AvatarContainer = styled.div`
  width: 96px;
  height: 96px;
  margin: var(--s-1) auto;
`;

export const SecurityContainer = styled.div`
  flex: 5;
  display: flex;
  font-display: row;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
`;

export const SecurityTitle = styled.div`
  width: 100%;
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
  display: flex;
  align-items: center;
  margin-top: var(--s-7);
  gap: var(--s-2);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
    font-weight: var(--fw-semibold);
    display: flex;
    align-items: center;
    gap: var(--s-2);
  }
`;

export const LogoutFromAllDevicesBtn = styled(FormButton)`
  font-weight: var(--fw-medium);
  padding: var(--s-2) var(--s-1);
  background-color: var(--light-gray-2);
  margin-left: var(--s-1);

  @media ${DEVICES.DESKTOP} {
    font-weight: var(--fw-medium);
    padding: var(--s-2) var(--s-4);
    margin-left: var(--s-2);
    background-color: var(--light-gray-2);
  }
`;
