import { Url } from "next/dist/shared/lib/router/router"

export type IPortfolioData = {
  title: string,
  repositoryUrl?: Url,
  url?: Url,
  description: string,
  longDescription?: string,
  technologies?: Array<string>,
  image: string,
  language: "ruby" | "typescript",
  isOpenSource: boolean
}

export const portfolioData: IPortfolioData[] = [{
  title: "leads-enrichment",
  repositoryUrl: "github.com/heitor-silvano/leads-enrichment-and-management",
  description: "Gestão de leads, enriquecimento e classificação por IA",
  longDescription: `Sistema de gestão de leads com enriquecimento de dados e classificação por IA.\n\nUtilizei Ollama para a LLM e gerei uma Mock API para os testes com leads falsos.\n\nToda a aplicação está dockerizada.`,
  technologies: ["typescript", "nest", "vitest"],
  image: "/leads-enrichment.png",
  language: "typescript",
  isOpenSource: true
},
{
  title: "iceberg-as-code",
  url: "https://iceberg-as-code.vercel.app",
  repositoryUrl: "https://github.com/heitor-silvano/iceberg-as-code",
  description: "Monte uma tierlist estilo iceberg programaticamente",
  longDescription: "Esse projeto nasceu para resolver um problema simples: eu queria montar um iceberg de piadas internas com meus amigos, mas notei que, ao fazer isso utilizando Photoshop, acabei duplicando itens em camadas diferentes. \nUm simples Ctrl + F resolveria, mas isso não é possível no Photoshop.\nFiz o que todo bom programador faria: gastei dias resolvendo um problema de poucos minutos, mas também transformei isso em um item do meu portfólio.",
  technologies: ["typescript", "nuxt", "tailwind", "vitest"],
  image: "/iceberg-as-code.png",
  language: "typescript",
  isOpenSource: true
}, {
  title: "pista-nossa",
  description: "Backend do aplicativo que criei com um amigo",
  technologies: ["typescript", "nest", "prisma"],
  image: "/simple-tickets-application.png",
  language: "typescript",
  isOpenSource: false
}, {
  title: "simple-game-project",
  repositoryUrl: "https://github.com/heitor-silvano/SimpleGameExperiment",
  description: "Jogo simples feito para rodar em terminal",
  technologies: ["ruby"],
  image: "/simple-game-project.png",
  language: "ruby",
  isOpenSource: true
}
]