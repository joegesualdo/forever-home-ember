var Dog = DS.Model.extend({
  name: DS.attr('string'),
   age: DS.attr('number')
});

// NOTE: Must have id property for fixtures
Dog.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'wooo',
      age: 11
    },
    {
      id: 2,
      name: 'yyyyy',
      age: 33
    }
  ]
});
export default Dog;
