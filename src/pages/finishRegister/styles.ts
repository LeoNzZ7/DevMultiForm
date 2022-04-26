import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044a;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    max-width: 980px;
    height: calc(100vh - 100px);
    margin: auto;
    display: flex;
    border-top: 3px solid #16195c;
`;

export const Header = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    margin: 0px;
    padding: 0px;
`;

export const InfoArea = styled.div`
    width: 400px;
    display: flex;
    background-color; #ff0000;
    border-right: 3px solid #16195c;
    flex-direction: column;
`;

export const Info = styled.div`
    p {
        color: #ccc;
    }
`;

export const BackArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        background-color: #25cd89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;

        &:hover {
            background-color: #03ab67;
        };
    };
`;