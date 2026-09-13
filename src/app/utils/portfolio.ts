type IPortfolioData = Array<{
  title: string, description: string, image: string, language: "ruby" | "typescript"
}>

export const portfolioData: IPortfolioData = [{
  title: "iceberg-as-code",
  description: "Monte uma imagem iceberg programaticamente",
  image: "/iceberg-as-code.png",
  language: "typescript"
}, {
  title: "simple-game-project",
  description: "Jogo simples feito para rodar em terminal",
  image: "/simple-game-project.png",
  language: "ruby"
}, {
  title: "pista-nossa",
  description: "Backend do aplicativo que criei com um amigo",
  image: "/simple-tickets-application.png",
  language: "typescript"
},
]