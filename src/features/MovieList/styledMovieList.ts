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
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: 300;
`;

export const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 20px;
`;

export const MovieTile = styled.div`
    text-decoration: none;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    padding: 16px;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: rgba(186, 199, 213, 0.5) 0px 0px 12px;
`;

export const CardImage = styled.img`
    width: 100%;
    max-height: 443px;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        max-width: 132px;
        height: 180px;
        margin-bottom: 0;
    };
`;

export const MovieTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontPrimary};
    text-align: center;
    font-size: 20px;
    margin: 0;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        font-size: 16px;
    };
`;

export const Informations = styled.div`
    display: grid;
    gap: 16px;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        gap: 12px;
        width: 100%;
    };
`;

