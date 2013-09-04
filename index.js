module.exports = timestamps;

function timestamps(createdAtField, updatedAtField) {
  createdAtField = createdAtField || 'createdAt';
  updatedAtField = updatedAtField || 'updatedAt';
  return function(Model) {
    Model.attr(createdAtField, { type: 'date' });
    Model.attr(updatedAtField, { type: 'date' });
    Model.on('saving', function(instance){
      if (instance.isNew()) instance[createdAtField](new Date);
      instance[updatedAtField](new Date);
    });
  };
}
