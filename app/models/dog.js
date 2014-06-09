var Dog = DS.Model.extend({
  name:  DS.attr('string'),
  age:   DS.attr('number'),
  photo: DS.attr('string'),
  sex: DS.attr('string'),
  weight: DS.attr('number'),
  color: DS.attr('string')
});

// NOTE: Must have id property for fixtures
Dog.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'wooo',
      age: 11,
      sex: 'male',
      weight: 222,
      color: 'brown',
      photo: 'http://static.tumblr.com/fa9aa1e6ba8174e5a1ab749bc864c450/msnzs6u/vNems3yyx/tumblr_static_this-is-a-best-colletion-of-cute-dog-pictures-2013_7_1_.jpg'
    },
    {
      id: 2,
      name: 'yyyyy',
      age: 33,
      sex: 'female',
      weight: 40,
      color: 'black',
      photo: 'http://www.takequickbreak.com/wp-content/uploads/2013/08/cute-dog-1920x1200.jpg'
    },
    {
      id: 3,
      name: 'Penny',
      age: 4,
      sex: 'female',
      weight: 15,
      color: 'white',
      photo: 'http://images2.fanpop.com/image/photos/10500000/Pretty-Kitty-Wallpaper-cats-10547164-1600-1200.jpg'
    }
  ]
});
export default Dog;
