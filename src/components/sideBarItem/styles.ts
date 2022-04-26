import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0px;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;  

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13;
    color: #b8b8b4
`;  

export const IconArea = styled.div<{active: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#494a7c'};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Point = styled.div<{active: boolean}>`
    width: 6px;
    height: 6px;
    padding: 4px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -8px;
    background-color: ${props => props.active ? '#25cd89' : '#02044a'};
`;