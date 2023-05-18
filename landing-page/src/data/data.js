import tour1 from "../images/dtimatch.jpg";
import tour2 from "../images/futboldti.jpg";
import tour3 from "../assets/dtiabout.jpg";

export const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "services",
  },
  {
    id: 4,
    link: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    link: "facebook",
  },
  {
    id: 2,
    link: "twitter",
  },
  {
    id: 3,
    link: "squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-file fa-fw",
    title: "Perfil profesional",
    text: "El (ISC), de formación bilingüe (*), está capacitado para:",
    text: " • Brindar soluciones informáticas a instituciones industriales o de servicios tanto a nivel de software como de hardware. Administrar sistemas informáticos y desarrollar aplicaciones a medida del cliente en diferentes campos.",
  },
  {
    id: 2,
    icon: "fas fa-road fa-fw",
    title: "Mercado de trabajo",
    text: " • En cualquier organización que cuente o requiera un sistema informático. En grupos multidisciplinarios que desarrollen soluciones de software o hardware.En empresas internacionales, aplicando conceptos de teletrabajo vía Internet. En su propia empresa.",
  },
  {
    id: 3,
    icon: "fas fa-book fa-fw",
    title: "Areas de estudio",
    text: " • Programación en Sistemas Informáticos. Inteligencia Artificial. Administración y Desarrollo de Sistemas de Información. Teleinformática. Generación de Empresas",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "Dentro de la U",
    title: "DTI Match",
    info: ` Realizamos actividades dentro de nuestra escuela, para que los estudiantes puedan conocerce entre futuros colegas. Fomentando un mejor espacio dentro de las aulas, para que el espacio de estudio donde se encuentren los estudiantes sea mas ameno y se puedan adaptar mejor a los ambientes futuros.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "Extracurricular",
    title: "Actividades deportivas y culturales",
    info: ` Dentro de la universidad se realizan actividades, tanto deportivas como culturales, para que todos puedan cobresalir y destacar con otras habilidades fuera de las academicas, para explotar y aprovevhar otras habilidades que poseen los estudiantes dentro de nuestra escuela. `,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "Trabajo",
    title: "Formacion profesional",
    info: ` La formación del Ingeniero de Sistemas Computacionales (ISC), enfoca sus estudios en campos relacionados con la Administración de Sistemas y la Ingeniería del Software, recibiendo una sólida base multidisciplinaria para desarrollar actividades en proyectos múltiples y la obtención de Certificaciones Profesionales.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
];
