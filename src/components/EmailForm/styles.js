import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 30px 10px;
    height: 50px;
    box-sizing: border-box;
    outline: none;

    &:focus {
        border: 1px solid dodgerblue; 
    }

    @media (max-width: 740px) {
        padding: 10px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: #fff;
    text-transform: uppercase;
    padding: 0 32px;
    margin-bottom: 20px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover {
        background: #f40612
    }

    @media (max-width: 1000px) {
        height: 50px;
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold; 
    }

    @media  (max-width: 740px) {
        height: 40px;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }
`

export const Text = styled.p`
    font-size: 19.2;
    color: #fff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`