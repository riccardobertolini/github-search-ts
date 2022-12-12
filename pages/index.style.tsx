import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;500;700&display=swap');
`;

export const ContainerWrapper = styled.div`
    padding: 20px;
    font-family: 'Karla', sans-serif;
`;