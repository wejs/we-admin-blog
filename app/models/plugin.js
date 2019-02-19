import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('plugin', 'plugin');
inflector.uncountable('plugin');

export default DS.Model.extend({

});