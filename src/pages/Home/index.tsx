import banner from '../../assets/images/banner.svg'
import { Intro } from './styles'
export function Home() {
  return (
    <>
      <Intro>
        <img src={banner} alt="" />
      </Intro>
    </>
  )
}
