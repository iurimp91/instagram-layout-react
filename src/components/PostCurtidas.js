export default function PostCurtidas(props) {
  return (
    <div class="curtidas">
      <img src={props.img} />
      <div class="texto">
        Curtido por <strong>{props.usuario}</strong> e{" "}
        <strong>outras {props.curtidas} pessoas</strong>
      </div>
    </div>
  );
}
