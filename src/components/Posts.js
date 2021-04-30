import PostTopo from "./PostTopo";
import PostConteudo from "./PostConteudo";
import PostFundo from "./PostFundo";

export default function Posts() {
  const arrayPosts = [
    {
      PostTopoImg: "assets/img/meowed.svg",
      PostTopoUsuario: "meowed",
      PostConteudo: "assets/img/gato-telefone.svg",
      PostFundoImg: "assets/img/respondeai.svg",
      PostFundoUsuario: "respondeai",
      PostFundoCurtidas: "101.523",
    },
    {
      PostTopoImg: "assets/img/barked.svg",
      PostTopoUsuario: "barked",
      PostConteudo: "assets/img/dog.svg",
      PostFundoImg: "assets/img/adorable_animals.svg",
      PostFundoUsuario: "adorable_animals",
      PostFundoCurtidas: "99.159",
    },
  ];

  return (
    <div class="posts">
      {arrayPosts.map((objeto) => (
        <div class="post">
          <PostTopo img={objeto.PostTopoImg} usuario={objeto.PostTopoUsuario} />
          <PostConteudo img={objeto.PostConteudo} />
          <PostFundo
            img={objeto.PostFundoImg}
            usuario={objeto.PostFundoUsuario}
            curtidas={objeto.PostFundoCurtidas}
          />
        </div>
      ))}
    </div>
  );
}
