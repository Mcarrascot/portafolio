import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "Landing page",
    subtitle: "Website para salón de uñas",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Shadcn",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      'La idea de este proyecto es crear una "landing-page", en este caso creé una landing-de-ventas para un salón de uñas. El objetivo aquí es poner en práctica lo aprendido en cuanto HTML, CSS y Bootstrap.',
    imgUrl: "/videos/shadcn-landing-page.webp",
    videoUrl: "/videos/shadcn-landing-page.mp4",
    githubUrl: "https://github.com/Mcarrascot/landingventas",
    websiteUrl: "https://mcarrascot.github.io/proyecto-crud/",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "CRUD Website",
    subtitle: "",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Next js",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
      {
        name: "CSS Modules",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "Antd",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
    description:
      'La idea de este proyecto es crear una "CRUD" website usando localStorage, en este caso, creé un sistema de gestión de inventario para una empresa de alquiler de películas llamada Rentflix. El objetivo aquí es poner en práctica lo aprendido en cuanto Javascript con el DOM y localStorage.',
    imgUrl: "/videos/magenta.webp",
    videoUrl: "/videos/magenta.mp4",
    githubUrl: "https://github.com/Mcarrascot/Proyecto-CRUD",
    websiteUrl: "https://mcarrascot.github.io/Proyecto-CRUD/",
  },
  {
    icon: <Sk8terSVG />,
    title: "Pronostico del tiempo",
    subtitle: "Dashboard Condiciones Climáticas",
    technologies: [
      {
        name: "JavaScript",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Sass",
        icon: (
          <SassSVG
            color="#CC6699"
            size={16}
          />
        ),
      },

      {
        name: "Prime React",
        icon: (
          <PrimeReactSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "React Hook Form",
        icon: (
          <ReactHookFormSVG
            color="#EC5990"
            size={16}
          />
        ),
      },
    ],
    description:
      'Este proyecto muestra las condiciones climáticas de las ciudades del mundo que desees ver, donde mediante un buscador puedes ingresar la ciudad y te mostrará las condiciones climáticas, radiación uv, humedad, velocidad del viento, hora y los siguientes 7 días de clima.',
    imgUrl: "/videos/sk8ter.webp",
    videoUrl: "/videos/sk8ter.mp4",
    githubUrl: "https://github.com/Mcarrascot/Dashboard",
    websiteUrl: "https://mcarrascot.github.io/Dashboard/",
  },
  {
    icon: <ShopApiSVG />,
    title: "Los pollos hermanos",
    subtitle: "Restaurante React App",
    technologies: [
      {
        name: "JavaScript",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <ExpressSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <MongoDBSVG
            color="#47A248"
            size={16}
          />
        ),
      },
      {
        name: "Mongoose",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      },
      {
        name: "Swagger",
        icon: (
          <SwaggerSVG
            color="#85EA2D"
            size={16}
          />
        ),
      },
    ],
    description:
      'En este proyecto se construyó una app restaurante utilizando react, vite, bootstrap, html y css. Para mi aplicación de restaurante decidí crear una website para el restaurante Los Pollos Hermanos basado en el programa de televisión Breaking Bad.',
    imgUrl: "/videos/shop-api.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Mcarrascot/restaurante",
    websiteUrl: "https://mcarrascot.github.io/restaurante/",
  },
];
