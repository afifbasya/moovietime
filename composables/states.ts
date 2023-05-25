export const useListCategories=()=> {
    const dataCategories =  {
      "genres": [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
      ]
    }
  
    return {
      dataCategories
    }
}

export const useListMovie = () => {
  const upcoming = {
    "dates": {
      "maximum": "2023-06-21",
      "minimum": "2023-05-31"
    },
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
        "genre_ids": [
          10752,
          28,
          53
        ],
        "id": 882569,
        "original_language": "en",
        "original_title": "Guy Ritchie's The Covenant",
        "overview": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
        "popularity": 1365.672,
        "poster_path": "/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
        "release_date": "2023-04-19",
        "title": "Guy Ritchie's The Covenant",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 321
      },
      {
        "adult": false,
        "backdrop_path": "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
        "genre_ids": [
          27,
          35,
          14
        ],
        "id": 649609,
        "original_language": "en",
        "original_title": "Renfield",
        "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "popularity": 674.099,
        "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "release_date": "2023-04-07",
        "title": "Renfield",
        "video": false,
        "vote_average": 7,
        "vote_count": 470
      },
      {
        "adult": false,
        "backdrop_path": "/h1gxz6U2HdDf0AMFXnehz0Muoup.jpg",
        "genre_ids": [
          35,
          12,
          10751
        ],
        "id": 643215,
        "original_language": "fr",
        "original_title": "Astérix & Obélix : L'Empire du Milieu",
        "overview": "Gallic heroes and forever friends Asterix and Obelix journey to China to help Princess Sa See save the Empress and her land from a nefarious prince.",
        "popularity": 327.906,
        "poster_path": "/ifOqT5SmA4ANjmyEacLw3KAFKUd.jpg",
        "release_date": "2023-02-01",
        "title": "Asterix & Obelix: The Middle Kingdom",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 383
      },
      {
        "adult": false,
        "backdrop_path": "/kgATFkG4SDyengNMmCuwmj7igWW.jpg",
        "genre_ids": [
          14,
          28,
          12
        ],
        "id": 455476,
        "original_language": "en",
        "original_title": "Knights of the Zodiac",
        "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
        "popularity": 292.303,
        "poster_path": "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
        "release_date": "2023-04-27",
        "title": "Knights of the Zodiac",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 49
      },
      {
        "adult": false,
        "backdrop_path": "/A077VsMIBBXNvlI5mohGnSiIrfI.jpg",
        "genre_ids": [
          878,
          27,
          35
        ],
        "id": 536554,
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "popularity": 274.906,
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "release_date": "2022-12-28",
        "title": "M3GAN",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 2638
      },
      {
        "adult": false,
        "backdrop_path": "/u0Idv93k1EPYahn1QjJXexbT2g2.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 298618,
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "popularity": 253.24,
        "poster_path": "/6QBJs1e2jWSJSMLVxpMnsfilEuM.jpg",
        "release_date": "2023-06-14",
        "title": "The Flash",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 667538,
        "original_language": "en",
        "original_title": "Transformers: Rise of the Beasts",
        "overview": "A '90s globetrotting adventure that introduces the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.",
        "popularity": 242.808,
        "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        "release_date": "2023-06-06",
        "title": "Transformers: Rise of the Beasts",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/1PRWW60yQparK1I8Soyy9Evf7Dv.jpg",
        "genre_ids": [
          16,
          35,
          10751,
          18,
          12
        ],
        "id": 869626,
        "original_language": "en",
        "original_title": "Marcel the Shell with Shoes On",
        "overview": "Marcel is an adorable one-inch-tall shell who ekes out a colorful existence with his grandmother Connie and their pet lint, Alan. Once part of a sprawling community of shells, they now live alone as the sole survivors of a mysterious tragedy. But when a documentary filmmaker discovers them amongst the clutter of his Airbnb, the short film he posts online brings Marcel millions of passionate fans, as well as unprecedented dangers and a new hope at finding his long-lost family.",
        "popularity": 230.606,
        "poster_path": "/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg",
        "release_date": "2022-06-24",
        "title": "Marcel the Shell with Shoes On",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 274
      },
      {
        "adult": false,
        "backdrop_path": "/jS4z8y70ESrZwmFJubqYuceFtnX.jpg",
        "genre_ids": [
          16,
          28,
          12,
          878
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Miles Morales — Brooklyn's full-time, friendly neighborhood Spider-Man — is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
        "popularity": 269.868,
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man: Across the Spider-Verse",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/T5xXoFqyc9jNXZIbH4Sw0jwWjw.jpg",
        "genre_ids": [
          28,
          80,
          53,
          9648
        ],
        "id": 605886,
        "original_language": "en",
        "original_title": "To Catch a Killer",
        "overview": "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
        "popularity": 270.354,
        "poster_path": "/mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg",
        "release_date": "2023-04-06",
        "title": "To Catch a Killer",
        "video": false,
        "vote_average": 7,
        "vote_count": 166
      },
      {
        "adult": false,
        "backdrop_path": "/a4I481szRmycyreQTLrRe4f4YJe.jpg",
        "genre_ids": [
          80
        ],
        "id": 842544,
        "original_language": "en",
        "original_title": "Transfusion",
        "overview": "Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife.  He is thrusted into the criminal underworld to keep his only son from being taken from him.",
        "popularity": 189.814,
        "poster_path": "/bxh5xCCW9Ynfg6EZJWUkc1zqTnr.jpg",
        "release_date": "2023-01-05",
        "title": "Transfusion",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 165
      },
      {
        "adult": false,
        "backdrop_path": "/bKWFetR4injOJXOGHeLuTD7wHI4.jpg",
        "genre_ids": [
          27,
          53,
          14
        ],
        "id": 994128,
        "original_language": "es",
        "original_title": "Viejos",
        "overview": "An octogenarian named Manuel falls into a state of dementia after the sudden suicide of his wife, sparking a series of paranormal events that will put his family’s lives at risk.",
        "popularity": 165.533,
        "poster_path": "/88f35mGJOIE1nXgst5o4FvEDVzr.jpg",
        "release_date": "2023-04-21",
        "title": "The Elderly",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 15
      },
      {
        "adult": false,
        "backdrop_path": "/wYYVBBK3O8sb7J4WxkRx1bI7Q8c.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 697843,
        "original_language": "en",
        "original_title": "Extraction 2",
        "overview": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
        "popularity": 116.202,
        "poster_path": "/4QAce3OERchPM4vzkpjhKnw6a2N.jpg",
        "release_date": "2023-06-09",
        "title": "Extraction 2",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/svd6fPPsloJKbS72PJJ7xJqTevZ.jpg",
        "genre_ids": [
          878,
          53
        ],
        "id": 942199,
        "original_language": "en",
        "original_title": "Simulant",
        "overview": "Faye attempts to replace her newly deceased husband, Evan, with an android simulant (SIM). Although SIM Evan appears like human Evan in every way, Faye does not feel the same love for SIM Evan as it does for her. SIM Evan tries to win Faye back while at the same time being on-the-run from a government agent chasing down SIMs who have become “conscious” and could potentially be a threat to humankind.",
        "popularity": 96.656,
        "poster_path": "/kmDJhZIq1xnu5ZiMOlb0nHJH1qb.jpg",
        "release_date": "2023-03-29",
        "title": "Simulant",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 54
      },
      {
        "adult": false,
        "backdrop_path": "/igXrblWrU1uaC09VKyquHHSebr.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 717930,
        "original_language": "en",
        "original_title": "Kandahar",
        "overview": "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
        "popularity": 104.422,
        "poster_path": "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
        "release_date": "2023-05-25",
        "title": "Kandahar",
        "video": false,
        "vote_average": 6,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/ztWbwSlQNduTUFomNP2GnTPduFm.jpg",
        "genre_ids": [
          10749,
          18,
          35
        ],
        "id": 758336,
        "original_language": "en",
        "original_title": "Love Again",
        "overview": "Mira Ray, dealing with the loss of her fiancé, sends a series of romantic texts to his old cell phone number… not realizing the number was reassigned to Rob Burns' new work phone. A journalist, Rob is captivated by the honesty in the beautifully confessional texts. When he’s assigned to write a profile of megastar Céline Dion, he enlists her help in figuring out how to meet Mira in person and win her heart.",
        "popularity": 96.715,
        "poster_path": "/yGEiqgynu453hMHxOZYtZlisv95.jpg",
        "release_date": "2023-05-04",
        "title": "Love Again",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 27
      },
      {
        "adult": false,
        "backdrop_path": "/7Yuf6j6N76SfqRWqT0I0ZUjICc2.jpg",
        "genre_ids": [
          16,
          35,
          10751,
          14,
          10749
        ],
        "id": 976573,
        "original_language": "en",
        "original_title": "Elemental",
        "overview": "In a city where fire, water, land, & air residents live together, a fiery young woman & a go-with-the-flow guy will discover something elemental: How much they have in common.",
        "popularity": 75.518,
        "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
        "release_date": "2023-06-14",
        "title": "Elemental",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/ddfGBZiyOhVCAOtffie7AiXVYiE.jpg",
        "genre_ids": [
          27
        ],
        "id": 949423,
        "original_language": "en",
        "original_title": "Pearl",
        "overview": "Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations, and repressions collide.",
        "popularity": 45.919,
        "poster_path": "/ulBLIBqvdnf4H6JBt0OpMCU1ECn.jpg",
        "release_date": "2022-09-16",
        "title": "Pearl",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 720
      },
      {
        "adult": false,
        "backdrop_path": "/2XzuzOuuwoyynm9vu6yOQrhfM36.jpg",
        "genre_ids": [
          35,
          12,
          14
        ],
        "id": 798286,
        "original_language": "en",
        "original_title": "Beau Is Afraid",
        "overview": "A paranoid man embarks on an epic odyssey to get home to his mother.",
        "popularity": 48.273,
        "poster_path": "/wgVkkjigF31r1nZV80uV0xNIoun.jpg",
        "release_date": "2023-04-14",
        "title": "Beau Is Afraid",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 249
      },
      {
        "adult": false,
        "backdrop_path": "/mK0a3t62lM8ho3mmvBWf6NxdWvw.jpg",
        "genre_ids": [
          27,
          9648
        ],
        "id": 532408,
        "original_language": "en",
        "original_title": "The Boogeyman",
        "overview": "Still reeling from the tragic death of their mother, a teenage girl and her younger sister find themselves plagued by a sadistic presence in their house and struggle to get their grieving father to pay attention before it’s too late.",
        "popularity": 46.216,
        "poster_path": "/pYwZdnXVnVxAr7dx4MEK7tTK9gI.jpg",
        "release_date": "2023-06-01",
        "title": "The Boogeyman",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      }
    ],
    "total_pages": 20,
    "total_results": 388
  }

  const popular = {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
        "genre_ids": [
          16,
          10751,
          12,
          14,
          35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 5480.46,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 3347
      },
      {
        "adult": false,
        "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
        "genre_ids": [
          28,
          12,
          80,
          9648,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 4827.412,
        "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 412
      },
      {
        "adult": false,
        "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
        "genre_ids": [
          28,
          10752
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 2926.467,
        "poster_path": "/pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 354
      },
      {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 3390.355,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 8,
        "vote_count": 1758
      },
      {
        "adult": false,
        "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
        "genre_ids": [
          53,
          27,
          14
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 2460.725,
        "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1276
      },
      {
        "adult": false,
        "backdrop_path": "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 640146,
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "popularity": 1998.056,
        "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
        "release_date": "2023-02-15",
        "title": "Ant-Man and the Wasp: Quantumania",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 2874
      },
      {
        "adult": false,
        "backdrop_path": "/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 552688,
        "original_language": "en",
        "original_title": "The Mother",
        "overview": "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
        "popularity": 1849.111,
        "poster_path": "/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
        "release_date": "2023-05-04",
        "title": "The Mother",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 543
      },
      {
        "adult": false,
        "backdrop_path": "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
        "genre_ids": [
          878,
          28,
          18
        ],
        "id": 842675,
        "original_language": "zh",
        "original_title": "流浪地球2",
        "overview": "A prequel to The Wandering Earth.",
        "popularity": 1348.786,
        "poster_path": "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
        "release_date": "2023-01-22",
        "title": "The Wandering Earth II",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 225
      },
      {
        "adult": false,
        "backdrop_path": "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
        "genre_ids": [
          10752,
          28,
          53
        ],
        "id": 882569,
        "original_language": "en",
        "original_title": "Guy Ritchie's The Covenant",
        "overview": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
        "popularity": 1365.672,
        "poster_path": "/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
        "release_date": "2023-04-19",
        "title": "Guy Ritchie's The Covenant",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 321
      },
      {
        "adult": false,
        "backdrop_path": "/mfPfFVhpnGp8bG4IUoBJPUs2xKj.jpg",
        "genre_ids": [
          878,
          28,
          12,
          10751
        ],
        "id": 620705,
        "original_language": "en",
        "original_title": "Crater",
        "overview": "After the death of his father, a boy growing up on a lunar mining colony takes a trip to explore a legendary crater, along with his four best friends, prior to being permanently relocated to another planet.",
        "popularity": 1264.84,
        "poster_path": "/n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg",
        "release_date": "2023-05-12",
        "title": "Crater",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 105
      },
      {
        "adult": false,
        "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
        "genre_ids": [
          27,
          53,
          14
        ],
        "id": 758323,
        "original_language": "en",
        "original_title": "The Pope's Exorcist",
        "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
        "popularity": 1360.857,
        "poster_path": "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
        "release_date": "2023-04-05",
        "title": "The Pope's Exorcist",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1148
      },
      {
        "adult": false,
        "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "popularity": 1383.714,
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "release_date": "2023-05-03",
        "title": "Guardians of the Galaxy Vol. 3",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1516
      },
      {
        "adult": false,
        "backdrop_path": "/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 1299.916,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 8148
      },
      {
        "adult": false,
        "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
        "genre_ids": [
          35,
          28,
          14
        ],
        "id": 594767,
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "popularity": 1155.634,
        "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
        "release_date": "2023-03-15",
        "title": "Shazam! Fury of the Gods",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1704
      },
      {
        "adult": false,
        "backdrop_path": "/cXQmssIyFDWAD84wDy7p2G3QIaQ.jpg",
        "genre_ids": [
          28,
          35,
          10749
        ],
        "id": 868759,
        "original_language": "en",
        "original_title": "Ghosted",
        "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
        "popularity": 991.921,
        "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
        "release_date": "2023-04-18",
        "title": "Ghosted",
        "video": false,
        "vote_average": 7,
        "vote_count": 867
      },
      {
        "adult": false,
        "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
        "genre_ids": [
          18,
          28
        ],
        "id": 677179,
        "original_language": "en",
        "original_title": "Creed III",
        "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
        "popularity": 892.801,
        "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        "release_date": "2023-03-01",
        "title": "Creed III",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1435
      },
      {
        "adult": false,
        "backdrop_path": "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
        "genre_ids": [
          53,
          28,
          80
        ],
        "id": 1102776,
        "original_language": "fr",
        "original_title": "AKA",
        "overview": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
        "popularity": 683.73,
        "poster_path": "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
        "release_date": "2023-04-28",
        "title": "AKA",
        "video": false,
        "vote_average": 7,
        "vote_count": 324
      },
      {
        "adult": false,
        "backdrop_path": "/oGY415S8J0NxVbXKHaEOwns1ZWf.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 507250,
        "original_language": "en",
        "original_title": "Dead Shot",
        "overview": "In the 1970s, a member of the IRA takes over an Active Service Unit in London after his wife is accidentally shot dead in Ireland. The unit's mission is to cause chaos and destruction, while his personal aim is to hunt down his wife’s killer — an SAS captain, who is also hunting him.",
        "popularity": 672.177,
        "poster_path": "/s0Qx9YL1JSpYKm1hu0Ovj0IJ1SN.jpg",
        "release_date": "2023-05-12",
        "title": "Dead Shot",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 16
      },
      {
        "adult": false,
        "backdrop_path": "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
        "genre_ids": [
          27,
          35,
          14
        ],
        "id": 649609,
        "original_language": "en",
        "original_title": "Renfield",
        "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "popularity": 674.099,
        "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "release_date": "2023-04-07",
        "title": "Renfield",
        "video": false,
        "vote_average": 7,
        "vote_count": 470
      },
      {
        "adult": false,
        "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "id": 934433,
        "original_language": "en",
        "original_title": "Scream VI",
        "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
        "popularity": 716.045,
        "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "release_date": "2023-03-08",
        "title": "Scream VI",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1244
      }
    ],
    "total_pages": 38434,
    "total_results": 768671
  }

  const now_playing = {
    "dates": {
      "maximum": "2023-05-30",
      "minimum": "2023-04-12"
    },
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
        "genre_ids": [
          16,
          10751,
          12,
          14,
          35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 5480.46,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 3347
      },
      {
        "adult": false,
        "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
        "genre_ids": [
          28,
          12,
          80,
          9648,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 4827.412,
        "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 412
      },
      {
        "adult": false,
        "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
        "genre_ids": [
          28,
          10752
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 2926.467,
        "poster_path": "/pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 354
      },
      {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 3390.355,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 8,
        "vote_count": 1758
      },
      {
        "adult": false,
        "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
        "genre_ids": [
          53,
          27,
          14
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 2460.725,
        "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1276
      },
      {
        "adult": false,
        "backdrop_path": "/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 552688,
        "original_language": "en",
        "original_title": "The Mother",
        "overview": "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
        "popularity": 1849.111,
        "poster_path": "/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
        "release_date": "2023-05-04",
        "title": "The Mother",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 543
      },
      {
        "adult": false,
        "backdrop_path": "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
        "genre_ids": [
          878,
          28,
          18
        ],
        "id": 842675,
        "original_language": "zh",
        "original_title": "流浪地球2",
        "overview": "A prequel to The Wandering Earth.",
        "popularity": 1348.786,
        "poster_path": "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
        "release_date": "2023-01-22",
        "title": "The Wandering Earth II",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 225
      },
      {
        "adult": false,
        "backdrop_path": "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
        "genre_ids": [
          10752,
          28,
          53
        ],
        "id": 882569,
        "original_language": "en",
        "original_title": "Guy Ritchie's The Covenant",
        "overview": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
        "popularity": 1365.672,
        "poster_path": "/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
        "release_date": "2023-04-19",
        "title": "Guy Ritchie's The Covenant",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 321
      },
      {
        "adult": false,
        "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
        "genre_ids": [
          27,
          53,
          14
        ],
        "id": 758323,
        "original_language": "en",
        "original_title": "The Pope's Exorcist",
        "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
        "popularity": 1360.857,
        "poster_path": "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
        "release_date": "2023-04-05",
        "title": "The Pope's Exorcist",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1148
      },
      {
        "adult": false,
        "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "popularity": 1383.714,
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "release_date": "2023-05-03",
        "title": "Guardians of the Galaxy Vol. 3",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1516
      },
      {
        "adult": false,
        "backdrop_path": "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
        "genre_ids": [
          27,
          35,
          14
        ],
        "id": 649609,
        "original_language": "en",
        "original_title": "Renfield",
        "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "popularity": 674.099,
        "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "release_date": "2023-04-07",
        "title": "Renfield",
        "video": false,
        "vote_average": 7,
        "vote_count": 470
      },
      {
        "adult": false,
        "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "id": 934433,
        "original_language": "en",
        "original_title": "Scream VI",
        "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
        "popularity": 716.045,
        "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "release_date": "2023-03-08",
        "title": "Scream VI",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1244
      },
      {
        "adult": false,
        "backdrop_path": "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
        "genre_ids": [
          12,
          10751,
          14,
          10749
        ],
        "id": 447277,
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "popularity": 773.088,
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "release_date": "2023-05-18",
        "title": "The Little Mermaid",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 74
      },
      {
        "adult": false,
        "backdrop_path": "/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg",
        "genre_ids": [
          16,
          18,
          12,
          14
        ],
        "id": 916224,
        "original_language": "ja",
        "original_title": "すずめの戸締まり",
        "overview": "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
        "popularity": 785.457,
        "poster_path": "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
        "release_date": "2022-11-11",
        "title": "Suzume",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 386
      },
      {
        "adult": false,
        "backdrop_path": "/aRJjCgp4uVUkXhDw8NClesQXbt3.jpg",
        "genre_ids": [
          53,
          28
        ],
        "id": 727340,
        "original_language": "ko",
        "original_title": "헌트",
        "overview": "After a high-ranking North Korean official requests asylum, KCIA Foreign Unit chief Park Pyong-ho and Domestic Unit chief Kim Jung-do are tasked with uncovering a North Korean spy, known as Donglim, who is deeply embedded within their agency. When the spy begins leaking top secret intel that could jeopardize national security, the two units are each assigned to investigate each other.",
        "popularity": 433.149,
        "poster_path": "/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg",
        "release_date": "2022-08-10",
        "title": "Hunt",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 79
      },
      {
        "adult": false,
        "backdrop_path": "/oblUNeHlwV3VsjB5ITMlco5ZSOF.jpg",
        "genre_ids": [
          12,
          14,
          35
        ],
        "id": 493529,
        "original_language": "en",
        "original_title": "Dungeons & Dragons: Honor Among Thieves",
        "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
        "popularity": 552.727,
        "poster_path": "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
        "release_date": "2023-03-23",
        "title": "Dungeons & Dragons: Honor Among Thieves",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1383
      },
      {
        "adult": false,
        "backdrop_path": "/wIb43RlPf5iYeoBAYIfxfhpE8NI.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 1094319,
        "original_language": "en",
        "original_title": "The Best Man",
        "overview": "Mercenaries seize control of a remote resort hotel during a wedding and it's up to the best man, the groom and their drunken best friend to stop the terrorists and save the hostages.",
        "popularity": 687.579,
        "poster_path": "/c9f6mFZqkyz4AD0sxGmynE1pe0v.jpg",
        "release_date": "2023-04-21",
        "title": "The Best Man",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 38
      },
      {
        "adult": false,
        "backdrop_path": "/yx96Xz7ggs7TMmDqAa8G5oJ5ami.jpg",
        "genre_ids": [
          37,
          28
        ],
        "id": 1111140,
        "original_language": "en",
        "original_title": "Two Sinners and a Mule",
        "overview": "Kicked out of a small Western town for sinful behavior, free-spirited Alice and Nora set out for Virginia City to pursue their dream of opening a restaurant. Out on the prairie, they come across an injured bounty hunter named Elden. Hoping to share in the reward, they nurse Elden back to health and help him stalk his prey, Grimes. But as Nora and Alice both develop feelings for Elden, no one notices that Grimes is now on their tail, and the hunters become the hunted…",
        "popularity": 369.383,
        "poster_path": "/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg",
        "release_date": "2023-04-21",
        "title": "Two Sinners and a Mule",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 19
      },
      {
        "adult": false,
        "backdrop_path": "/qUOJGvH8L31HL2b9Q6DGNPGCCI0.jpg",
        "genre_ids": [
          53,
          35,
          80
        ],
        "id": 804150,
        "original_language": "en",
        "original_title": "Cocaine Bear",
        "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "popularity": 388.681,
        "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        "release_date": "2023-02-22",
        "title": "Cocaine Bear",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 1075
      },
      {
        "adult": false,
        "backdrop_path": "/cYyUinLXRbQwE4PAt2mQLTGBqti.jpg",
        "genre_ids": [
          28,
          9648,
          53
        ],
        "id": 876969,
        "original_language": "en",
        "original_title": "Assassin Club",
        "overview": "In this world of contract killers, Morgan Gaines is the best of the best. When Morgan is hired to kill six people around the world, he soon discovers all the targets are also assassins unknowingly hired to kill each other.",
        "popularity": 308.786,
        "poster_path": "/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg",
        "release_date": "2023-02-24",
        "title": "Assassin Club",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 61
      }
    ],
    "total_pages": 92,
    "total_results": 1826
  }

  const reviews = {
    "id": 502356,
    "page": 1,
    "results": [
      {
        "author": "Chris Sawin",
        "author_details": {
          "name": "Chris Sawin",
          "username": "ChrisSawin",
          "avatar_path": "/https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg",
          "rating": 5.0
        },
        "content": "_The Super Mario Bros. Movie_ is like Fruit Stripe Gum. It’s super colorful and eyecatching, but it seems to instantly lose its flavor and charm. The film is visually stunning and Jack Black is outstanding as Bowser. The big action sequences are like big budget versions of the Mario video games playthroughs with little welcome surprises thrown in.\r\n\r\nBut the film is massively unfunny, the characters are extremely flat, and the flimsy writing is about as complex as an unkempt mustache.\r\n\r\n**Full review:** https://boundingintocomics.com/2023/04/06/the-super-mario-bros-movie-review-plunging-rainbow-colored-nostalgia-to-death/",
        "created_at": "2023-04-06T20:38:59.988Z",
        "id": "642f2de32588230098248468",
        "updated_at": "2023-04-06T20:39:00.115Z",
        "url": "https://www.themoviedb.org/review/642f2de32588230098248468"
      },
      {
        "author": "CinemaSerf",
        "author_details": {
          "name": "CinemaSerf",
          "username": "Geronimo1967",
          "avatar_path": "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
          "rating": 6.0
        },
        "content": "I am not the demographic and to be honest this isn't really a film that I was ever going to like either. The story is beyond simple and the game-based animation - though expertly crafted - did absolutely nothing for me as ninety minutes rolled along devoid of characterisations, thrill or much sense of adventure. I got the feeling this was really an outing for \"Mario\", \"Luigi\" and \"Peach\" designed to satisfy the die-hard fans, or the children - or both, but if you were not in on the game from the start then you are unlikely to have become any more engaged by the end of this fungi-fest. It wouldn't be fair to say this is bland - it's not designed to challenge or take risks: it's fun for those who grew up with \"Mario\" et al in their lives and I'm not going to decry that. It's colourful, pacy, and at times quite well written but perhaps it ought to have a rating that says if you are over 12 then you should be advised against it?",
        "created_at": "2023-04-13T13:19:08.627Z",
        "id": "6438014c1d538600f40f4d4e",
        "updated_at": "2023-04-13T13:19:08.722Z",
        "url": "https://www.themoviedb.org/review/6438014c1d538600f40f4d4e"
      },
      {
        "author": "MSB",
        "author_details": {
          "name": "MSB",
          "username": "msbreviews",
          "avatar_path": "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
          "rating": 8.0
        },
        "content": "FULL SPOILER-FREE REVIEW @ https://www.firstshowing.net/2023/review-illuminations-super-mario-bros-movie-left-a-me-so-happy/\r\n\r\n\"The Super Mario Bros. Movie delivers everything I wanted. Packed with fantastic references that will warm the hearts of those who lived and still live with Nintendo and Mario up close. Along with energetic action, dazzling animation and world-building, and iconic music – Brian Tyler's score goes straight into my Spotify playlist. Mario and Co. marked my childhood, and, still today, continue to offer me wonderful memories for life. As a viewer clearly belonging to the target audience, I couldn't have left the cinema more joyful. Ya-hoo!\"\r\n\r\nRating: A-",
        "created_at": "2023-04-14T18:36:26.281Z",
        "id": "64399d2a7ef3810522626d9c",
        "updated_at": "2023-04-14T18:36:26.428Z",
        "url": "https://www.themoviedb.org/review/64399d2a7ef3810522626d9c"
      },
      {
        "author": "rsanek",
        "author_details": {
          "name": "",
          "username": "rsanek",
          "avatar_path": "/https://secure.gravatar.com/avatar/ff26e67aa9c3fa9a5f3add667db55d2e.jpg",
          "rating": 9.0
        },
        "content": "This and Last of Us are two recent movies-from-games that have really impressed me. Saw this in a theatre in Brooklyn, really couldn't ask for a better place to do so.",
        "created_at": "2023-04-17T19:28:48.334Z",
        "id": "643d9df0773941051bf22997",
        "updated_at": "2023-04-17T19:28:48.413Z",
        "url": "https://www.themoviedb.org/review/643d9df0773941051bf22997"
      },
      {
        "author": "Nathan",
        "author_details": {
          "name": "Nathan",
          "username": "TitanGusang",
          "avatar_path": "/yHGV91jVzmqpFOtRSHF0avBZmPm.jpg",
          "rating": 7.0
        },
        "content": "The Super Mario Bros. Movie is a fun ride through the iconic world of Mario. The screenplay is admittedly very bare bones, and the characters lack depth, but the film still manages to capture the essence of the beloved video game franchise. The writers do not attempt to do anything beyond create a narrative that intentionally puts our characters in worlds and areas that are instantly recognizable to the audience. This makes the film feel like a Mario game come to life so that audiences can say “that is like Mario Kart or Super Smash Bros.” The movie pacing flies at a breakneck speed, and I felt that this movie could have benefited from a slightly longer runtime to flesh out the story and characters a bit more.\r\n\r\nI was initially nervous about how the voice acting would hold up, but I was pleasantly surprised. Chris Pratt's voice as Mario is not over the top, which works well. It would have been extremely annoying to hear the super Italian Mario accent for a full hour and thirty minutes. Jack Black's portrayal of Bowser steals the show and was the best of the film. Anna Taylor Joy and Seth Rogan were good as Princess Peach and Donkey Kong, although I think Rogan may have injected a bit too much of himself in the character.\r\n\r\nThe direction of the film is solid, with great action set pieces and creative camera angles that make the action feel exciting and dynamic. The animation is stunning, with the characters and world directly designed off the games, but with more polish and details than ever before. The lighting is beautiful, with the bright lights of Rainbow Road and the dark, fiery flames of Bowser standing out as highlights.\r\n\r\nOverall, The Super Mario Bros. Movie may not be the deepest or most complex film, but it is a good time for fans of the Mario franchise. The movie captures the fun and whimsy tone of the games and brings it to life on the big screen. While the comedy may not hit every mark, the voice acting, and direction make up for it. I am excited to see where this film series goes next.\r\n\r\nScore: 72%\r\nVerdict: Good",
        "created_at": "2023-05-16T15:48:56.525Z",
        "id": "6463a5e8e3fa2f0103a28207",
        "updated_at": "2023-05-16T15:48:56.578Z",
        "url": "https://www.themoviedb.org/review/6463a5e8e3fa2f0103a28207"
      }
    ],
    "total_pages": 1,
    "total_results": 5
  }

  return {
    upcoming, popular, now_playing, reviews
  }
}