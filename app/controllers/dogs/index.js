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
     // Filter by male, female, or both
     if (male && female){
       return results;
     } else if (male){
      results = results.filterBy('sex', 'male');
     } else if (female){
      results = results.filterBy('sex', 'female');
     }

     // Filter by age TODO: This is not functioning correctly
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
  
  genderTitle: function(){
    if (this.get('male') && !this.get('female')){
      return 'Male';
    } else if (this.get('female') && !this.get('male')){
      return 'Female';
    } else if (this.get('male') && this.get('female')){
      return 'Male & Female';
    } else {
      return 'Gender';
    }
  }.property('male', 'female'),

  ageTitle: function(){
    return "Age";
    // if (this.get('male') && !this.get('female')){
    //   return 'Male';
    // } else if (this.get('female') && !this.get('male')){
    //   return 'Female';
    // } else if (this.get('male') && this.get('female')){
    //   return 'Male & Female';
    // } else {
    //   return 'Gender';
    // }
  }.property('male', 'female'),
  
  
  // Actions ====================================================
  actions: {
    // Filter actions
    checkMale: function(){
      this.toggleProperty('male');
    },
    checkFemale: function(){
      this.toggleProperty('female');
    },
    checkPuppy: function(){
      this.toggleProperty('puppy');
    },
    checkAdolescent: function(){
      this.toggleProperty('adolescent');
    },
    checkAdult: function(){
      this.toggleProperty('adult');
    },
    checkSenior: function(){
      this.toggleProperty('Senior');
    },

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
