import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 4rem 16rem;

  display: flex;
  justify-content: space-between;

  gap: 3.2rem;
`

export const InfoOrderContainer = styled.section`
  max-width: 64rem;
  width: 100%;
  height: 100%;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  gap: 3.2rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
`
export const AddressHeader = styled.div`
  width: 100;
  display: flex;
  align-items: flex-start;

  gap: 0.8rem;
`
export const Icon = styled.div`
  svg {
    line {
      stroke: ${(props) => props.theme['yellow-700']};
    }
    circle {
      stroke: ${(props) => props.theme['yellow-700']};
    }
    path {
      stroke: ${(props) => props.theme['yellow-700']};
    }
  }
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
export const ResumeOrder = styled.section`
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
