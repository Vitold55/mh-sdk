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
    instance = new MailHubApi.Domain();
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

  describe('Domain', function() {
    it('should create an instance of Domain', function() {
      // uncomment below and update the code to test Domain
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be.a(MailHubApi.Domain);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property catchAll (base name: "catchAll")', function() {
      // uncomment below and update the code to test the property catchAll
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property defaultFwdThreshold (base name: "defaultFwdThreshold")', function() {
      // uncomment below and update the code to test the property defaultFwdThreshold
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new MailHubApi.Domain();
      //expect(instance).to.be();
    });

  });

}));
