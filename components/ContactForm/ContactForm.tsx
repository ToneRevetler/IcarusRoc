"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/../components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    siteEmpresa: "",
    mensagem: "",
    services: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      ...formData,
      services: formData.services.join(", "),
      submittedAt: new Date().toISOString(), // útil para rastrear quando foi enviado
    }

    try {
      const response = await fetch("https://api.sheetmonkey.io/form/jUR5xcRXMtUUeC5GJu5YNY", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        alert("Formulário enviado com sucesso!")
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          siteEmpresa: "",
          mensagem: "",
          services: [],
        })
      } else {
        alert("Erro ao enviar formulário.")
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      alert("Erro de rede ao enviar o formulário.")
    }
  }


  const services = [
    "Landing Page Profissional",
    "Rework Visual de Site",
    "Loja Virtual Sob Medida",
    "Integração com Plataformas",
    "Outro",
  ]

  const additionalServices = ["Portal de Conteúdo / Blog", "Hospedagem + Domínio", "Automação com Scripts", "Performance e Responsividade"]

  return (
    <section className=" bg-black" id="contato">
      <div className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-icarus-dark-blue">
              COMO PODEMOS <span className="text-[#FFB703]">AJUDAR?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Services */}
            <div className="space-y-8">
              {/* First Service Group */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-icarus-dark-blue">Serviços base</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#FFB703]"
                        onChange={(e) => handleServiceChange(`${service}-${index}`, e.target.checked)}
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Second Service Group */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-icarus-dark-blue">Serviços adicionais</h3>
                <div className="space-y-3">
                  {additionalServices.map((service, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#FFB703]"
                        onChange={(e) => handleServiceChange(`${service}-additional-${index}`, e.target.checked)}
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome *"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-[#FFB703] bg-transparent text-gray-700 focus:outline-none focus:border-[#FFB703] placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-[#FFB703] bg-transparent  text-gray-700 focus:outline-none focus:border-[#FFB703] placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* WhatsApp and Website Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp *"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-[#FFB703] bg-transparent focus:outline-none text-gray-700 focus:border-[#FFB703] placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="siteEmpresa"
                      placeholder="Site da empresa*"
                      required
                      value={formData.siteEmpresa}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-[#FFB703] bg-transparent focus:outline-none text-gray-700 focus:border-[#FFB703] placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem *"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-[#FFB703] bg-transparent focus:outline-none text-gray-700 focus:border-[#FFB703] placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">

                  <Button variant="cta" type="submit" className="px-8 py-3 bg-[#FFB703]hover:bg-[#FFB703]">
                    Enviar
                  </Button>
                </div>

                {/* Email Alternative */}
                <p className="text-sm text-gray-600 pt-4">
                  Se preferir envie para o email{" "}
                  <a href="contato@icarusroc.com" className="text-[#FFB703] hover:underline">
                    contato@icarusroc.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
