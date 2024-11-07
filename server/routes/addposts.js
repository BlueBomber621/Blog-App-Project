const Post = require("../models/Post");

function insertPostData() {
  Post.insertMany([
    {
      title: "Ingredients for a PB&J",
      body: `You require:
            2 slices of bread
            Some jelly
            Some peanut butter
            Instructions:
            Apply peanut butter and jelly on bread and stick bread slices together
            Enjoy!`,
    },
    {
      title: "How to Post",
      body: "Can't post :(",
    },
    {
      title: "I'm Blue",
      body: "Da ba dee da ba die da ba dee da ba die",
    },
    {
      title: "Top Twelve Words You Will Find in the Title of This Post",
      body: `1. Top
            2. Twelve
            3. Words
            4. You
            5. Will
            6. Find
            7. In
            8. The
            9. Title
            10. Of
            11. This
            12. Post`,
    },
    {
      title: "First",
      body: "Please believe me this is the first post",
    },
    {
      title: "Sample Text",
      body: "Sample Text",
    },
  ]);
}

module.exports = insertPostData;
