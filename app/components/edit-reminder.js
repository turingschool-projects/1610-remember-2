import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editReminder(model) {
      model.date = model.date || new Date();
      model.save();
      this.sendAction();
    },
    rollbackChanges(model) {
      if(model.get('hasDirtyAttributes')) {
        model.rollbackAttributes();
      }
      this.sendAction();
    }
  }
});
