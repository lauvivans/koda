import type { ComponentOptions } from "vue";
import ClassDiagramUML from "./blog/class-diagram-UML.mdx";
import EveryEngineer from "./blog/every-engineer-is-a-writer.mdx";

const posts: {
  id: string;
  title: string;
  published: string;
  updated: string;
  post: ComponentOptions;
}[] = [
  {
    id: "class-diagram-uml-distilled",
    title:
      "UML distilled, a brief guide to the standard Object Modeling Language: Class Diagram",
    published: "jun 2025",
    updated: "20 aug 2026",
    post: ClassDiagramUML,
  },
  {
    id: "every–engineer-is-a-writer",
    title:
      "Every engineer is also a writer",
    published: "28 aug 2026",
    updated: "28 aug 2026",
    post: EveryEngineer,
  },
];

export default posts;
