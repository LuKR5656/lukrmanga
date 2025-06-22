const mangas = [
  {
    id: "bp",
    title: "BoilingPoint",
    resume: { fr: "Une baston dans un colisée", en: "A brawl in a coliseum" },
    assets: { background: "assets/background/BP-bg.png" },
    author: "LuK R.",
    isOneshot: true,
    cover: "assets/covers/bp-cover.png",
    chapters: [
      {
        id: "bp-1",
        number: 1,
        numPages: 10,
        pages: {
          fr: "/pages/bp/chap1/fr/",
          en: "/pages/bp/chap1/en/"
        }
      }
    ]
  },
  {
    id: "el",
    title: "Eldorado",
    resume: { fr: "Résumé en français", en: "Résumé anglais" },
    assets: { background: "assets/background/EL-bg.png" },
    author: "LuK R.",
    isOneshot: false,
    cover: "assets/covers/el-cover.png",
    chapters: [
      {
        id: "el-1",
        number: 1,
        numPages: 14,
        pages: {
          fr: "/pages/el/chap1/fr/",
          en: "/pages/el/chap1/en/"
        }
      }
    ]
  }
];

/*
EXEMPLE POUR AJOUTER UNE SÉRIE :
{
  id: "nouvelle_serie",
  title: "TitreNouvelleSerie",
  author: "Auteur...",
  cover: "assets/covers/bp-cover.png",
  chapters: [
    {
      id: "nouvelle_serie-1",
      number: 1,
      numPages: 12,
      pages: {
        fr: "/pages/nouvelle_serie/chap1/fr/",
        en: "/pages/nouvelle_serie/chap1/en/"
      }
    }
  ]
}
*/
