'use strict';

define('littlebits-frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/group-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/group-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n32:11 - Unexpected console statement. (no-console)\n33:11 - Unexpected console statement. (no-console)\n46:7 - Unexpected console statement. (no-console)\n55:11 - Unexpected console statement. (no-console)\n56:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/create-game.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/create-game.js should pass ESLint\n\n14:7 - Unexpected console statement. (no-console)\n15:7 - Unexpected console statement. (no-console)\n24:11 - Unexpected console statement. (no-console)\n25:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/game-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/game-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/group-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/group-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n15:7 - Unexpected console statement. (no-console)\n16:7 - Unexpected console statement. (no-console)\n25:11 - Unexpected console statement. (no-console)\n26:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/show-game.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/show-game.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)\n7:7 - Unexpected console statement. (no-console)\n20:11 - Unexpected console statement. (no-console)\n21:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/show-group.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/show-group.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)\n7:7 - Unexpected console statement. (no-console)\n20:11 - Unexpected console statement. (no-console)\n21:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/startgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/startgroup.js should pass ESLint\n\n10:7 - Unexpected console statement. (no-console)\n19:11 - Unexpected console statement. (no-console)\n20:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/check-membership.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/check-membership.js should pass ESLint\n\n5:3 - Unexpected console statement. (no-console)\n11:7 - \'result\' is assigned a value but never used. (no-unused-vars)\n12:3 - Unexpected console statement. (no-console)\n21:7 - Unexpected console statement. (no-console)\n22:7 - Unexpected console statement. (no-console)\n35:5 - Unexpected console statement. (no-console)\n38:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('initializers/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/auth-manager.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/constants.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-game.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-game.js should pass ESLint\n\n');
  });

  QUnit.test('routes/game-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/game-list.js should pass ESLint\n\n5:9 - \'items\' is assigned a value but never used. (no-unused-vars)\n6:5 - Unexpected console statement. (no-console)\n8:7 - Unexpected console statement. (no-console)\n11:7 - Unexpected console statement. (no-console)\n12:7 - Unexpected console statement. (no-console)\n16:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/group-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/group-list.js should pass ESLint\n\n21:9 - \'isMember\' is assigned a value but never used. (no-unused-vars)\n22:5 - Unexpected console statement. (no-console)\n24:7 - Unexpected console statement. (no-console)\n26:9 - Unexpected console statement. (no-console)\n36:7 - Unexpected console statement. (no-console)\n37:7 - Unexpected console statement. (no-console)\n40:7 - Unexpected console statement. (no-console)\n41:7 - Unexpected console statement. (no-console)\n45:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n4:5 - \'defaultitems\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass ESLint\n\n');
  });

  QUnit.test('routes/show-game.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/show-game.js should pass ESLint\n\n5:9 - \'items\' is assigned a value but never used. (no-unused-vars)\n6:5 - Unexpected console statement. (no-console)\n8:7 - Unexpected console statement. (no-console)\n11:7 - Unexpected console statement. (no-console)\n12:7 - Unexpected console statement. (no-console)\n16:5 - Unexpected console statement. (no-console)\n17:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/show-group.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/show-group.js should pass ESLint\n\n5:9 - \'items\' is assigned a value but never used. (no-unused-vars)\n6:5 - Unexpected console statement. (no-console)\n8:7 - Unexpected console statement. (no-console)\n11:7 - Unexpected console statement. (no-console)\n12:7 - Unexpected console statement. (no-console)\n16:5 - Unexpected console statement. (no-console)\n17:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/show-player.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/show-player.js should pass ESLint\n\n5:9 - \'items\' is assigned a value but never used. (no-unused-vars)\n6:5 - Unexpected console statement. (no-console)\n8:7 - Unexpected console statement. (no-console)\n11:7 - Unexpected console statement. (no-console)\n12:7 - Unexpected console statement. (no-console)\n16:5 - Unexpected console statement. (no-console)\n17:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/startgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/startgroup.js should pass ESLint\n\n');
  });

  QUnit.test('services/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth-manager.js should pass ESLint\n\n18:3 - Unexpected console statement. (no-console)\n54:9 - Unexpected console statement. (no-console)\n59:5 - Unexpected console statement. (no-console)\n66:3 - Unexpected console statement. (no-console)\n70:5 - Unexpected console statement. (no-console)\n107:5 - Unexpected console statement. (no-console)\n113:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/constants.js should pass ESLint\n\n');
  });
});
define('littlebits-frontend/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('littlebits-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'littlebits-frontend/tests/helpers/start-app', 'littlebits-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = Ember.RSVP.Promise;
});
define('littlebits-frontend/tests/helpers/resolver', ['exports', 'littlebits-frontend/resolver', 'littlebits-frontend/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('littlebits-frontend/tests/helpers/start-app', ['exports', 'littlebits-frontend/app', 'littlebits-frontend/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('littlebits-frontend/tests/integration/components/group-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('group-list', 'Integration | Component | group list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "lNm7ST9e",
      "block": "{\"statements\":[[1,[26,[\"group-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "j0bOejRJ",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"group-list\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('littlebits-frontend/tests/integration/helpers/check-membership-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('check-membership', 'helper:check-membership', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "u1RsvcZo",
      "block": "{\"statements\":[[1,[33,[\"check-membership\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('littlebits-frontend/tests/test-helper', ['littlebits-frontend/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('littlebits-frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/group-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/group-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/check-membership-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/check-membership-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-game-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/game-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/game-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/group-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/group-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/show-game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/show-game-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/show-group-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/show-group-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/startgroup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/startgroup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/auth-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/auth-manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/constants-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/constants-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-game-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/game-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/game-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/group-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/group-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/player-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/player-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/show-game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/show-game-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/show-group-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/show-group-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/show-player-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/show-player-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/startgroup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/startgroup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/auth-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/constants-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/constants-test.js should pass ESLint\n\n');
  });
});
define('littlebits-frontend/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/create-game-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:create-game', 'Unit | Controller | create game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/game-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:game-list', 'Unit | Controller | game list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/group-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:group-list', 'Unit | Controller | group list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:register', 'Unit | Controller | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/show-game-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:show-game', 'Unit | Controller | show game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/show-group-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:show-group', 'Unit | Controller | show group', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/startgroup-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:startgroup', 'Unit | Controller | startgroup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/initializers/auth-manager-test', ['littlebits-frontend/initializers/auth-manager', 'qunit', 'littlebits-frontend/tests/helpers/destroy-app'], function (_authManager, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | auth manager', {
    beforeEach: function beforeEach() {
      var _this = this;

      Ember.run(function () {
        _this.application = Ember.Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _authManager.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('littlebits-frontend/tests/unit/initializers/constants-test', ['littlebits-frontend/initializers/constants', 'qunit', 'littlebits-frontend/tests/helpers/destroy-app'], function (_constants, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | constants', {
    beforeEach: function beforeEach() {
      var _this = this;

      Ember.run(function () {
        _this.application = Ember.Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _constants.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('littlebits-frontend/tests/unit/routes/create-game-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:create-game', 'Unit | Route | create game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/game-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:game-list', 'Unit | Route | game list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/group-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:group-list', 'Unit | Route | group list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/player-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:player-list', 'Unit | Route | player list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/show-game-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:show-game', 'Unit | Route | show game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/show-group-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:show-group', 'Unit | Route | show group', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/show-player-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:show-player', 'Unit | Route | show player', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/startgroup-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:startgroup', 'Unit | Route | startgroup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/services/auth-manager-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:auth-manager', 'Unit | Service | auth manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('littlebits-frontend/tests/unit/services/constants-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:constants', 'Unit | Service | constants', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('littlebits-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
