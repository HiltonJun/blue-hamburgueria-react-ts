import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";

const Home = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Burguer Fresh</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Procure pelo sabor" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            <Styled.CategoriesNavigationButton active>
              Lanches
            </Styled.CategoriesNavigationButton>
            <Styled.CategoriesNavigationButton>
              Porções
            </Styled.CategoriesNavigationButton>
            <Styled.CategoriesNavigationButton>
              Bebidas
            </Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha seu lanche</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Selecione a mesa
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <div className="list">
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
          </div>
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <h2>Pedido 12</h2> {/* Dado mockado, número do pedido */}
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
        <div>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
          <div className="checkout-cards-container">
            <div>Card checkout</div> {/* Dado mockado */}
            <div>Card checkout</div> {/* Dado mockado */}
            <div>Card checkout</div> {/* Dado mockado */}
          </div>
        </div>
        <div>
          <div>
            <p>Desconto</p>
            <p>R$0.00</p>
          </div>
          <div>
            <p>Sub total</p>
            <p>R$0.00</p>
          </div>
          <button>Continuar para o pagamento</button>
        </div>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;