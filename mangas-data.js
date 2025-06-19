const mangas = [
  {
    id: "bp",
    title: "Boiling Point",
    tag: "Oneshot",
    resume: {
      fr: "Une baston dans un colisée.",
      en: "A brawl in a coliseum."
    },
    chapters: [
      {
        id: "bp-1",  // <-- ajouté
        number: 1,
        title: {
          fr: "BoilingPoint Oneshot",
          en: "BoilingPoint Oneshot"
        },
        path: "reader.html"
      }
    ],
    assets: {
      cover: "assets/cover/BP-cover.png",
      background: "assets/background/BP-bg.png"
    }
  },
  {
    id: "eldorado",
    title: "Eldorado",
    tag: "Serie",
    resume: {
      fr: "Une aventure vers une île légendaire pleine de mystères.",
      en: "An adventure to a legendary island full of secrets."
    },
    chapters: [
      {
        id: "eldorado-1",  // <-- ajouté
        number: 1,
        title: {
          fr: "Départ",
          en: "Departure"
        },
        path: "reader.html"
      },
      {
        id: "eldorado-2",  // <-- ajouté
        number: 2,
        title: {
          fr: "L’île",
          en: "The Island"
        },
        path: "manga-reader.html"
      }
    ],
    assets: {
      cover: "assets/cover/EL-cover.png",
      background: "assets/background/EL-bg.png"
    }
  }
];
