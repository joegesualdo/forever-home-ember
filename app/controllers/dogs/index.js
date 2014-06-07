export default Ember.ArrayController.extend({
  actions: {
    createDog: function(){
      // Create a new dog
      var dog = this.store.createRecord('dog', {
            name: this.get('dogName'),
            age: this.get('dogAge'),
            photo: this.get('dogPhoto')
          });

      // Persist the new dog
      dog.save();

      // Clear the form
      this.set('dogName', '');
      this.set('dogAge', '');
      this.set('dogPhoto', '');
    }
  }
});
