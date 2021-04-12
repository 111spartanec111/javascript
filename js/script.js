"use strict";
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



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genre: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() { 
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Просмотрено нормально');
        } else if (personalMovieDB.count >= 30) {
            console.log('Просмотрено много');
        } else {
            console.log('Oshibka!!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {                       /*  ! - отрицание */
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {  
            let genre =  prompt(`Ваш любимый жарн под номером ${i} `);   /* i - 1 что бы записывалось в массив с 0 , а не с 1 */
            
            if (genre === '' || genre == null) {
                console.log('Вы не ввели данные');
                i--;
            } else {
                personalMovieDB.genre[i - 1] = genre;
            }
        }
        personalMovieDB.genre.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

