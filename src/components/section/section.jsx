import styled from 'styled-components';

const SectionContainer = styled.section`
    max-width: 500px;
    padding: 50px;
`;

export const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <h1>{title}</h1>
            {children}
        </SectionContainer>
    )
}