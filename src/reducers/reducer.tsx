import { StoreType ,ActionType} from '../types/type'


const initialState :StoreType= {
    searchValue:'',
    genrevalue:'',
    languageValue:'',
    sortValue:'popularity',
    movieOrTv:'movie',
    dClass:'border bg-dark text-light border-dark col-md-6 p-2',
    lClass:'border bg-light text-dark border-dark col-md-6 p-2',
    mClass:'border bg-dark text-light border-dark col-md-6 p-2',
    tClass:'border bg-light text-dark border-dark col-md-6 p-2',
    list:[
        {
          "popularity": 167.729,
          "vote_count": 3823,
          "video": false,
          "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          "id": 419704,
          "adult": false,
          "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
          "original_language": "en",
          "original_title": "Ad Astra",
          "genre_ids": [
            18,
            878
          ],
          "title": "Ad Astra",
          "vote_average": 6.1,
          "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
          "release_date": "2019-09-17"
        },
        {
          "popularity": 150.494,
          "vote_count": 5103,
          "video": false,
          "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
          "id": 181812,
          "adult": false,
          "backdrop_path": "/rLPmRPagGai21OPfGXKmFNkrCyV.jpg",
          "original_language": "en",
          "original_title": "Star Wars: The Rise of Skywalker",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Star Wars: The Rise of Skywalker",
          "vote_average": 6.6,
          "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
          "release_date": "2019-12-18"
        },
        {
          "popularity": 149.518,
          "vote_count": 171,
          "video": false,
          "poster_path": "/9zrbgYyFvwH8sy5mv9eT25xsAzL.jpg",
          "id": 531454,
          "adult": false,
          "backdrop_path": "/jMO1icztaUUEUApdAQx0cZOt7b8.jpg",
          "original_language": "en",
          "original_title": "Eurovision Song Contest: The Story of Fire Saga",
          "genre_ids": [
            35,
            10402
          ],
          "title": "Eurovision Song Contest: The Story of Fire Saga",
          "vote_average": 6.7,
          "overview": "When aspiring musicians Lars and Sigrit are given the opportunity of a lifetime to represent their country at the world's biggest song competition, they finally have a chance to prove that any dream is a dream worth fighting for.",
          "release_date": "2020-06-26"
        },
        {
          "popularity": 105.167,
          "vote_count": 501,
          "video": false,
          "poster_path": "/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
          "id": 475430,
          "adult": false,
          "backdrop_path": "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
          "original_language": "en",
          "original_title": "Artemis Fowl",
          "genre_ids": [
            12,
            14,
            878,
            10751
          ],
          "title": "Artemis Fowl",
          "vote_average": 6,
          "overview": "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
          "release_date": "2020-06-12"
        },
        {
          "popularity": 101.056,
          "vote_count": 8185,
          "video": false,
          "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          "id": 496243,
          "adult": false,
          "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
          "original_language": "ko",
          "original_title": "기생충",
          "genre_ids": [
            35,
            18,
            53
          ],
          "title": "Parasite",
          "vote_average": 8.5,
          "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          "release_date": "2019-05-30"
        },
        {
          "popularity": 106.344,
          "vote_count": 4861,
          "video": false,
          "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          "id": 454626,
          "adult": false,
          "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
          "original_language": "en",
          "original_title": "Sonic the Hedgehog",
          "genre_ids": [
            28,
            35,
            878,
            10751
          ],
          "title": "Sonic the Hedgehog",
          "vote_average": 7.5,
          "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          "release_date": "2020-02-12"
        },
        {
          "popularity": 118.443,
          "vote_count": 13874,
          "video": false,
          "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          "id": 11,
          "adult": false,
          "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
          "original_language": "en",
          "original_title": "Star Wars",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Star Wars",
          "vote_average": 8.2,
          "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
          "release_date": "1977-05-25"
        },
        {
          "popularity": 94.325,
          "vote_count": 18718,
          "video": false,
          "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
          "id": 299536,
          "adult": false,
          "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
          "original_language": "en",
          "original_title": "Avengers: Infinity War",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Avengers: Infinity War",
          "vote_average": 8.3,
          "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
          "release_date": "2018-04-25"
        },
        {
          "popularity": 92.406,
          "vote_count": 13472,
          "video": false,
          "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          "id": 475557,
          "adult": false,
          "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
          "original_language": "en",
          "original_title": "Joker",
          "genre_ids": [
            80,
            18,
            53
          ],
          "title": "Joker",
          "vote_average": 8.2,
          "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          "release_date": "2019-10-02"
        },
        {
          "popularity": 82.054,
          "vote_count": 22871,
          "video": false,
          "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
          "id": 157336,
          "adult": false,
          "backdrop_path": "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
          "original_language": "en",
          "original_title": "Interstellar",
          "genre_ids": [
            12,
            18,
            878
          ],
          "title": "Interstellar",
          "vote_average": 8.3,
          "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
          "release_date": "2014-11-05"
        },
        {
          "popularity": 73.079,
          "vote_count": 26307,
          "video": false,
          "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          "id": 27205,
          "adult": false,
          "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
          "original_language": "en",
          "original_title": "Inception",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Inception",
          "vote_average": 8.3,
          "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
          "release_date": "2010-07-15"
        },
        {
          "popularity": 88.858,
          "vote_count": 35,
          "video": false,
          "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
          "id": 619592,
          "adult": false,
          "backdrop_path": "/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
          "original_language": "en",
          "original_title": "Force of Nature",
          "genre_ids": [
            28,
            18
          ],
          "title": "Force of Nature",
          "vote_average": 5.2,
          "overview": "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
          "release_date": "2020-07-02"
        },
        {
          "popularity": 73.615,
          "vote_count": 2499,
          "video": false,
          "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
          "id": 290859,
          "adult": false,
          "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
          "original_language": "en",
          "original_title": "Terminator: Dark Fate",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Terminator: Dark Fate",
          "vote_average": 6.5,
          "overview": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
          "release_date": "2019-10-23"
        },
        {
          "popularity": 68.698,
          "vote_count": 7706,
          "video": false,
          "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
          "id": 429617,
          "adult": false,
          "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
          "original_language": "en",
          "original_title": "Spider-Man: Far from Home",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Spider-Man: Far from Home",
          "vote_average": 7.5,
          "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
          "release_date": "2019-06-28"
        },
        {
          "popularity": 84.29,
          "vote_count": 25,
          "video": false,
          "poster_path": "/izGiAbtC2lmGk3bbV5t3OowJhtP.jpg",
          "id": 595148,
          "adult": false,
          "backdrop_path": "/eZ8eK0moqUo6Vwq08OK1POfyUF5.jpg",
          "original_language": "en",
          "original_title": "Irresistible",
          "genre_ids": [
            35,
            18
          ],
          "title": "Irresistible",
          "vote_average": 6.7,
          "overview": "A Democratic political consultant helps a retired Marine colonel run for mayor in a small, conservative Wisconsin town.",
          "release_date": "2020-06-26"
        },
        {
          "popularity": 68.991,
          "vote_count": 11853,
          "video": false,
          "poster_path": "/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
          "id": 269149,
          "adult": false,
          "backdrop_path": "/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg",
          "original_language": "en",
          "original_title": "Zootopia",
          "genre_ids": [
            12,
            16,
            35,
            10751
          ],
          "title": "Zootopia",
          "vote_average": 7.7,
          "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          "release_date": "2016-02-11"
        },
        {
          "popularity": 77.213,
          "vote_count": 4747,
          "video": false,
          "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
          "id": 495764,
          "adult": false,
          "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
          "original_language": "en",
          "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
          "genre_ids": [
            28,
            35,
            80
          ],
          "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
          "vote_average": 7.2,
          "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
          "release_date": "2020-02-05"
        },
        {
          "popularity": 74.205,
          "vote_count": 5562,
          "video": false,
          "poster_path": "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
          "id": 530915,
          "adult": false,
          "backdrop_path": "/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
          "original_language": "en",
          "original_title": "1917",
          "genre_ids": [
            28,
            18,
            36,
            10752
          ],
          "title": "1917",
          "vote_average": 7.9,
          "overview": "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
          "release_date": "2019-12-25"
        },
        {
          "popularity": 71.233,
          "vote_count": 13882,
          "video": false,
          "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
          "id": 299534,
          "adult": false,
          "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
          "original_language": "en",
          "original_title": "Avengers: Endgame",
          "genre_ids": [
            28,
            12,
            878
          ],
          "title": "Avengers: Endgame",
          "vote_average": 8.3,
          "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
          "release_date": "2019-04-24"
        },
        {
          "popularity": 78.937,
          "vote_count": 5148,
          "video": false,
          "poster_path": "/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
          "id": 330457,
          "adult": false,
          "backdrop_path": "/pNbmSYUtMd542OATplZIdtSWKyz.jpg",
          "original_language": "en",
          "original_title": "Frozen II",
          "genre_ids": [
            12,
            16,
            10751
          ],
          "title": "Frozen II",
          "vote_average": 7.3,
          "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
          "release_date": "2019-11-20"
        }
      ],
    totalResults:20,
    apiKey: '6b4467d11caf9e77125a5cfa5382ff7a'

  };
  function reducer(state:StoreType = initialState,action:ActionType) {
  
      return state;
    
  }
  export default reducer;