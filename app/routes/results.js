import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url= 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=de839dbcf42a488cab04f79da6584165&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
