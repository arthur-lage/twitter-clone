import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-areas: "LeftSidebar Feed RightSidebar";
    grid-template-columns: 23vw auto 33vw;

    min-height: 100vh;

    background: #000;
`