const MOVIES = [];
let option = 0;
let flag = true;
const MENU = `
  Elija el número correspondiente a la
  acción que desea realizar:
  1 - Agregar una pelicula.
  2 - Ver todas las peliculas.
  3 - Buscar una pelicula.
  4 - Borrar una pelicula.
  9 - Salir.
  `;
const RESPONSES = {
  undefinedValue: "Cannot send value as undefined",
  alreadyExist: "This movie is already exists",
  notExist: "This movie does not exist",
  empty: "The library is empty",
  incorrectOp: "Incorrect option",
};

const showMenu = function () {
  option = parseInt(prompt(MENU));
  let payload;
  console.clear();
  switch (option) {
    case 1:
      request = prompt("Ingrese el nombre de la pelicula");
      payload = payloadNormalize(request);
      addMovie(payload);
      break;
    case 2:
      showAllMovies();
      break;
    case 3:
      request = prompt("Ingrese el nombre de la pelicula");
      payload = payloadNormalize(request);
      getMoviesByFilters(payload);
      break;
    case 4:
      request = prompt("Ingrese el nombre de la pelicula");
      payload = payloadNormalize(request);
      deleteOneMovieByName(payload);
      break;
    case 9:
      flag = false;
      break;
    default:
      alert(RESPONSES.incorrectOp);
  }
};

const addMovie = function (payload) {
  const movieExist = verifyIfMovieExist(payload);
  if (movieExist) {
    console.warn(RESPONSES.alreadyExist);
  } else {
    MOVIES.push(payload);
    console.success(`"${payload}" was added`);
  }
};
const getMoviesByFilters = function (payload) {
  if (!MOVIES.length) {
    console.error(RESPONSES.empty);
  } else {
    const moviesLeaked = MOVIES.filter(function (movie) {
      return movie.includes(payload);
    });
    if (!moviesLeaked.length) {
      console.error(RESPONSES.notExist);
    } else {
      console.success(moviesLeaked);
    }
  }
};
const showAllMovies = function () {
  if (!MOVIES.length) console.warn(RESPONSES.empty);
  MOVIES.forEach(function (movie) {
    console.success(movie);
  });
};
const deleteOneMovieByName = function (payload) {
  if (!MOVIES.length) {
    console.error(RESPONSES.empty);
    return;
  }
  const index = MOVIES.findIndex(function (movie) {
    return movie === payload;
  });
  if (index < 0) {
    console.error(RESPONSES.notExist);
  }
  else {
    MOVIES.splice(index, 1);
    console.success(`${payload} is deleted`)
  }
};
const verifyIfMovieExist = function (movieName) {
  const movieExist = MOVIES.find(function (movie) {
    return movie === movieName;
  });
  return movieExist;
};
const payloadNormalize = function (movieName) {
  const movieNameNormalized = movieName?.trim()?.toLowerCase();
  return movieNameNormalized;
};

while (flag) {
  showMenu();
}
