import styled from 'styled-components'

export const InfoOrderContainer = styled.section`
  max-width: 64rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 1.6rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  gap: 3.2rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
`
export const Header = styled.div`
  width: 100;
  display: flex;
  align-items: flex-start;

  gap: 0.8rem;
`
export const Icon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`

export const InfoText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`
export const InfoTitle = styled(InfoText)`
  font-size: 1.6rem;
`
export const InfoSubTitle = styled(InfoText)`
  font-size: 1.4rem;
`
