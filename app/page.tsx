"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openContact, setOpenContact] = useState(false);
  const [openMailProject, setOpenMailProject] = useState(false);
  const [openDashboardProject, setOpenDashboardProject] = useState(false);
  const [openWebProject, setOpenWebProject] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kpis = [
    {
      valor: "+3",
      desc: "Años de Experiencia",
      icon: (
        <FaChartLine
          className={isDarkMode ? "text-blue-400" : "text-blue-600"}
        />
      ),
    },
    {
      valor: "+15",
      desc: "Procesos Automatizados",
      icon: (
        <FaRobot
          className={isDarkMode ? "text-purple-400" : "text-purple-600"}
        />
      ),
    },
    {
      valor: "100%",
      desc: "Data-Driven Mindset",
      icon: (
        <FaDatabase
          className={isDarkMode ? "text-emerald-400" : "text-emerald-600"}
        />
      ),
    },
  ];

  const skills = [
    { name: "Power BI", cat: "BI" },
    { name: "Looker Studio", cat: "BI" },
    { name: "SQL", cat: "Data" },
    { name: "Google Apps Script", cat: "Dev" },
    { name: "Dashboards", cat: "BI" },
    { name: "KPIs & Reporting", cat: "Data" },
    { name: "React / Next.js", cat: "Dev" },
    { name: "TailwindCSS", cat: "Dev" },
    { name: "Framer Motion", cat: "Dev" },
  ];

  const proyectos = [
    {
      titulo: "Sistema Automatizado de Nuevos Ingresos",
      descripcion:
        "Diseño y despliegue de un workflow automatizado extremo a extremo para la gestión operativa y alta de agentes, reduciendo tiempos manuales de procesamiento.",
      impacto: "Eliminación del 80% del trabajo manual administrativo.",
      tecnologias: ["Apps Script", "Google Forms", "Gmail API", "Sheets"],
      imagen: "/mail_pixelado.png",
      tipo: "mail",
    },
    {
      titulo: "Dashboards & Analytics Estratégico",
      descripcion:
        "Centralización de datos operativos y de performance digital en tableros dinámicos. Modelado de datos eficiente enfocado en la toma de decisiones ejecutivas.",
      impacto:
        "Monitoreo en tiempo real de KPIs críticos y desvíos territoriales.",
      tecnologias: ["Power BI", "Looker Studio", "SISEP Integration"],
      imagen: "/consulta administracion.png",
      tipo: "dashboard",
    },
    {
      titulo: "Plataformas Operativas & Web",
      descripcion:
        "Desarrollo frontend de aplicaciones interactivas y landing pages optimizadas para la recolección, mapeo y centralización de datos territoriales.",
      impacto:
        "Interfaz unificada para operaciones y consultas de administración.",
      tecnologias: ["React", "Next.js", "Framer", "TailwindCSS"],
      imagen: "/paguso.png",
      tipo: "web",
    },
  ];

  const experienciaHistorial = [
    {
      periodo: "Actualidad",
      puesto: "Data Analyst | Analista de Datos",
      empresa: "GCBA",
      logros: [
        "Automatización de procesos internos y consolidación de información operativa.",
        "Desarrollo de dashboards estratégicos para monitoreo, relevamiento y análisis territorial.",
        "Generación de reportes automáticos optimizando la toma de decisiones en campo.",
      ],
    },
    {
      periodo: "Nov 2025 - Feb 2026",
      puesto: "BI Analyst",
      empresa: "Samsung / Cheil",
      logros: [
        "Desarrollo de dashboards avanzados en Power BI y Looker Studio para tracking de campañas digitales.",
        "Análisis profundo de métricas de performance (engagement, stories, publicaciones).",
        "Estandarización de reportes de marketing orientados a la optimización de contenido digital.",
      ],
    },
    {
      periodo: "Jun 2025 - Ago 2025",
      puesto: "BI Analyst",
      empresa: "Molinos Tarquini",
      logros: [
        "Modelado de KPIs comerciales integrando datos extraídos directamente de Finnegans ERP.",
        "Automatización integral de reportes de ventas, stock y movimientos operativos.",
        "Generación de insights estratégicos que permitieron la identificación y reducción de sobre-stock.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen antialiased selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300 ${
        isDarkMode ? "bg-[#030712] text-gray-100" : "bg-[#eeeeee] text-gray-900"
      }`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");
        html {
          scroll-behavior: smooth;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
      `}</style>

      {/* BOTÓN TOGGLE MODO CLARO / OSCURO FLOATING */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 border flex items-center justify-center ${
            isDarkMode
              ? "bg-gray-900 border-gray-800 text-yellow-400 hover:bg-gray-800"
              : "bg-white border-gray-300 text-indigo-900 hover:bg-gray-100"
          }`}
          title={isDarkMode ? "Activar Modo Claro" : "Activar Modo Oscuro"}
        >
          {isDarkMode ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
      </div>

      {/* HERO SECTION */}
      <section
        className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-gray-950 to-gray-950 border-gray-800/50"
            : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-[#eeeeee] to-[#eeeeee] border-gray-300"
        }`}
      >
        <div
          className={`absolute top-0 left-1/4 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none transition-colors duration-300 ${
            isDarkMode ? "bg-blue-600/10" : "bg-blue-400/20"
          }`}
        />
        <div
          className={`absolute bottom-10 right-1/4 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-colors duration-300 ${
            isDarkMode ? "bg-purple-600/5" : "bg-purple-400/10"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md transition-colors duration-300 ${
                isDarkMode
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border-blue-600/30 bg-blue-600/10 text-blue-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full animate-pulse ${
                  isDarkMode ? "bg-blue-400" : "bg-blue-600"
                }`}
              />
              BI & Data Analyst Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Transformo datos en{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-400 via-indigo-400 to-purple-400"
                    : "from-blue-600 via-indigo-600 to-purple-600"
                }`}
              >
                Impacto Estratégico
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-12 transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Hola, soy{" "}
              <strong
                className={`font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Tadeo Sangregorio
              </strong>
              . Especializado en diseño de dashboards avanzados, automatización
              de workflows corporativos y optimización operativa data-driven.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#proyectos"
                className={`group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg transition opacity-95 hover:opacity-100 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/20 hover:shadow-blue-500/30"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-600/10 hover:shadow-blue-600/20"
                }`}
              >
                Ver proyectos destacados
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setOpenContact(true)}
                className={`border px-8 py-4 rounded-xl font-medium backdrop-blur-md transition ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800 hover:border-gray-600"
                    : "border-gray-400 bg-white/70 text-gray-900 hover:bg-white hover:border-gray-500"
                }`}
              >
                Contacto directo
              </button>

              <div className="flex gap-2 ml-2">
                <a
                  href="/Cv - Sangregorio Tadeo Mirko (ESP).pdf"
                  download
                  className={`p-3 rounded-xl border text-sm transition font-medium ${
                    isDarkMode
                      ? "border-gray-800 bg-gray-900/30 text-gray-400 hover:text-white hover:border-gray-700"
                      : "border-gray-300 bg-white/50 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                  }`}
                  title="Descargar CV Español"
                >
                  CV (ESP)
                </a>
                <a
                  href="/Cv - Sangregorio Tadeo Mirko (ENG).pdf"
                  download
                  className={`p-3 rounded-xl border text-sm transition font-medium ${
                    isDarkMode
                      ? "border-gray-800 bg-gray-900/30 text-gray-400 hover:text-white hover:border-gray-700"
                      : "border-gray-300 bg-white/50 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                  }`}
                  title="Descargar CV Inglés"
                >
                  CV (ENG)
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`grid md:grid-cols-3 gap-6 mt-24 border-t pt-12 transition-colors duration-300 ${
              isDarkMode ? "border-gray-800/60" : "border-gray-300"
            }`}
          >
            {kpis.map((kpi, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900/20 border-gray-800/40"
                    : "bg-white/60 border-gray-300/80 shadow-sm"
                }`}
              >
                <div
                  className={`p-4 rounded-xl text-2xl border transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-900/60 border-gray-800"
                      : "bg-white border-gray-300 shadow-inner"
                  }`}
                >
                  {kpi.icon}
                </div>
                <div>
                  <div
                    className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {kpi.valor}
                  </div>
                  <div
                    className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {kpi.desc}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                isDarkMode ? "text-blue-500" : "text-blue-600"
              }`}
            >
              Tech Stack
            </p>
            <h2
              className={`text-3xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Caja de Herramientas
            </h2>
          </div>
          <p
            className={`max-w-sm text-sm transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ecosistema tecnológico que implemento para extraer, transformar,
            modelar y presentar valor de negocio.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group flex items-center gap-2 border px-5 py-3 rounded-xl transition cursor-default ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/80 hover:border-blue-500/50"
                  : "bg-white border-gray-300 hover:border-blue-600 hover:shadow-sm"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  skill.cat === "BI"
                    ? "bg-blue-500"
                    : skill.cat === "Data"
                    ? "bg-emerald-500"
                    : "bg-purple-500"
                }`}
              />
              <span
                className={`transition font-medium ${
                  isDarkMode
                    ? "text-gray-300 group-hover:text-white"
                    : "text-gray-700 group-hover:text-gray-900"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section
        id="proyectos"
        className={`max-w-7xl mx-auto px-6 py-24 border-t transition-colors duration-300 ${
          isDarkMode ? "border-gray-900" : "border-gray-300"
        }`}
      >
        <div className="mb-16">
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
              isDarkMode ? "text-blue-500" : "text-blue-600"
            }`}
          >
            Casos de Éxito
          </p>
          <h2
            className={`text-3xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Proyectos con Impacto Real
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`group border rounded-2xl overflow-hidden backdrop-blur-md flex flex-col transition shadow-md ${
                isDarkMode
                  ? "bg-gray-900/20 border-gray-800/60 hover:border-gray-700/80"
                  : "bg-white border-gray-300 hover:border-gray-400 hover:shadow-lg"
              }`}
            >
              <div className="h-52 w-full overflow-hidden bg-gray-950 relative">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-3 left-3 backdrop-blur-md border px-3 py-1 rounded-lg text-xs font-semibold ${
                    isDarkMode
                      ? "bg-gray-950/80 border-gray-800 text-emerald-400"
                      : "bg-white/90 border-gray-300 text-emerald-700"
                  }`}
                >
                  {proyecto.impacto ? "Caso de Éxito" : "Dashboard"}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className={`text-xl font-bold mb-3 transition ${
                    isDarkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {proyecto.titulo}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {proyecto.descripcion}
                </p>

                {proyecto.impacto && (
                  <div
                    className={`mb-6 p-3 rounded-xl border text-xs transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300"
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-800"
                    }`}
                  >
                    <strong
                      className={`font-semibold block mb-0.5 ${
                        isDarkMode ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      Retorno / Impacto:
                    </strong>
                    {proyecto.impacto}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className={`border px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-gray-900/60 text-gray-300 border-gray-800"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (proyecto.tipo === "mail") setOpenMailProject(true);
                    if (proyecto.tipo === "dashboard")
                      setOpenDashboardProject(true);
                    if (proyecto.tipo === "web") setOpenWebProject(true);
                  }}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200 hover:bg-blue-600 hover:text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Analizar Arquitectura & Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECCIÓN EXPERIENCIA — TIMELINE CORREGIDA PARA MOBILE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className={`max-w-7xl mx-auto px-6 py-24 border-t transition-colors duration-300 ${
          isDarkMode ? "border-gray-900" : "border-gray-300"
        }`}
      >
        <div className="mb-16">
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
              isDarkMode ? "text-blue-500" : "text-blue-600"
            }`}
          >
            Trayectoria
          </p>
          <h2
            className={`text-3xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experiencia Corporativa
          </h2>
        </div>

        {/* 
          MOBILE:  línea fija a la izquierda (left-4), cards con pl para dejar espacio
          DESKTOP: línea centrada (md:left-1/2), cards alternadas en cada lado
        */}
        <div className="relative">
          {/* Línea vertical */}
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px pointer-events-none transition-colors duration-300 ${
              isDarkMode ? "bg-gray-800/80" : "bg-gray-400"
            }`}
          />

          <div className="space-y-8 md:space-y-12">
            {experienciaHistorial.map((exp, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Nodo — siempre alineado a la línea */}
                <div
                  className={`
                    absolute left-4 md:left-1/2
                    -translate-x-1/2
                    w-3 h-3 rounded-full border-4 z-20 mt-1.5
                    transition-colors duration-300
                    ${
                      isDarkMode
                        ? "bg-blue-500 border-[#030712]"
                        : "bg-blue-600 border-[#eeeeee]"
                    }
                  `}
                />

                {/*
                  MOBILE: card ocupa todo el ancho, con padding izquierdo
                    para no solaparse con el nodo/línea.
                  DESKTOP: card en el lado correcto (izquierda o derecha
                    del centro), con margen automático.
                */}
                <div
                  className={`
                    w-full pl-10
                    md:pl-0 md:w-[46%]
                    ${
                      idx % 2 === 0
                        ? "md:ml-auto md:pr-0 md:pl-8" /* derecha */
                        : "md:mr-auto md:pl-0 md:pr-8" /* izquierda */
                    }
                    border rounded-2xl p-6 backdrop-blur-sm
                    transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-gray-900/10 border-gray-800/60"
                        : "bg-white border-gray-300 shadow-sm"
                    }
                  `}
                >
                  <span
                    className={`text-xs font-bold block mb-1 transition-colors duration-300 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {exp.periodo}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-0.5 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.puesto}
                  </h3>
                  <span
                    className={`text-sm font-medium block mb-4 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.empresa}
                  </span>

                  <ul className="space-y-2 text-sm list-disc list-inside">
                    {exp.logros.map((logro, i) => (
                      <li key={i} className="leading-relaxed">
                        <span
                          className={`transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {logro}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t transition-colors duration-300 ${
          isDarkMode
            ? "border-gray-900 bg-gray-950/40"
            : "border-gray-300 bg-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3
              className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Tadeo Sangregorio
            </h3>
            <p
              className={`text-sm mt-1 transition-colors duration-300 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Data driven Solutions & BI Architecture © 2026
            </p>
          </div>
          <div
            className={`flex gap-6 text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <a
              href="https://linkedin.com/in/tadeo-sangregorio"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/5491124606992"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:tadeosangregorio@gmail.com"
              className="hover:text-blue-500 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL MAIL */}
      {openMailProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-6">
          <div
            className={`border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#0b1224] border-gray-800"
                : "bg-[#eeeeee] border-gray-300"
            }`}
          >
            <div className="grid lg:grid-cols-2">
              <div className="bg-gray-950 flex items-center justify-center p-8 border-r border-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
                  className="rounded-xl border border-gray-800 shadow-2xl"
                  alt="Procesamiento de datos"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2
                      className={`text-2xl font-black ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Sistema Automatizado de Ingresos
                    </h2>
                    <button
                      onClick={() => setOpenMailProject(false)}
                      className={`text-xl ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      ✕
                    </button>
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Solución ágil integrada mediante Google Workspace y lógica
                    robusta en Apps Script para digitalizar y automatizar por
                    completo el flujo de altas.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <button
                      onClick={() => setSelectedImage("/Datosform.png")}
                      className={`border rounded-xl overflow-hidden transition ${
                        isDarkMode
                          ? "border-gray-800 hover:border-gray-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img src="/Datosform.png" alt="Form" />
                    </button>
                    <button
                      onClick={() => setSelectedImage("/script.png")}
                      className={`border rounded-xl overflow-hidden transition ${
                        isDarkMode
                          ? "border-gray-800 hover:border-gray-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img src="/script.png" alt="Script" />
                    </button>
                    <button
                      onClick={() => setSelectedImage("/mail_pixelado.png")}
                      className={`border rounded-xl overflow-hidden transition ${
                        isDarkMode
                          ? "border-gray-800 hover:border-gray-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img src="/mail_pixelado.png" alt="Mail" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DASHBOARD */}
      {openDashboardProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-6">
          <div
            className={`border rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#0b1224] border-gray-800"
                : "bg-[#eeeeee] border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className={`text-2xl font-black ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Ecosistema Dashboards & Analytics
              </h2>
              <button
                onClick={() => setOpenDashboardProject(false)}
                className={`text-xl ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                ✕
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div
                className={`border rounded-xl p-4 ${
                  isDarkMode
                    ? "bg-gray-950/50 border-gray-800"
                    : "bg-white border-gray-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() =>
                    setSelectedImage("/consulta administracion.png")
                  }
                  className="w-full mb-4 rounded-lg overflow-hidden border border-gray-900"
                >
                  <img
                    src="/consulta administracion.png"
                    className="w-full h-64 object-cover"
                    alt="Admin"
                  />
                </button>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Módulo de Administración
                </h3>
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Control operativo interno, gestión de licencias y flujos
                  automatizados de control de personal.
                </p>
              </div>
              <div
                className={`border rounded-xl p-4 ${
                  isDarkMode
                    ? "bg-gray-950/50 border-gray-800"
                    : "bg-white border-gray-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setSelectedImage("/cumplimientoMonitoreo.png")}
                  className="w-full mb-4 rounded-lg overflow-hidden border border-gray-900"
                >
                  <img
                    src="/cumplimientoMonitoreo.png"
                    className="w-full h-64 object-cover"
                    alt="Monitoreo"
                  />
                </button>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Módulo Cumplimiento & Monitoreo
                </h3>
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Panel táctico enlazado directamente a bases de datos SISEP
                  para trackeo inmediato de performance territorial.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL WEB */}
      {openWebProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-6">
          <div
            className={`border rounded-2xl max-w-4xl w-full p-8 transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#0b1224] border-gray-800"
                : "bg-[#eeeeee] border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className={`text-2xl font-black ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Desarrollo Frontend Operativo
              </h2>
              <button
                onClick={() => setOpenWebProject(false)}
                className={`text-xl ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                ✕
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <button
                  onClick={() => setSelectedImage("/paguso.png")}
                  className={`border rounded-xl overflow-hidden ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  }`}
                >
                  <img src="/paguso.png" className="w-full" alt="Web App" />
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Relevamiento Integrado de Uso
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Plataforma ágil diseñada para optimizar los accesos y mapas de
                  control operativo en territorio.
                </p>
                <span
                  className={
                    isDarkMode
                      ? "text-gray-500 font-medium"
                      : "text-gray-600 font-semibold"
                  }
                >
                  Stack: React · Next.js · Framer Motion · Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-2xl bg-gray-900/80 p-3 rounded-full hover:bg-gray-800"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-gray-800"
            alt="Vista ampliada"
          />
        </div>
      )}

      {/* MODAL CONTACTO */}
      {openContact && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div
            className={`border rounded-2xl p-6 max-w-sm w-full transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#0b1224] border-gray-800"
                : "bg-white border-gray-300 shadow-xl"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Canales de Contacto
              </h3>
              <button
                onClick={() => setOpenContact(false)}
                className={
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/5491124606992"
                target="_blank"
                className={`flex items-center gap-3 border rounded-xl p-4 text-sm transition font-medium ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:text-white hover:border-green-500/40"
                    : "bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 hover:border-green-600 hover:bg-white"
                }`}
              >
                <FaWhatsapp className="text-green-500 text-lg" /> Continuar vía
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/tadeo-sangregorio"
                target="_blank"
                className={`flex items-center gap-3 border rounded-xl p-4 text-sm transition font-medium ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:text-white hover:border-blue-500/40"
                    : "bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 hover:border-blue-600 hover:bg-white"
                }`}
              >
                <FaLinkedin className="text-blue-500 text-lg" /> Conectar en
                LinkedIn
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tadeosangregorio@gmail.com"
                target="_blank"
                className={`flex items-center gap-3 border rounded-xl p-4 text-sm transition font-medium ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:text-white hover:border-red-500/40"
                    : "bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 hover:border-red-600 hover:bg-white"
                }`}
              >
                <FaEnvelope className="text-red-500 text-lg" /> Redactar Correo
                Directo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

