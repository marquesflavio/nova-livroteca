import Logo from "../../assets/logo-svg";
import { Cabecalho, SearchInput } from "./styles";

export function Header() {
  return (
    <Cabecalho>
      <nav>
        <div className="logo">
          <Logo />
          <h2>Livroteca</h2>
        </div>
        <SearchInput type="text" placeholder="search"/>
      </nav>
    </Cabecalho>
  );
}
