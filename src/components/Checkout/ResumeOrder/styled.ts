import styled from 'styled-components'

export const ResumeOrderContainer = styled.section`
  border: 1px solid #000;

  max-width: 44.8rem;
  width: 100%;
  height: 100%;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 1.6rem;
`
