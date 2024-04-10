import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const EditContribution = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: var(--s-2);
`;

export const Title = styled.div`
font-size: var(--fs-2xl);
font-weight: var(--fw-semibold);
@media ${DEVICES.DESKTOP} {
    font-size: var(--fs-3xl);
}
`;

export const Content = styled.div`
font-size: var(--fs-lg);
`;