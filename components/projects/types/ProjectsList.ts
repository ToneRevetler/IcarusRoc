import { Projeto } from "./Projeto";

export const Projetos: Projeto[] = [
  {
    id: 1,
    nome: "Projeto 1",
    descricao: "Landing page para empresa XPTO",
    imagem: "/assets/humanizado.png",
    tecnologias: ["React", "TypeScript"],
    imagensAdicionais: ["/assets/humanizado.png", "/assets/humanizado.png"],
    servicos: ["Frontend", "Design", "Responsividade"],
  },
  {
    id: 2,
    nome: "Projeto 2",
    descricao: "API RESTful para sistema de pedidos",
    imagem: "/assets/humanizado.png",
    tecnologias: ["Node.js", "Express"],
    imagensAdicionais: ["/assets/Icarus_Logo_Dark.png", "/assets/Icarus_Logo_Light.png"],
    servicos: ["Backend", "Banco de Dados", "Integração de API"],
  },
];
