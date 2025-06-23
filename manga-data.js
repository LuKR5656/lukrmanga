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
    resume: { fr: "L'histoire se déroule dans une version fictive de l'Ouest américain du XIXe siècle. Elle suit les aventures de Yeon, un jeune homme cupide qui débarque sur le Nouveau Continent en quête de richesse. Il fait la rencontre de Hana, une jeune femme médecin au caractère ambivalent et propriétaire d'un saloon, ainsi que de Caleb, un jeune garçon espiègle ayant grandi dans les rues boueuses du Far West. Ils entreprennent un voyage à travers la côte Ouest, affrontant et croisant divers personnages au cours de leur périple.
", en: "The story takes place in a made-up version of the Wild West in the 19th century. It follows the adventures of Yeon, a fearless young man who arrives on the new continent in search of wealth. He meets Hana, a young woman with an ambivalent character who is a sawbones and the owner of a saloon, as well as Caleb, a mischievous young boy who has lived on the streets. Together, they embark on a journey across the West Coast, facing various challenges and encountering diverse characters along the way." },
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
      },
      {
        id: "el-3",
        title: { fr: "Chapitre 3", en: "Chapter 3" },
        pages: {
          fr: "pages/el/chap1/fr/",
          en: "pages/el/chap1/en/"
        },
        numPages: 11 // le nombre réel d'images 
      },
      {
        id: "el-4",
        title: { fr: "Chapitre 4", en: "Chapter 4" },
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
