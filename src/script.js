const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destruct object examples

const book = getBook(3);

console.log(book);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//Rest / Spread operations examples
const newGenres = [...genres, "Epic Fantasy"];

console.log(newGenres);

const updatedBook = {
  ...book,
  //New property
  moviePublicationDate: "2021-12-29",
  //Overwriting property
  pages: 1210,
};

console.log(updatedBook);

const allBooks = getBooks();

console.log(allBooks);

let bookList = allBooks
  .filter((x) => x.pages > 100)
  .map((y) => ({
    id: y.id,
    hasMovieAdaptation: y.hasMovieAdaptation,
    publicationDate: y.publicationDate,
    author: y.author,
    title: y.title,
  }));

console.log(bookList);

//BookList objesinden sadece id, hasMovieAdaptation, pages değerlerini obje olarak dönen kodu yazabilir misin?

//BookList objesindeki Title değerlerinde Lord geçen objeleri geri döndüren kodu include ile yazabilir misin ?

console.log(bookList.filter((x) => x.title.includes("Lord")));

console.log(bookList.find((x) => x.id === 2));

//https://dummyjson.com/products URL'sine get isteği atan API fonksiyonunu javascript ile yazabilir misin?

// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((e) => console.log("Error : ", e));

//Promise API Example

function fetchProducts() {
  return fetch("https://dummyjson.com/products/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
      throw error;
    });
}
fetchProducts()
  .then((data) => {
    console.log("API Response:", data);
  })
  .catch((error) => {
    console.error("Error handling API response:", error);
  });

const summary = `${title} a, ${pages}-page long book, ${author} was written and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adaptated as a movie.`;
console.log(summary);

const pagesRange = pages > 1000 ? "Over a thousand" : "less then a thousand";

console.log(pagesRange);

// function getYear(str) {
//   return str.split("-")[0];
// }
const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book is a movie");
//falsy values: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");
console.log(true || "Some string");
console.log(false || "Some string");
console.log(book.translations.spanish);
console.log(book.translations.spanish || "Not Translated");
console.log(book.reviews.librarything?.reviewsCount);
const countWrong = book.reviews.librarything?.reviewsCount || "No data";
console.log(countWrong);
const count = book.reviews.librarything?.reviewsCount ?? "No data";
console.log(count);

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

const totalPages = allBooks.reduce((sum, book) => sum + book.pages, 0);
console.log(totalPages);

const arr = [3, 2, 1, 7, 8, 9];
const sorted = arr.slice().sort((a, b) => a - b);
const sortedDesc = arr.slice().sort((a, b) => b - a);
console.log(sorted);
console.log(sortedDesc);
const sortedByPages = allBooks.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// 1) Add a book object to array
const newBook = { id: 6, title: "Demo", author: "Test" };
const booksAfterAdding = [...allBooks, newBook];
console.log(booksAfterAdding);

// 2) Delete a book object to array
const bookAfterDeleting = booksAfterAdding.filter((x) => x.id !== 3);
console.log(bookAfterDeleting);

// 3) Update a book object to array
const bookAfterUpdate = bookAfterDeleting.map((x) =>
  x.id === 1 ? { ...x, pages: 1222 } : x
);
console.log(bookAfterUpdate);

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);

console.log("Await sonrası çalıştı.");
