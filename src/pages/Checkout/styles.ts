import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 4rem 16rem;

  display: flex;
  justify-content: space-between;

  gap: 32px;
`

export const InfoOrderContainer = styled.section`
  max-width: 640px;
  width: 100%;
  height: 100%;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
`
export const AddressHeader = styled.div`
  width: 100;
  display: flex;
  align-items: flex-start;

  gap: 8px;
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
  gap: 2px;
`

export const InfoText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`
export const InfoTitle = styled(InfoText)`
  font-size: 16px;
`
export const InfoSubTitle = styled(InfoText)`
  font-size: 14px;
`
export const ResumeOrder = styled.section`
  border: 1px solid #000;

  max-width: 448px;
  width: 100%;
  height: 100%;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;

  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 16px;
`

export const FormAddress = styled.form``
