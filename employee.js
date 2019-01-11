var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'awesomeness',
    password : 'lamepassword',
    database : 'employees',
    charset  : 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
export default bookshelf;