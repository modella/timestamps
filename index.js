module.exports = timestamps;

function timestamps(createdAtField, updatedAtField) {
  if(typeof createdAtField === 'function') {
    return plugin('createdAt', 'updatedAt', createdAtField);
  }
  else {
    createdAtField = createdAtField || 'createdAt';
    updatedAtField = updatedAtField || 'updatedAt';
    return plugin.bind(null, createdAtField, updatedAtField);
  }
}

function plugin(createdAtField, updatedAtField, Model) {
  Model.attr(createdAtField, { type: 'date' });
  Model.attr(updatedAtField, { type: 'date' });

  Model.on('saving', function(instance, done){
    var now = new Date();

    if(instance.isNew()) {
      instance[createdAtField](now);
    }

    instance[updatedAtField](now);

    if(done) done();
  });
}
