const sampleMoviesData = [
  {
    Id: "1",
    movieDetails: {
      name: "Por tholil",
      genre: ["Drama"],
      summary:
        "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      fullCast: {
        actor: "Tim Robbins",
        actress: "",
        comedian: "",
      },
      releaseDetails: {
        date: 10,
        month: "September",
        year: 1994,
      },
      duration: 142,
      rating: 9.3,
      trailerLink: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
      poster: "/images/movie1.jpg",
    },
  },
  {
    Id: "2",
    movieDetails: {
      name: "Jailer",
      genre: ["Crime", "Drama"],
      summary:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      fullCast: {
        actor: "Marlon Brando",
        actress: "Diane Keaton",
        comedian: "",
      },
      releaseDetails: {
        date: 24,
        month: "March",
        year: 1972,
      },
      duration: 175,
      rating: 9.2,
      trailerLink: "https://www.youtube.com/watch?v=sY1S34973zA",
      poster: "/images/movie2.jpg",
    },
  },
  {
    Id: "3",
    movieDetails: {
      name: "Yani mukattan",
      genre: ["Action", "Crime", "Drama"],
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      fullCast: {
        actor: "Christian Bale",
        actress: "",
        comedian: "",
      },
      releaseDetails: {
        date: 18,
        month: "July",
        year: 2008,
      },
      duration: 152,
      rating: 9.0,
      trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      poster: "/images/movie3.jpg",
    },
  },
  {
    Id: "4",
    movieDetails: {
      name: "Setupathi IPS",
      genre: ["Drama"],
      summary:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      fullCast: {
        actor: "Henry Fonda",
        actress: "",
        comedian: "",
      },
      releaseDetails: {
        date: 10,
        month: "April",
        year: 1957,
      },
      duration: 96,
      rating: 8.9,
      trailerLink: "https://www.youtube.com/watch?v=A7CBKT0PWFA",
      poster: "/images/movie4.jpg",
    },
  },
  {
    Id: "5",
    movieDetails: {
      name: "Varisu",
      genre: ["Biography", "Drama", "History"],
      summary:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      fullCast: {
        actor: "Liam Neeson",
        actress: "Ralph Fiennes",
        comedian: "",
      },
      releaseDetails: {
        date: 4,
        month: "February",
        year: 1994,
      },
      duration: 195,
      rating: 8.9,
      trailerLink: "https://www.youtube.com/watch?v=JdRGC-w9syA",
      poster: "/images/movie5.jpg",
    },
  },

  {
    Id: "6",
    movieDetails: {
      name: "Manadu",
      genre: ["Adventure", "Drama", "Fantasy"],
      summary:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      fullCast: {
        actor: "Elijah Wood",
        actress: "Liv Tyler",
        comedian: "",
      },
      releaseDetails: {
        date: 17,
        month: "December",
        year: 2003,
      },
      duration: 201,
      rating: 8.9,
      trailerLink: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      poster: "/images/movie6.jpg",
    },
  },
  {
    Id: "7",
    movieDetails: {
      name: "Thalaiva",
      genre: ["Crime", "Drama"],
      summary:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      fullCast: {
        actor: "John Travolta",
        actress: "Uma Thurman",
        comedian: "",
      },
      releaseDetails: {
        date: 14,
        month: "October",
        year: 1994,
      },
      duration: 154,
      rating: 8.9,
      trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      poster: "/images/movie7.jpg",
    },
  },
  {
    Id: "8",
    movieDetails: {
      name: "Captan Millar",
      genre: ["Western"],
      summary:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      fullCast: {
        actor: "Clint Eastwood",
        actress: "",
        comedian: "",
      },
      releaseDetails: {
        date: 23,
        month: "December",
        year: 1966,
      },
      duration: 178,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=1aC6oj5Qg4Q",
      poster: "/images/movie8.jpg",
    },
  },
  {
    Id: "9",
    movieDetails: {
      name: "Billa-2",
      genre: ["Drama"],
      summary:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      fullCast: {
        actor: "Brad Pitt",
        actress: "Helena Bonham Carter",
        comedian: "",
      },
      releaseDetails: {
        date: 15,
        month: "October",
        year: 1999,
      },
      duration: 139,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=BdJKm16Co6M",
      poster: "/images/movie9.jpg",
    },
  },
  {
    Id: "10",
    movieDetails: {
      name: "PS-2",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie10.jpg",
    },
  },
  {
    Id: "11",
    movieDetails: {
      name: "Kodiyil oruvan",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie11.jpg",
    },
  },
  {
    Id: "12",
    movieDetails: {
      name: "Mon karatte",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie12.jpg",
    },
  },
  {
    Id: "13",
    movieDetails: {
      name: "Rajini murugan",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie13.jpg",
    },
  },
  {
    Id: "14",
    movieDetails: {
      name: "Vadachennai",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie14.jpg",
    },
  },
  {
    Id: "15",
    movieDetails: {
      name: "Vidutalai",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie15.jpg",
    },
  },
  {
    Id: "16",
    movieDetails: {
      name: "Kala",
      genre: ["Drama", "Romance"],
      summary:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      fullCast: {
        actor: "Tom Hanks",
        actress: "Robin Wright",
        comedian: "",
      },
      releaseDetails: {
        date: 6,
        month: "July",
        year: 1994,
      },
      duration: 142,
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster: "/images/movie16.jpg",
    },
  },
];

export default sampleMoviesData;
