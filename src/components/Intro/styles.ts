import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 9.4rem 16rem;

  background: url('/src/assets/images/background-intro.svg') no-repeat;
  background-size: cover;

  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`
export const IntroContentTitles = styled.div`
  h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
    word-break: break-word;
    margin-bottom: 16px;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 130%;
    word-break: break-word;
  }
`
export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 476px;
    height: 360px;
  }
`

export const IntroItemsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const IntroItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  span {
    flex-grow: 1;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
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

export const IntroItemIcon = styled.div<IntroItemIconProps>`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
  border-radius: 100%;

  svg {
    fill: ${(props) => props.theme.white};
  }
`
