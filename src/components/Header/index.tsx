import { HeaderBar, LinkCart, LinkItem, Links } from './style'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <>
    <HeaderBar>
      <div>
        <img src={logo} alt="Eplay" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#">Categorias</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoçoes</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart>
        0 - Produtos
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </HeaderBar>
  </>
)

export default Header
