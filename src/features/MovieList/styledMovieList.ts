import styled from "styled-components";
import bg from '../../common/Images/moviesListBg.jpg';

export const Wrapper = styled.main`

`;

export const Header = styled.header`
    background-image: url(${bg});
    min-height: 400px;
    background-size: cover;
    background-position: center;
    box-shadow: rgb(0, 0, 0) 0px 60px 120px -15px inset, rgb(0, 0, 0) -100px 0px 120px -10px inset, rgb(0, 0, 0) 100px 0px 120px -10px inset, rgb(0, 0, 0) 0px -180px 180px -10px inset;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export const Title = styled.h1`
    font-size: 128px;
    color: ${({ theme }) => theme.color.fontColor};
    font-weight: 300;
`;