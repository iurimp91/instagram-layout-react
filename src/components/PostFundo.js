import PostAcoes from "./PostAcoes";
import PostCurtidas from "./PostCurtidas";

export default function PostFundo(props) {
  return (
    <div class="fundo">
      <PostAcoes />
      <PostCurtidas
        img={props.img}
        usuario={props.usuario}
        curtidas={props.curtidas}
      />
    </div>
  );
}
