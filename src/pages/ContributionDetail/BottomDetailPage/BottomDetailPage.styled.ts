import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const Container = styled.div`
gap: var(--s-2);
display: flex;
`;

export const BtnPublish = styled(FormButton)`
padding: var(--s-2) var(--s-5);
font-size: var(--fs-md);    
`;