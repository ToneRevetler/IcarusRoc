import { Projeto } from "../types/Projeto";

export default function ProjectCard({
  projeto,
  onClick,
}: {
  projeto: Projeto;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <img src={projeto.imagem} alt={projeto.nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{projeto.nome}</h1>
        <p className="text-sm text-gray-600">{projeto.descricao}</p>
        <div className="flex flex-wrap mt-2 gap-1">
          {projeto.tecnologias.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-gray-200 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
