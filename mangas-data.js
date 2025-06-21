const mangas = [
  {
    id: "bp",
    title: "BoilingPoint",
    author: "LuK R.",
    chapters: [
      {
        id: "bp-1",
        number: 1,
        numPages: 9,   
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
        numPages: 11,
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






const mangas = [
  // Série existante ou nouvel ajout :
  {
    id: "id_unique_de_la_serie",         // exemple : "bp", "el"
    title: "TitreDeLaSerie",             // exemple : "BoilingPoint"
        author: "LuK R.",                // exemple : "LuK R."
    chapters: [
      {
        id: "id_unique_chapitre",        // exemple : "bp-1"
        number: 1,                       // numéro du chapitre
        numPages: 1,                     // nombre de pages
        pages: {
          fr: "/page/serie/chap1/fr/",   // lien vers la version FR
          en: "/page/serie/chap1/en/"    // lien vers la version EN
          // ajoute d'autres langues si besoin
        }
      },
      // Copier/coller ce bloc pour chaque chapitre supplémentaire :
      // {
      //   id: "id_unique_chapitre2",
      //   number: 2,
      //   pages: {
      //     fr: "/page/serie/chap2/fr/",
      //     en: "/page/serie/chap2/en/"
      //   }
      // }
    ]
  },
  // Copier/coller ce bloc pour chaque nouvelle série :
  // {
  //   id: "nouvelle_serie",
  //   title: "TitreNouvelleSerie",
  //   chapters: [
  //     {
  //       id: "nouvelle_serie-1",
  //       number: 1,
  //       pages: {
  //         fr: "/page/nouvelle_serie/chap1/fr/",
  //         en: "/page/nouvelle_serie/chap1/en/"
  //       }
  //     }
  //   ]
  // }
];
