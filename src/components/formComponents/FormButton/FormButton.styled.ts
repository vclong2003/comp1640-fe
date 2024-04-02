import styled from "styled-components";

export const Button = styled.button`
  margin: var(--s-5) 0;
  padding: var(--s-2);
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  background-color: var(--yellow);
  border-radius: var(--br-md);
  color: var(--white);
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
`;
