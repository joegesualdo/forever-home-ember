var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('dogs', function(){
    this.route('show', {path: 'dog_id'});
  });
});

export default Router;
