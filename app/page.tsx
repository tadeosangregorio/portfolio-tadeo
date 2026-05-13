"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function PortfolioPage() {
  const [openContact, setOpenContact] =
    useState(false);

  const [openMailProject, setOpenMailProject] =
    useState(false);

  const [
    openDashboardProject,
    setOpenDashboardProject,
  ] = useState(false);

  const [openWebProject, setOpenWebProject] =
    useState(false);

  const [openExperience, setOpenExperience] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const skills = [
    "Power BI",
    "Looker Studio",
    "Google Apps Script",
    "SQL",
    "Dashboards",
    "KPIs",
    "React",
    "Next.js",
    "Framer",
    "TailwindCSS",
  ];

  const timeline = [
    {
      year: "Actualidad",
      title:
        "Data Analyst | Analista de Datos - GCBA",
      description:
        "Dashboards, KPIs, reporting y automatización de procesos.",
    },

    {
      year: "Nov 2025 - Feb 2026",
      title:
        "BI Analyst – Samsung / Cheil",
      description:
        "Dashboards en Power BI y Looker Studio para campañas y métricas digitales.",
    },

    {
      year: "Jun 2025 - Ago 2025",
      title:
        "BI Analyst - Molinos Tarquini",
      description:
        "KPIs comerciales, automatización de reportes y análisis de stock.",
    },
  ];

  const proyectos = [
    {
      titulo:
        "Sistema Automatizado de Nuevos Ingresos",

      descripcion:
        "Workflow automatizado mediante Google Workspace y Apps Script.",

      tecnologias: [
        "Apps Script",
        "Google Forms",
        "Gmail API",
      ],

      imagen: "/mail_pixelado.png",

      tipo: "mail",
    },

    {
      titulo:
        "Dashboards & Analytics",

      descripcion:
        "Dashboards estratégicos para seguimiento operativo y KPIs.",

      tecnologias: [
        "Power BI",
        "Looker Studio",
        "Analytics",
      ],

      imagen:
        "/consulta administracion.png",

      tipo: "dashboard",
    },

    {
      titulo: "Desarrollo Web",

      descripcion:
        "Landing pages, plataformas operativas y portfolios interactivos.",

      tecnologias: [
        "React",
        "Next.js",
        "Framer",
      ],

      imagen: "/paguso.png",

      tipo: "web",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#050816] text-white"
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* FONT */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0b1020]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3b82f6]/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[0.4em] text-[#3b82f6] text-sm mb-6 font-semibold">
              Portfolio Profesional
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
              Tadeo
              <br />
              Sangregorio
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              BI Analyst & Data Analyst
              especializado en dashboards,
              automatización y reporting
              estratégico.
            </p>

            {/* BOTONES */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#proyectos"
                className="bg-[#3b82f6] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Ver proyectos
              </a>

              <a
                href="/Cv - Sangregorio Tadeo Mirko (ESP).pdf"
                download
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                Descargar CV ESP
              </a>

              <a
                href="/Cv - Sangregorio Tadeo Mirko (ENG).pdf"
                download
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                Descargar CV ENG
              </a>

              <button
                onClick={() =>
                  setOpenContact(true)
                }
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                Contacto
              </button>

              <button
                onClick={() =>
                  setOpenExperience(true)
                }
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                Experiencia
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <p className="uppercase tracking-[0.4em] text-[#3b82f6] text-sm mb-6 font-semibold">
          Skills
        </p>

        <h2 className="text-5xl font-black mb-14">
          Tecnologías & Herramientas
        </h2>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:border-[#3b82f6] transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      {/* ===================================== */}
{/* SECCIÓN PROYECTOS COMPLETA */}
{/* REEMPLAZÁ TU SECCIÓN ACTUAL */}
{/* ===================================== */}

<section
  id="proyectos"
  className="max-w-7xl mx-auto px-6 py-28"
>
  <p className="uppercase tracking-[0.4em] text-[#3b82f6] text-sm mb-6 font-semibold">
    Portfolio
  </p>

  <h2 className="text-5xl font-black mb-16">
    Proyectos destacados
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
    {proyectos.map((proyecto, index) => (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md flex flex-col"
      >
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="h-60 w-full object-cover"
        />

        <div className="p-8 flex flex-col flex-1">
          <h3 className="text-3xl font-bold mb-4">
            {proyecto.titulo}
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            {proyecto.descripcion}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {proyecto.tecnologias.map(
              (tech, i) => (
                <span
                  key={i}
                  className="bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 px-3 py-2 rounded-xl text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <button
            onClick={() => {
              if (
                proyecto.tipo ===
                "mail"
              ) {
                setOpenMailProject(
                  true
                );
              }

              if (
                proyecto.tipo ===
                "dashboard"
              ) {
                setOpenDashboardProject(
                  true
                );
              }

              if (
                proyecto.tipo ===
                "web"
              ) {
                setOpenWebProject(
                  true
                );
              }
            }}
            className="mt-auto bg-[#3b82f6] text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
          >
            Ver detalle
          </button>
        </div>
      </motion.div>
    ))}
  </div>

  {/* ===================================== */}
  {/* EXPERIENCIA EXTRA */}
  {/* ===================================== */}

  <div className="mt-20 bg-white/5 border border-white/10 rounded-[2rem] p-10">
    <p className="uppercase tracking-[0.35em] text-[#3b82f6] text-sm font-semibold mb-5">
      Otros proyectos y experiencia analítica
    </p>

    <h3 className="text-4xl font-black mb-8">
      Reporting, KPIs y análisis estratégico
    </h3>

    <div className="space-y-8">
      {/* MOLINOS */}
      <div className="border-l-2 border-[#3b82f6]/40 pl-6">
        <h4 className="text-2xl font-bold mb-3">
          Molinos Tarquini — KPIs Comerciales
        </h4>

        <p className="text-gray-300 text-lg leading-relaxed">
          Desarrollo de dashboards y métricas
          comerciales utilizando información
          proveniente de Finnegans ERP,
          integrando datos de ventas, stock y
          movimientos operativos para análisis
          estratégico y reducción de sobre stock.
        </p>
      </div>

      {/* SAMSUNG */}
      <div className="border-l-2 border-[#3b82f6]/40 pl-6">
        <h4 className="text-2xl font-bold mb-3">
          Samsung / Cheil — Performance Digital
        </h4>

        <p className="text-gray-300 text-lg leading-relaxed">
          Desarrollo de dashboards en Power BI
          y Looker Studio para campañas
          digitales, análisis de performance
          de publicaciones, stories, métricas
          de engagement y seguimiento de KPI´s
          orientados a marketing y contenido
          digital.
        </p>
      </div>

      {/* GCBA */}
      <div className="border-l-2 border-[#3b82f6]/40 pl-6">
        <h4 className="text-2xl font-bold mb-3">
          GCBA — Automatización y Operaciones
        </h4>

        <p className="text-gray-300 text-lg leading-relaxed">
          Automatización de procesos internos,
          generación de reportes automáticos,
          consolidación de información
          operativa y desarrollo de dashboards
          para relevamientos, monitoreo y
          análisis territorial.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black mb-4">
                Tadeo Sangregorio
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                BI Analyst & Data Analyst
                enfocado en dashboards,
                automatización y soluciones
                orientadas a optimización
                operativa.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="https://wa.me/5491124606992"
                target="_blank"
                className="text-gray-300 hover:text-[#3b82f6] transition"
              >
                WhatsApp
              </a>

              <a
                href="https://linkedin.com/in/tadeo-sangregorio"
                target="_blank"
                className="text-gray-300 hover:text-[#3b82f6] transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:tadeosangregorio@gmail.com"
                className="text-gray-300 hover:text-[#3b82f6] transition"
              >
                tadeosangregorio@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2026 Tadeo Sangregorio —
            Portfolio Profesional
          </div>
        </div>
      </footer>

      {/* MODAL EXPERIENCIA */}
      {openExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-10">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-5xl font-black">
                Experiencia Profesional
              </h2>

              <button
                onClick={() =>
                  setOpenExperience(false)
                }
                className="text-3xl text-gray-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-10 border-l border-white/10 pl-10">
              {timeline.map(
                (item, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-[#3b82f6]" />

                    <p className="text-[#3b82f6] font-semibold mb-2">
                      {item.year}
                    </p>

                    <h3 className="text-3xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {
                        item.description
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL MAIL */}
      {openMailProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[#0b1020] flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
                  className="rounded-3xl border border-white/10 shadow-2xl"
                />
              </div>

              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-black leading-tight">
                    Sistema Automatizado
                    <br />
                    de Nuevos Ingresos
                  </h2>

                  <button
                    onClick={() =>
                      setOpenMailProject(
                        false
                      )
                    }
                    className="text-2xl text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Sistema automatizado
                  desarrollado con Google
                  Forms, Sheets y Apps
                  Script para gestionar
                  altas de nuevos agentes.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() =>
                      setSelectedImage(
                        "/Datosform.png"
                      )
                    }
                  >
                    <img
                      src="/Datosform.png"
                      className="rounded-2xl"
                    />
                  </button>

                  <button
                    onClick={() =>
                      setSelectedImage(
                        "/script.png"
                      )
                    }
                  >
                    <img
                      src="/script.png"
                      className="rounded-2xl"
                    />
                  </button>

                  <button
                    onClick={() =>
                      setSelectedImage(
                        "/mail_pixelado.png"
                      )
                    }
                  >
                    <img
                      src="/mail_pixelado.png"
                      className="rounded-2xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DASHBOARD */}
      {openDashboardProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] max-w-7xl w-full max-h-[90vh] overflow-y-auto p-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-5xl font-black">
                Dashboards &
                Analytics
              </h2>

              <button
                onClick={() =>
                  setOpenDashboardProject(
                    false
                  )
                }
                className="text-3xl text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
                <button
                  onClick={() =>
                    setSelectedImage(
                      "/consulta administracion.png"
                    )
                  }
                  className="w-full"
                >
                  <img
                    src="/consulta administracion.png"
                    className="w-full h-[420px] object-contain bg-[#0b1020]"
                  />
                </button>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    Dashboard
                    Administración
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Dashboard automatizado
                    para gestión
                    administrativa,
                    licencias e información
                    operativa.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
                <button
                  onClick={() =>
                    setSelectedImage(
                      "/cumplimientoMonitoreo.png"
                    )
                  }
                  className="w-full"
                >
                  <img
                    src="/cumplimientoMonitoreo.png"
                    className="w-full h-[420px] object-contain bg-[#0b1020]"
                  />
                </button>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    Cumplimiento
                    Monitoreo
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Dashboard conectado
                    a SISEP para análisis
                    de KPIs y métricas
                    operativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL WEB */}
      {openWebProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] max-w-7xl w-full max-h-[90vh] overflow-y-auto p-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-5xl font-black">
                Desarrollo Web
              </h2>

              <button
                onClick={() =>
                  setOpenWebProject(false)
                }
                className="text-3xl text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
                <button
                  onClick={() =>
                    setSelectedImage(
                      "/paguso.png"
                    )
                  }
                  className="w-full"
                >
                  <img
                    src="/paguso.png"
                    className="w-full h-[420px] object-contain bg-[#0b1020]"
                  />
                </button>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    Relevamiento de Uso
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Plataforma desarrollada
                    en Framer para
                    centralizar formularios,
                    mapas y accesos
                    operativos.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col justify-center">
                <h3 className="text-4xl font-black mb-6">
                  Portfolio Profesional
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Desarrollo completo en
                  React, Next.js y
                  TailwindCSS con diseño
                  moderno e interactivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL IMAGEN */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[999] px-6">
          <div className="relative max-w-7xl w-full">
            <button
              onClick={() =>
                setSelectedImage(null)
              }
              className="absolute -top-14 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              className="w-full max-h-[90vh] object-contain rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* CONTACTO */}
      {openContact && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black">
                Contacto
              </h3>

              <button
                onClick={() =>
                  setOpenContact(false)
                }
                className="text-2xl text-gray-400"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5491124606992"
                target="_blank"
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <FaWhatsapp size={24} />
                WhatsApp
              </a>

              <a
                href="https://linkedin.com/in/tadeo-sangregorio"
                target="_blank"
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <FaLinkedin size={24} />
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tadeosangregorio@gmail.com"
                target="_blank"
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <FaEnvelope size={22} />
                Gmail
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}