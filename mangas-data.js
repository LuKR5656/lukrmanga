const mangas = [
  {
    id: "bp", // Identifiant utilisé dans l'URL ?manga=bp
    title: "Boiling Point", // Titre du manga affiché
    tag: "Oneshot", // Oneshot ou Serie
    resume: {
      fr: "Une baston dans un colisée.",
      en: "A brawl in a coliseum."
    },
    chapters: [
      {
        number: 1,
        title: {
          fr: "BoiloingPoint Oneshot",
          en: "BoiloingPoint Oneshot"
        },
        path: "BP/reader.html"
      }
    ],
    assets: {
      cover: "assets/bp-cover.png",      // pour page d'accueil
      background: "assets/bp-background.png" // pour le header animé du hub
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
        number: 1,
        title: {
          fr: "Départ",
          en: "Departure"
        },
        path: "eldorado/chap1/reader.html"
      },
      {
        number: 2,
        title: {
          fr: "L’île",
          en: "The Island"
        },
        path: "eldorado/chap2/reader.html"
      }
    ],
    assets: {
      cover: "assets/eldorado-cover.png",
      background: "assets/eldorado-background.png"
    }
  }
];
