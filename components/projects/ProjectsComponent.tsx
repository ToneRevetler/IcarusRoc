'use client';

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { getProjetos } from "./services/sessaoDeProjeto";
import { Projeto } from "./types/Projeto";

import ProjectModal from "./microComponents/ProjectModal";
import ProjectCard from "./microComponents/projectCard";

export default function ProjectsComponent() {
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const projetos = getProjetos();

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Trabalhos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetos.map((proj) => (
          <ProjectCard
            key={proj.id}
            projeto={proj}
            onClick={() => setProjetoAberto(proj)}
          />
        ))}
      </div>

      <AnimatePresence>
        {projetoAberto && (
          <ProjectModal
            projeto={projetoAberto}
            onClose={() => setProjetoAberto(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
