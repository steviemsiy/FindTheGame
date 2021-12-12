import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.bURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('startgroup');
  this.route('group-list');
  this.route('show-group', { path: '/show-group/:groupid'});
  this.route('game-list');
  this.route('show-game', { path: 'show-games/:gameid'});
});

export default Router;
