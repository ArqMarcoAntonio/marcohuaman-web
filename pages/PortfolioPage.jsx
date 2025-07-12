import React from "react";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">PORTAFOLIO PROFESIONAL</h1>
        <p className="text-lg mt-2">Marco Huamán</p>
        <p>Arquitecto | Consultor en Contratos de Ejecución de Obras Públicas | Adjudicador – JPRD</p>
      </header>

      <section className="perfil-profesional mb-8">
        <h2 className="text-2xl font-semibold mb-4">PERFIL PROFESIONAL</h2>
        <p>Arquitecto con 23 años de experiencia en el sector construcción, especializado en la gestión y administración de contratos de obras públicas, en proyectos de infraestructura vial, edificaciones complejas y urbanismo. He liderado proyectos emblemáticos a nivel nacional como Administrador de Contrato, Jefe de Oficina Técnica y Especialista en Costos y Valorizaciones, trabajando con constructoras y consultoras de primer nivel.</p>
      </section>

      <section className="experiencia-adjudicador mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA COMO ADJUDICADOR – JPRD</h2>
        <ul>
          <li>Vía Costa Verde – Tramo Callao</li>
          <li>Contrato N.º 087-2024-MTC/21 – Departamento de San Martín</li>
        </ul>
      </section>

      <section className="proyectos-gezouba mb-8">
        <h2 className="text-2xl font-semibold mb-4">PROYECTOS DESTACADOS EN CHINA GEZHOUBA GROUP COMPANY</h2>
        <ul>
          <li>MO-590: Samegua – Emp. MO-602</li>
          <li>Vía Expresa Cusco</li>
          <li>Hospitales y carreteras 2024-2025</li>
        </ul>
      </section>

      <section className="servicios mb-8">
        <h2 className="text-2xl font-semibold mb-4">SERVICIOS</h2>
        <ul>
          <li>Gestión contractual de obras públicas</li>
          <li>Consultoría en ejecución de contratos</li>
          <li>Adjudicación y resolución de controversias (JPRD)</li>
          <li>Diseño arquitectónico de viviendas, parques recreacionales, hoteles</li>
        </ul>
      </section>
    </div>
  );
}
