import styled from 'styled-components/macro'

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
    ${({ margin }) => margin && `margin: ${margin}`}

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -110px;
        }
    } 
`

export const Subtitle = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`


export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform .2s;

    &:hover {
        transform: scale(1.3);
        z-index: 100;
    }

    @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
            display: block;
            z-index: 101;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    height: absolute;
    margin: 0;
    padding: 0;
`

export const FeatureText = styled.p`
    margin: 0;
    display: flex;
    align-items: center;

    @media (max-width: 550px) {
        display: none;
    }
`

export const Feature = styled.div`
    display: flex;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    margin: 5px 56px;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: #000;
    overflow: hidden;

    ${Group} {
        margin-top: 48px;
    }

    @media (max-width: 1000px) {
        height: auto;
        margin: 5px 30px;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }

        ${FeatureText} {
            font-size: 14px;
        }

        ${Group} {
            align-items: center;
            margin-top: 10px;
        }
    }
`

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`

export const FeatureClose = styled.button`
    color: #fff;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const Maturity = styled.div`
    background-color: ${({ rating }) => rating >= 15 ? 'red' : 'green'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
`

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
    }
`

export const Entities = styled.div`
    display: flex;
`