export default function PostAcoes() {
  const arrayIcones = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];

  return (
    <div class="acoes">
      <div>
        {arrayIcones.map((item) => (
          <ion-icon name={item}></ion-icon>
        ))}
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}
