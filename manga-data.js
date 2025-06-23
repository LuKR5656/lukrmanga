const mangas = [
  {
    id: "bp",
    title: "BoilingPoint",
    resume: { fr: "Une baston dans un colisée", en: "A brawl in a coliseum" },
    assets: { background: "assets/background/bp-bg.webp" },
    author: "LuK R.",
    isOneshot: true,
    cover: "assets/cover/bp-cover.png",
    chapters: [
      {
        id: "bp-1",
        number: 1,
        pages: {
          fr: "/pages/bp/chap1/fr/",
          en: "/pages/bp/chap1/en/"
        },
        numPages: 9
      }
    ]
  },
  {
    id: "el",
    title: "Eldorado",
    resume: { fr: "Résumé en français", en: "Résumé anglais" },
    assets: { background: "assets/background/el-bg.webp" },
    author: "LuK R.",
    isOneshot: false,
    cover: "assets/cover/el-cover.png",
    chapters: [
      {
        id: "el-1",
        title: { fr: "Chapitre 1", en: "Chapter 1" },
        pages: {
          fr: "pages/el/chap1/fr/",
          en: "pages/el/chap1/en/"
        },
        numPages: 11 // le nombre réel d'images 
      },
      {
        id: "el-2",
        title: { fr: "Chapitre 2", en: "Chapter 2" },
        pages: {
          fr: "pages/el/chap1/fr/",
          en: "pages/el/chap1/en/"
        },
        numPages: 11 // le nombre réel d'images 
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
