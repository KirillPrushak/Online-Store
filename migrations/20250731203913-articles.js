// eslint-disable-next-line @typescript-eslint/no-require-imports
const articles = require("./articlesDatabase.json");

module.exports = {
  async up(db) {
    await db.collection("articles").insertOne({
      id: 4,
      img: "/images/articles/article-3.jpeg",
      title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
      text: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
      createdAt: "2025-06-03",
    });
  },

  // async down(db) {},
};
