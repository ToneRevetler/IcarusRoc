export type Projeto = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  imagensAdicionais?: string[];
  servicos?: string[];
};
