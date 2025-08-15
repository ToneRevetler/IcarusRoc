import { useState } from "react";
import { motion } from "framer-motion";
import { Projeto } from "../types/Projeto";
import { Status, useDeployProject } from "../hooks/useDeployProject";

export default function ProjectModal({
  projeto,
  onClose,
}: {
  projeto: Projeto;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const deployProject = useDeployProject();

  const imagens = [projeto.imagem, ...(projeto.imagensAdicionais || [])];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-3xl w-full rounded-lg overflow-hidden shadow-xl relative"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 bg-black">
          <img
            src={imagens[carouselIndex]}
            alt={`Imagem ${carouselIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {imagens.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0 ? imagens.length - 1 : prev - 1
                  )
                }
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 px-3 py-1 rounded"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === imagens.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 px-3 py-1 rounded"
              >
                ›
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">{projeto.nome}</h2>
          <p className="text-gray-900 mt-2">{projeto.descricao}</p>

          {projeto.servicos && (
            <div className="mt-4">
              <h3 className="font-semibold">Serviços:</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 mt-1">
                {projeto.servicos.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <h3 className="font-semibold mb-1">Tecnologias:</h3>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => deployProject(projeto.id, setStatus)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
            disabled={status === "deploying"}
          >
            {status === "deploying" ? "Deploying..." : "Fazer Deploy"}
          </button>

          {status !== "idle" && (
            <p className="mt-2 font-medium text-sm">
              {status === "success" && "✅ Deploy aprovado"}
              {status === "error" && "❌ Deploy reprovado"}
              {status === "deploying" && "⏳ Em andamento..."}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-xl"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
}
