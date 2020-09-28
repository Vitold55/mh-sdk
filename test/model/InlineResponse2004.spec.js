/**
 * Mail-Hub API
 * This is a specification for Mail-Hub API  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: support@mail-hub.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MailHubApi);
  }
}(this, function(expect, MailHubApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MailHubApi.InlineResponse2004();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2004', function() {
    it('should create an instance of InlineResponse2004', function() {
      // uncomment below and update the code to test InlineResponse2004
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be.a(MailHubApi.InlineResponse2004);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property used (base name: "used")', function() {
      // uncomment below and update the code to test the property used
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property onetime (base name: "onetime")', function() {
      // uncomment below and update the code to test the property onetime
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property sdate (base name: "sdate")', function() {
      // uncomment below and update the code to test the property sdate
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property edate (base name: "edate")', function() {
      // uncomment below and update the code to test the property edate
      //var instane = new MailHubApi.InlineResponse2004();
      //expect(instance).to.be();
    });

  });

}));