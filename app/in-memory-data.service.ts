export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    let movies = [
      { id: 1, name: 'Godfather' },
      { id: 2, name: 'The Green Mile' },
      { id: 3, name: 'Forest Gump' },
      { id: 4, name: 'Inception' },
      { id: 5, name: 'The Matrix' },
      { id: 6, name: 'Up' },
      { id: 7, name: 'City of God' },
      { id: 8, name: 'Terminal' },
      { id: 9, name: 'Se7en' },
      { id: 10, name: 'La La Land' }
    ];

    let books = [
      { id: 11, name: 'Mentored By A Millionare' },
      { id: 12, name: 'Lean Startup' },
      { id: 13, name: 'Business Of The 21st Century' },
      { id: 14, name: 'Rich Dad Poor Dad' },
      { id: 15, name: 'The Interen' },
      { id: 16, name: 'Google' },
      { id: 17, name: 'Simple' },
      { id: 18, name: 'JavaScript The Good Parts' },
      { id: 19, name: 'Four Hour Work Week' },
      { id: 20, name: 'How To Win Friends and Influence People' }
    ]

    let musics = [
      { id: 1, name: 'La Vie En Rose' },
      { id: 2, name: 'Georgia On My Mind' },
      { id: 3, name: 'Midnight Train To Georgia' },
      { id: 4, name: 'Ribbon In The Sky' },
      { id: 5, name: 'Summertime' },
      { id: 6, name: 'LOVE' },
      { id: 7, name: 'On Bended Knee' },
      { id: 8, name: 'The Way You Look Tonight' },
      { id: 9, name: 'Everybody Loves Somebody' },
      { id: 10, name: 'Blue Skies' }
    ];
    return { heroes, movies, musics, books };
  }
}
