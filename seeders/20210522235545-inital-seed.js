'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Post",[{
      "post_name": "Get Rich Slowly",
      "post_content": "Get Rich Slowly contains thousands of articles dedicated to boosting people's financial IQ.",
      "post_author": "Travis Mckie",
      "date_created":new Date(),
      "user_id":1
  }, {
      "post_name": "Get Rich ",
      "post_content": "We Are Already Rich to boosting people's financial IQ.",
      "post_author": "Antonio Reid", 
      "date_created":new Date(),
     
      "user_id":1

  }, {
      "post_name": "Wheres the money ",
      "post_content": "Get Rich Slowly contains thousands of articles dedicated to boosting people's financial IQ.",
      "post_author": "Travis Mckie",   
      "date_created":new Date(),
   
      "user_id":1

  }, {
      "post_name": "Wheres the money ",
      "post_content": "Get Rich Slowly contains thousands of articles dedicated to boosting people's financial IQ.",
      "post_author": "Travis Mckie",   
      "date_created":new Date(),
  
       "user_id":1

  }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
