import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 9.4rem 16rem;

  background: url('/src/assets/images/background-intro.svg') no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  max-width: 58.8rem;
  width: 100%;
`
export const IntroContentTitles = styled.div`
  h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 4.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
    word-break: break-word;
    margin-bottom: 1.6rem;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
    word-break: break-word;
    font-stretch: 100;
  }
`
export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 47.6rem;
    height: 36rem;
  }
`

export const IntroItemsContainer = styled.div`
  max-width: 56.7rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 29.4rem);

  gap: 2rem 0;
`
export const IntroItem = styled.div`
  min-width: 23.1rem;
  max-width: 29.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    flex: 1;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
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
  width: 3.2rem;
  height: 3.2rem;

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
