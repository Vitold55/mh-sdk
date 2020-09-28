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
    instance = new MailHubApi.InlineResponse2001();
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

  describe('InlineResponse2001', function() {
    it('should create an instance of InlineResponse2001', function() {
      // uncomment below and update the code to test InlineResponse2001
      //var instane = new MailHubApi.InlineResponse2001();
      //expect(instance).to.be.a(MailHubApi.InlineResponse2001);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MailHubApi.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property purpose (base name: "purpose")', function() {
      // uncomment below and update the code to test the property purpose
      //var instane = new MailHubApi.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property expireOn (base name: "expireOn")', function() {
      // uncomment below and update the code to test the property expireOn
      //var instane = new MailHubApi.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property createBefore (base name: "createBefore")', function() {
      // uncomment below and update the code to test the property createBefore
      //var instane = new MailHubApi.InlineResponse2001();
      //expect(instance).to.be();
    });

  });

}));
