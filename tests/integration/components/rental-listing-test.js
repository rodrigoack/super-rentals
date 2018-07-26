import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true,
  beforeEach: function() {
    this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  }
});

test('should display rental details', function(assert) {
  this.render(hbs`{{rental-listing rental=rental}}`);
  assert.equal(document.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
  assert.equal(document.querySelector('.listing .owner').textContent.trim(), 'Owner: test-owner', 'Owner: test-owner');
});

test('should toggle wide class on click', function(assert) {
  this.render(hbs`{{rental-listing rental=rental}}`);

  assert.notOk(document.querySelector('.image.wide'), 'initially rendered small');

  Ember.run(()=> document.querySelector('.image').click());
  assert.ok(document.querySelector('.image.wide'), 'rendered wide after click');

  Ember.run(()=> document.querySelector('.image').click());
  assert.notOk(document.querySelector('.image.wide'), 'rendered small after second click');
});
