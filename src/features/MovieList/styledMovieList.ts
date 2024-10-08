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
    padding: 80px;
`;

export const Title = styled.h1`
    font-size: 128px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: 300;
    margin: 0;
    text-align: center;
`;

export const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
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

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
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

export const InputWrapper = styled.section`
    width: 400px;
    background: ${({ theme }) => theme.color.mainColor};
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: 20px;
    max-width: 800px;
    width: 100%;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 100%;
    }
`;

export const Input = styled.input`
    border-radius: 20px;
    color: ${({ theme }) => theme.color.inputColor};
    border: none;
    outline: none;
    width: 100%;
    background: ${({ theme }) => theme.color.mainColor};
`;

export const Image = styled.img`
    margin: 12px;
`;

export const Select = styled.select`
    border-radius: 20px;
    padding: 10px 20px;
    background: ${({ theme }) => theme.color.mainColor};
    color: ${({ theme }) => theme.color.inputColor};
    outline: none;
    cursor: pointer;
`;


