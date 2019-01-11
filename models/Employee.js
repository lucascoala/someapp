// Employee.js
'use strict';
import Bookshelf from '../bookshelf';

class Author extends Bookshelf.Model{
get tableName() {
    return 'employees';
  };
books() {
    return this.hasMany('Book');
  };
};
export default Bookshelf.model('Employee', Employee);