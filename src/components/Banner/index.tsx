import { ImageBanner, Preco, Titulo } from './style'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <ImageBanner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel Spider-man: Miles Morales PS4 & PS5</Titulo>
      <Preco>
        De <span>R$ 250,00</span> <br />
        Por apenas R$ 99,99
      </Preco>
    </div>
  </ImageBanner>
)

export default Banner
