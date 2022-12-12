import styled from 'styled-components';

export const external = styled.div`
    display: block;
`;

export const RepoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px 20px;
`;

export const RepoElement = styled.div`
    width: 100%;
    margin: 0 20px 20px 0;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eee;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: calc(50% - 90px);
    }

    a, a:visited {
        color: black;
        font-size: 20px;
        text-decoration: underline;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    div {
        flex: 1;
    }
`;