import { Manga } from '../types';

export const mangasData: Manga[] = [
  {
    id: '1',
    title: {
      fr: 'L\'Aventure Mystique',
      en: 'Mystic Adventure'
    },
    description: {
      fr: 'Un jeune héros part à la découverte d\'un monde fantastique rempli de magie et de créatures extraordinaires. Une épopée époustouflante qui vous tiendra en haleine.',
      en: 'A young hero embarks on discovering a fantastic world filled with magic and extraordinary creatures. A breathtaking epic that will keep you on the edge of your seat.'
    },
    cover: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Akira Yamamoto',
    status: 'ongoing',
    genres: ['Fantasy', 'Adventure', 'Action'],
    chapters: [
      {
        id: '1-1',
        mangaId: '1',
        number: 1,
        title: { fr: 'Le Début du Voyage', en: 'The Journey Begins' },
        pages: [
          'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        releaseDate: '2024-01-15',
        language: 'fr'
      },
      {
        id: '1-2',
        mangaId: '1',
        number: 2,
        title: { fr: 'Première Rencontre', en: 'First Encounter' },
        pages: [
          'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        releaseDate: '2024-01-22',
        language: 'fr'
      }
    ]
  },
  {
    id: '2',
    title: {
      fr: 'École des Héros',
      en: 'Hero Academy'
    },
    description: {
      fr: 'Dans une école spécialisée, de jeunes étudiants apprennent à maîtriser leurs pouvoirs surnaturels pour devenir les héros de demain.',
      en: 'In a specialized school, young students learn to master their supernatural powers to become tomorrow\'s heroes.'
    },
    cover: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Mei Tanaka',
    status: 'ongoing',
    genres: ['School', 'Supernatural', 'Action'],
    chapters: [
      {
        id: '2-1',
        mangaId: '2',
        number: 1,
        title: { fr: 'Premier Jour', en: 'First Day' },
        pages: [
          'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        releaseDate: '2024-01-10',
        language: 'fr'
      }
    ]
  },
  {
    id: '3',
    title: {
      fr: 'Samurai Moderne',
      en: 'Modern Samurai'
    },
    description: {
      fr: 'Un ancien samurai se réveille dans le monde moderne et doit s\'adapter tout en préservant l\'honneur de ses ancêtres.',
      en: 'An ancient samurai awakens in the modern world and must adapt while preserving the honor of his ancestors.'
    },
    cover: 'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Hiroshi Sato',
    status: 'completed',
    genres: ['Historical', 'Drama', 'Action'],
    chapters: [
      {
        id: '3-1',
        mangaId: '3',
        number: 1,
        title: { fr: 'Le Réveil', en: 'The Awakening' },
        pages: [
          'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        releaseDate: '2024-01-01',
        language: 'fr'
      },
      {
        id: '3-2',
        mangaId: '3',
        number: 2,
        title: { fr: 'Nouveau Monde', en: 'New World' },
        pages: [
          'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        releaseDate: '2024-01-08',
        language: 'fr'
      }
    ]
  }
];