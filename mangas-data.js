// Exemple simplifié, mais extensible
const mangas = [
  {
    id: "bp",
    title: "BoilingPoint",
    chapters: [
      {
        id: "bp-1",
        number: 1,
        pages: {
          fr: "/page/bp/chap1/fr/",
          en: "/page/bp/chap1/en/"
        }
      }
    ]
  },
  {
    id: "el",
    title: "Eldorado",
    chapters: [
      {
        id: "el-1",
        number: 1,
        pages: {
          fr: "/page/el/chap1/fr/",
          en: "/page/el/chap1/en/"
        }
      },
    {
       id: "el-2",
       number: 2,
       pages: {
         fr: "/page/el/chap2/fr/",
         en: "/page/el/chap2/en/"
        }
      }
    ] 
  }
];
