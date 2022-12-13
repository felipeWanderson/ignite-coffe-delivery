import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 3.2rem 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  width: 8.5rem;
  width: 4rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;
    position: relative;

    background: ${(props) => props.theme['yellow-300']};
    border-radius: 6px;

    transition: background 0.2s;

    svg {
      fill: ${(props) => props.theme['yellow-700']};
    }

    &:hover {
      background: ${(props) => props.theme['yellow-500']};

      svg {
        fill: ${(props) => props.theme['yellow-300']};
      }
    }
  }
`
export const GeoLocalizationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  background: ${(props) => props.theme['purple-300']};
  border-radius: 6px;

  border: none;

  transition: background 0.2s;

  cursor: pointer;

  svg {
    fill: ${(props) => props.theme['purple-700']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${(props) => props.theme['purple-700']};
  }

  &:hover {
    background: ${(props) => props.theme['purple-700']};

    span {
      color: ${(props) => props.theme['purple-300']};
    }
    svg {
      fill: ${(props) => props.theme['purple-300']};
    }
  }
`
export const Notification = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-700']};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  color: ${(props) => props.theme.white};
`
