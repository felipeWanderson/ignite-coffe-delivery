import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  margin: 8rem 16rem;
`
export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  /* Brand / Yellow Dark */

  color: #c47f17;
`
export const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;
`
export const OrderInfoContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const GradientBackground = styled.div`
  background: linear-gradient(to right, #dbac2c, #8047f8);
  border-radius: 6px 36px;
`
export const OrderInfo = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin: 1px;
  gap: 32px;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;
`
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */

    /* Base/Text */

    color: #574f4d;
  }
  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */

    /* Base/Text */

    color: #574f4d;
  }
`

const BACKGROUND_COLORS = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface IntroItemIconProps {
  backgroundColor: keyof typeof BACKGROUND_COLORS
}

export const InfoIcon = styled.div<IntroItemIconProps>`
  width: 3.2rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
  border-radius: 100%;
`
export const ImageDelivey = styled.div``
