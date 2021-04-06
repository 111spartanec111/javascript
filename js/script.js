
//   2.12

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


//   2.15

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {     /* Цикл выполняется 2 раза */
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''); 
        /* Условие -Если a-не равно нулю и b-не равно нулю и а-не равно пустой строке и b-не равно пустой строке
         и a-длинна строки меньше 50  то в personalMovieDB в [a] передаётся значение b и косноль выдаёт done */
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {   
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;  // Энкремент для возврата цикла на 1 раз назад, что бы по новой выполнить цикл 
        }    
    }
}

// rememberMyFilms();


function detectPersonalLevel() { 
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Просмотрено нормально');
    } else if (personalMovieDB.count >= 30) {
        console.log('Просмотрено много');
    } else {
        console.log('Oshibka!!');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {                       /*  ! - отрицание */
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {   
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жарн под номером ${i} `);   /* i - 1 что бы записывалось в массив с 0 , а не с 1 */
    }
}

writeYourGenres();