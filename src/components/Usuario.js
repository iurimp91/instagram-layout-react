export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        {props.nome}
      </div>
    </div>
  );
}
