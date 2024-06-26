import styled from "styled-components";

export const AvatarImage = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarUpdateIcon = styled.img`
  display: none;
  width: 30%;
  height: auto;
  position: absolute;
`;

interface IAvatarProps {
  $isUpdatable?: boolean;
}

export const Avatar = styled.div<IAvatarProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $isUpdatable }) =>
    $isUpdatable &&
    `
  &:hover {
    cursor: pointer;
    ${AvatarUpdateIcon} {
      display: block;
    }
    ${AvatarImage} {
      filter: brightness(0.5);
    }
  }`}
`;
