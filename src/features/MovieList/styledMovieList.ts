import styled from "styled-components";
import bg from '../../common/Images/moviesListBg.jpg';

export const Wrapper = styled.main`
    padding: 20px;
`;

export const Header = styled.header`
    background-image: url(${bg});
    min-height: 400px;
    background-size: cover;
    background-position: center;
    box-shadow: rgb(0, 0, 0) 0px 60px 120px -15px inset, rgb(0, 0, 0) -100px 0px 120px -10px inset, rgb(0, 0, 0) 100px 0px 120px -10px inset, rgb(0, 0, 0) 0px -180px 180px -10px inset;
    padding: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 40px 20px;
        min-height: auto;
    };
`;

export const Title = styled.h1`
    font-size: 128px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: 300;
    margin: 0;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 52px;
        margin-bottom: 20px;
    };
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto; 
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin-top: 20px;
    }
`;

export const Table = styled.table`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse; 
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    border: 1px solid #333;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 12px; 
    }
`;

export const TableRow = styled.tr`

    &:hover {   
        background: #e5e5e5;
    }

    background: ${({ theme }) => theme.color.secondColor};
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.color.tableRowEven};
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.tableRowHover};
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        &:nth-child(even) {
            background-color: ${({ theme }) => theme.color.tableRowHover}; 
        }
    }
`;

export const TableHeader = styled.th`
    padding: 16px 12px;
    background-color: ${({ theme }) => theme.color.fontColor}; 
    color: white;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #333;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 10px 8px; 
    }
`;

export const TableCell = styled.td`
    border: 1px solid #333; 
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontPrimary};
    text-align: center;
    word-break: keep-all;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 8px 6px; 
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-top: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        flex-direction: column;
    }

`;

export const InputWrapper = styled.section`
    background: ${({ theme }) => theme.color.mainColor};
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: 20px;
    max-width: 800px;
    width: 100%;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
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

export const TableCellHideOnMobile = styled(TableCell)`
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        display: none;
    }
`;
