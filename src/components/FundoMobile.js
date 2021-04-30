export default function FundoMobile() {
  const arrayIcones = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];

  return (
    <div class="fundo-mobile">
      {arrayIcones.map((item) => (<ion-icon name={item}></ion-icon>))}
    </div>
  );
}