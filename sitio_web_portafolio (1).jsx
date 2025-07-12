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
        <p>Cuento con una sólida formación en derecho de la construcción y solución de controversias, lo que me permite brindar servicios de consultoría contractual y resolución de disputas desde una visión integral. Estoy inscrito como Adjudicador en la nómina del Colegio de Ingenieros del Perú, habiendo participado en Juntas de Resolución de Disputas (JRD) en contratos de gran envergadura.</p>
        <p>Mi enfoque combina la experiencia técnica con el cumplimiento normativo, aportando valor en la ejecución eficiente de obras, la prevención de conflictos y la optimización contractual para entidades públicas y privadas. Como arquitecto, he diseñado viviendas particulares, parques recreacionales y hoteles, y mi experiencia en edificaciones me ha permitido conocer nuevas técnicas constructivas y materiales, los cuales nutren mi enfoque de diseño actual.</p>
      </section>
      <section className="experiencia-adjudicador mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA COMO ADJUDICADOR – JUNTA DE PREVENCIÓN Y RESOLUCIÓN DE DISPUTAS (JPRD)</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Vía Costa Verde – Tramo Callao</strong><br />
            Contrato: S/ 116 millones<br />
            Periodo: set. 2022 – feb. 2023<br />
            Obra culminada antes del plazo contractual, sin generación de controversias.
          </li>
          <li>
            <strong>Contrato N.º 087-2024-MTC/21 – Departamento de San Martín</strong><br />
            Periodo: desde enero 2025 (designado)<br />
            Contrato de obra anulado antes del inicio del servicio.
          </li>
        </ul>
      </section>
      <section className="proyectos-gezouba mb-8">
        <h2 className="text-2xl font-semibold mb-4">PROYECTOS DESTACADOS EN CHINA GEZHOUBA GROUP COMPANY</h2>
        <ul className="list-disc list-inside">
          <li>Mejoramiento y Recuperación del Camino Vecinal MO-590: Samegua – Emp. MO-602 – S/ 63.5 millones – mar. 2021 – actual</li>
          <li>Recuperación Camino Vecinal EN R70: Sausal del Quiroz, Ayabaca – Piura – S/ 19.3 millones – oct. 2020 – nov. 2020</li>
          <li>Recuperación Camino Vecinal EN PI-676: La Arcana – San José de Calvas, Ayabaca – Piura – S/ 15.5 millones – nov. 2020 – dic. 2020</li>
          <li>Mejoramiento Integral de la Vía Expresa de Cusco – S/ 289.2 millones – ene. 2021 – mar. 2021</li>
          <li>Hospital Bambamarca – Cajamarca – S/ 139.9 millones – set. 2024 – actual</li>
          <li>Hospital Leoncio Prado – Huamachuco – S/ 147.7 millones – set. 2024 – actual</li>
          <li>Hospital Lucio Aldazábal Pauca – Puno – S/ 178.5 millones – set. 2024 – actual</li>
          <li>Hospital Tambobamba – Apurímac – S/ 113.9 millones – set. 2024 – actual</li>
          <li>Hospital Saúl Garrido Rosillo – Tumbes – S/ 189.2 millones – set. 2024 – actual</li>
          <li>Hospital El Carmen – Huancayo – S/ 179.0 millones – set. 2024 – actual</li>
          <li>Universidad Nacional Intercultural de la Selva Central – Junín – S/ 187.1 millones – set. 2024 – actual</li>
          <li>Carretera Departamental JU-108 – Junín – S/ 303.0 millones – set. 2024 – actual</li>
        </ul>
      </section>
      <section className="servicios mb-8">
        <h2 className="text-2xl font-semibold mb-4">SERVICIOS</h2>
        <ul className="list-disc list-inside">
          <li>Gestión contractual de obras públicas</li>
          <li>Consultoría en ejecución de contratos</li>
          <li>Adjudicación y resolución de controversias (JPRD)</li>
          <li>Diseño arquitectónico de viviendas, parques recreacionales, hoteles, entre otros</li>
        </ul>
      </section>
      <section className="proyectos-administrador mb-8">
        <h2 className="text-2xl font-semibold mb-4">PROYECTOS DESTACADOS COMO ADMINISTRADOR DE CONTRATOS Y JEFE DE OFICINA TÉCNICA</h2>
        <p>(Se mantiene la lista ya incluida, excluyendo los proyectos bajo China Gezhouba que ahora están en su sección correspondiente.)</p>
      </section>
    </div>
  );
}
