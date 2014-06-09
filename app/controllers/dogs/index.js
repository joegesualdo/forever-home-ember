export default Ember.ArrayController.extend({
  // Filtering ==========================================
  // results represent the results of the filter
  results: function(){

    //Define the search variables
    var searchTerm = this.get('searchTerm'),
        puppy      = this.get('puppy'),
        adolescent = this.get('adolescent'),
        adult      = this.get('adult'),
        senior     = this.get('senior'),
        male       = this.get('male'),
        female     = this.get('female'),
        color      = this.get('color'),
        weightLow  = this.get('weightLow'),
        weightHigh = this.get('weightHigh'),
        results    = this.get('model');

     // Logic for the filtering
     if(searchTerm){
       results = results.filter(function(dog){
         return dog.get('name').toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
       });
     }
     if(color){
       results = results.filter(function(dog){
         return dog.get('color').toLowerCase().indexOf(color.toLowerCase()) > -1;
       });
     }
     if (male){
      results = results.filterBy('sex', 'male');
     }
     if (female){
      results = results.filterBy('sex', 'female');
     }
     if (puppy){
      results = results.filter(function(dog){
        return dog.get('age') < 2;
        });
     }
     if (adolescent){
      results = results.filter(function(dog){
        return dog.get('age') >= 2 && dog.get('age') <= 5;
        });
     }
     if (adult){
      results = results.filter(function(dog){
        return dog.get('age') > 5 && dog.get('age') <= 10;
        });
     }
     if (senior){
      results = results.filter(function(dog){
        return dog.get('age') > 10;
        });
     }
     // Return the results after the filtering logic
     return results;  
  }.property('model', 'searchTerm', 'male', 'female', 'puppy', 'adolescent', 'adult', 'senior', 'color'),
  
  // Actions ====================================================
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
