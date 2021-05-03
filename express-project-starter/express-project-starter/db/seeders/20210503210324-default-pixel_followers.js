'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */

    return queryInterface.bulkInsert('Pixel_Followers', [
      { pixel_following_id: "1", pixel_follower_id: "6" },
      { pixel_following_id: "1", pixel_follower_id: "7" },
      { pixel_following_id: "1", pixel_follower_id: "8" },
      { pixel_following_id: "2", pixel_follower_id: "1" },
      { pixel_following_id: "2", pixel_follower_id: "6" },
      { pixel_following_id: "2", pixel_follower_id: "5" },
      { pixel_following_id: "3", pixel_follower_id: "1" },
      { pixel_following_id: "3", pixel_follower_id: "2" },
      { pixel_following_id: "3", pixel_follower_id: "5" },
      { pixel_following_id: "4", pixel_follower_id: "1" },
      { pixel_following_id: "4", pixel_follower_id: "2" },
      { pixel_following_id: "4", pixel_follower_id: "3" },
      { pixel_following_id: "5", pixel_follower_id: "2" },
      { pixel_following_id: "5", pixel_follower_id: "3" },
      { pixel_following_id: "5", pixel_follower_id: "4" },
      { pixel_following_id: "6", pixel_follower_id: "3" },
      { pixel_following_id: "6", pixel_follower_id: "4" },
      { pixel_following_id: "6", pixel_follower_id: "5" },
      { pixel_following_id: "7", pixel_follower_id: "4" },
      { pixel_following_id: "7", pixel_follower_id: "6" },
      { pixel_following_id: "7", pixel_follower_id: "8" },
      { pixel_following_id: "8", pixel_follower_id: "7" },
      { pixel_following_id: "8", pixel_follower_id: "9" },
      { pixel_following_id: "8", pixel_follower_id: "10" },
      { pixel_following_id: "9", pixel_follower_id: "7" },
      { pixel_following_id: "9", pixel_follower_id: "8" },
      { pixel_following_id: "9", pixel_follower_id: "10" },
      { pixel_following_id: "10", pixel_follower_id: "9" },
      { pixel_following_id: "10", pixel_follower_id: "11" },
      { pixel_following_id: "10", pixel_follower_id: "12" },
      { pixel_following_id: "11", pixel_follower_id: "9" },
      { pixel_following_id: "11", pixel_follower_id: "10" },
      { pixel_following_id: "11", pixel_follower_id: "12" },
      { pixel_following_id: "12", pixel_follower_id: "11" },
      { pixel_following_id: "12", pixel_follower_id: "13" },
      { pixel_following_id: "12", pixel_follower_id: "14" },
      { pixel_following_id: "13", pixel_follower_id: "11" },
      { pixel_following_id: "13", pixel_follower_id: "12" },
      { pixel_following_id: "13", pixel_follower_id: "14" },
      { pixel_following_id: "14", pixel_follower_id: "13" },
      { pixel_following_id: "14", pixel_follower_id: "15" },
      { pixel_following_id: "14", pixel_follower_id: "16" },
      { pixel_following_id: "15", pixel_follower_id: "13" },
      { pixel_following_id: "15", pixel_follower_id: "14" },
      { pixel_following_id: "15", pixel_follower_id: "16" },
      { pixel_following_id: "16", pixel_follower_id: "15" },
      { pixel_following_id: "16", pixel_follower_id: "17" },
      { pixel_following_id: "16", pixel_follower_id: "18" },
      { pixel_following_id: "17", pixel_follower_id: "15" },
      { pixel_following_id: "17", pixel_follower_id: "16" },
      { pixel_following_id: "17", pixel_follower_id: "18" },
      { pixel_following_id: "18", pixel_follower_id: "17" },
      { pixel_following_id: "18", pixel_follower_id: "19" },
      { pixel_following_id: "18", pixel_follower_id: "20" },
      { pixel_following_id: "19", pixel_follower_id: "17" },
      { pixel_following_id: "19", pixel_follower_id: "18" },
      { pixel_following_id: "19", pixel_follower_id: "20" },
      { pixel_following_id: "20", pixel_follower_id: "19" },
      { pixel_following_id: "20", pixel_follower_id: "21" },
      { pixel_following_id: "20", pixel_follower_id: "22" },
      { pixel_following_id: "21", pixel_follower_id: "19" },
      { pixel_following_id: "21", pixel_follower_id: "20" },
      { pixel_following_id: "21", pixel_follower_id: "22" },
      { pixel_following_id: "22", pixel_follower_id: "21" },
      { pixel_following_id: "22", pixel_follower_id: "23" },
      { pixel_following_id: "22", pixel_follower_id: "24" },
      { pixel_following_id: "23", pixel_follower_id: "21" },
      { pixel_following_id: "23", pixel_follower_id: "22" },
      { pixel_following_id: "23", pixel_follower_id: "24" },
      { pixel_following_id: "24", pixel_follower_id: "23" },
      { pixel_following_id: "24", pixel_follower_id: "25" },
      { pixel_following_id: "24", pixel_follower_id: "26" },
      { pixel_following_id: "25", pixel_follower_id: "23" },
      { pixel_following_id: "25", pixel_follower_id: "24" },
      { pixel_following_id: "25", pixel_follower_id: "26" },
      { pixel_following_id: "26", pixel_follower_id: "25" },
      { pixel_following_id: "26", pixel_follower_id: "27" },
      { pixel_following_id: "26", pixel_follower_id: "28" },
      { pixel_following_id: "27", pixel_follower_id: "25" },
      { pixel_following_id: "27", pixel_follower_id: "26" },
      { pixel_following_id: "27", pixel_follower_id: "28" },
      { pixel_following_id: "28", pixel_follower_id: "27" },
      { pixel_following_id: "28", pixel_follower_id: "29" },
      { pixel_following_id: "28", pixel_follower_id: "30" },
      { pixel_following_id: "29", pixel_follower_id: "27" },
      { pixel_following_id: "29", pixel_follower_id: "28" },
      { pixel_following_id: "29", pixel_follower_id: "30" },
      { pixel_following_id: "30", pixel_follower_id: "29" },
      { pixel_following_id: "30", pixel_follower_id: "31" },
      { pixel_following_id: "30", pixel_follower_id: "32" },
      { pixel_following_id: "31", pixel_follower_id: "29" },
      { pixel_following_id: "31", pixel_follower_id: "30" },
      { pixel_following_id: "31", pixel_follower_id: "32" },
      { pixel_following_id: "32", pixel_follower_id: "31" },
      { pixel_following_id: "32", pixel_follower_id: "33" },
      { pixel_following_id: "32", pixel_follower_id: "34" },
      { pixel_following_id: "33", pixel_follower_id: "31" },
      { pixel_following_id: "33", pixel_follower_id: "32" },
      { pixel_following_id: "33", pixel_follower_id: "34" },
      { pixel_following_id: "34", pixel_follower_id: "33" },
      { pixel_following_id: "34", pixel_follower_id: "35" },
      { pixel_following_id: "34", pixel_follower_id: "36" },
      { pixel_following_id: "35", pixel_follower_id: "33" },
      { pixel_following_id: "35", pixel_follower_id: "34" },
      { pixel_following_id: "35", pixel_follower_id: "36" },
      { pixel_following_id: "36", pixel_follower_id: "35" },
      { pixel_following_id: "36", pixel_follower_id: "37" },
      { pixel_following_id: "36", pixel_follower_id: "38" },
      { pixel_following_id: "37", pixel_follower_id: "35" },
      { pixel_following_id: "37", pixel_follower_id: "36" },
      { pixel_following_id: "37", pixel_follower_id: "38" },
      { pixel_following_id: "38", pixel_follower_id: "37" },
      { pixel_following_id: "38", pixel_follower_id: "39" },
      { pixel_following_id: "38", pixel_follower_id: "40" },
      { pixel_following_id: "39", pixel_follower_id: "37" },
      { pixel_following_id: "39", pixel_follower_id: "38" },
      { pixel_following_id: "39", pixel_follower_id: "40" },
      { pixel_following_id: "40", pixel_follower_id: "39" },
      { pixel_following_id: "40", pixel_follower_id: "41" },
      { pixel_following_id: "40", pixel_follower_id: "42" },
      { pixel_following_id: "41", pixel_follower_id: "39" },
      { pixel_following_id: "41", pixel_follower_id: "40" },
      { pixel_following_id: "41", pixel_follower_id: "42" },
      { pixel_following_id: "42", pixel_follower_id: "41" },
      { pixel_following_id: "42", pixel_follower_id: "43" },
      { pixel_following_id: "42", pixel_follower_id: "44" },
      { pixel_following_id: "43", pixel_follower_id: "41" },
      { pixel_following_id: "43", pixel_follower_id: "42" },
      { pixel_following_id: "43", pixel_follower_id: "44" },
      { pixel_following_id: "44", pixel_follower_id: "43" },
      { pixel_following_id: "44", pixel_follower_id: "45" },
      { pixel_following_id: "44", pixel_follower_id: "46" },
      { pixel_following_id: "45", pixel_follower_id: "43" },
      { pixel_following_id: "45", pixel_follower_id: "44" },
      { pixel_following_id: "45", pixel_follower_id: "46" },
      { pixel_following_id: "46", pixel_follower_id: "59" },
      { pixel_following_id: "46", pixel_follower_id: "45" },
      { pixel_following_id: "46", pixel_follower_id: "47" },
      { pixel_following_id: "47", pixel_follower_id: "45" },
      { pixel_following_id: "47", pixel_follower_id: "46" },
      { pixel_following_id: "47", pixel_follower_id: "48" },
      { pixel_following_id: "48", pixel_follower_id: "47" },
      { pixel_following_id: "48", pixel_follower_id: "49" },
      { pixel_following_id: "48", pixel_follower_id: "50" },
      { pixel_following_id: "49", pixel_follower_id: "47" },
      { pixel_following_id: "49", pixel_follower_id: "48" },
      { pixel_following_id: "49", pixel_follower_id: "50" },
      { pixel_following_id: "50", pixel_follower_id: "48" },
      { pixel_following_id: "50", pixel_follower_id: "49" },
      { pixel_following_id: "50", pixel_follower_id: "51" },
      { pixel_following_id: "51", pixel_follower_id: "49" },
      { pixel_following_id: "51", pixel_follower_id: "50" },
      { pixel_following_id: "51", pixel_follower_id: "52" },
      { pixel_following_id: "52", pixel_follower_id: "51" },
      { pixel_following_id: "52", pixel_follower_id: "53" },
      { pixel_following_id: "52", pixel_follower_id: "54" },
      { pixel_following_id: "53", pixel_follower_id: "51" },
      { pixel_following_id: "53", pixel_follower_id: "52" },
      { pixel_following_id: "53", pixel_follower_id: "54" },
      { pixel_following_id: "54", pixel_follower_id: "52" },
      { pixel_following_id: "54", pixel_follower_id: "53" },
      { pixel_following_id: "54", pixel_follower_id: "55" },
      { pixel_following_id: "55", pixel_follower_id: "53" },
      { pixel_following_id: "55", pixel_follower_id: "54" },
      { pixel_following_id: "55", pixel_follower_id: "56" },
      { pixel_following_id: "56", pixel_follower_id: "55" },
      { pixel_following_id: "56", pixel_follower_id: "57" },
      { pixel_following_id: "56", pixel_follower_id: "58" },
      { pixel_following_id: "57", pixel_follower_id: "60" },
      { pixel_following_id: "57", pixel_follower_id: "56" },
      { pixel_following_id: "57", pixel_follower_id: "60" },
      { pixel_following_id: "58", pixel_follower_id: "56" },
      { pixel_following_id: "58", pixel_follower_id: "57" },
      { pixel_following_id: "58", pixel_follower_id: "59" },
      { pixel_following_id: "59", pixel_follower_id: "57" },
      { pixel_following_id: "59", pixel_follower_id: "60" },
      { pixel_following_id: "59", pixel_follower_id: "58" },
      { pixel_following_id: "60", pixel_follower_id: "58" },
      { pixel_following_id: "60", pixel_follower_id: "55" },
      { pixel_following_id: "60", pixel_follower_id: "59" }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
