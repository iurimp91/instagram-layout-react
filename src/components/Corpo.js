import Stories from "./Stories";
import Posts from "./Posts";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Rodape from "./Rodape";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <div class="sidebar">
        <Usuario img="assets/img/catanacomics.svg" usuario="catanacomics" nome="Catana" />
        <Sugestoes />
        <Rodape />
      </div>
    </div>
  );
}
