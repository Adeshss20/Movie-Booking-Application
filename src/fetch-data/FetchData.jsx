export const FetchData = (setState) => {
  // setState({
  //   loading: true
  // })

  // const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "943573a79dmshf7134885a9ca092p15bfbcjsnb59e1140d7a1",
  //     "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  //   },
  // };

  // fetch(url, options)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setState(data);
  //   })
  //   .catch((error) => console.error("Error fetching data:", error));

  const temp = [
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top32",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      timing: [
        {
          start_time: "09:30",
          end_time: "12:40",
        },
        {
          start_time: "13:15",
          end_time: "15:00",
        },
        {
          start_time: "12:30",
          end_time: "15:30",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 33,
      title: "Harakiri",
      description:
        "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      genre: ["Action", "Drama", "Mystery"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top33",
      year: 1962,
      imdbid: "tt0056058",
      imdb_link: "https://www.imdb.com/title/tt0056058",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 34,
      title: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      genre: ["Adventure", "Comedy", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.5",
      id: "top34",
      year: 1985,
      imdbid: "tt0088763",
      imdb_link: "https://www.imdb.com/title/tt0088763",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 35,
      title: "The Pianist",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      genre: ["Biography", "Drama", "Music"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
      rating: "8.5",
      id: "top35",
      year: 2002,
      imdbid: "tt0253474",
      imdb_link: "https://www.imdb.com/title/tt0253474",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top321",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top312",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top2",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top3",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      timing: [
        {
          start_time: "15:45",
          end_time: "17:51",
        },
        {
          start_time: "16:55",
          end_time: "19:01",
        },
        {
          start_time: "18:30",
          end_time: "20:36",
        },
        {
          start_time: "20:00",
          end_time: "22:06",
        },
        {
          start_time: "22:00",
          end_time: "00:06",
        },
        {
          start_time: "23:35",
          end_time: "01:41",
        },
      ],
    },
  ];

  temp.forEach(movie => {
    const FinalTiming = movie.timing.reduce((timingList, time) => {
        timingList.push( `${time.start_time}-${time.end_time}`)
        return timingList;
    },[])
    // console.log(FinalTiming);
    
    movie.timing = FinalTiming
  })
 

  setState({
    movieData: temp,
  });
  // console.log(temp);
};
