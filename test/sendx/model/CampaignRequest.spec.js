/**
 * SendX REST API
 * # Introduction The SendX API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. The SendX Rest API doesn’t support bulk updates. You can work on only one object per request. <br> 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendx.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/sendx/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/sendx/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sendx);
  }
}(this, function(expect, sendx) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new sendx.CampaignRequest();
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

  describe('CampaignRequest', function() {
    it('should create an instance of CampaignRequest', function() {
      // uncomment below and update the code to test CampaignRequest
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be.a(sendx.CampaignRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property htmlCode (base name: "htmlCode")', function() {
      // uncomment below and update the code to test the property htmlCode
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property previewText (base name: "previewText")', function() {
      // uncomment below and update the code to test the property previewText
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheduleType (base name: "scheduleType")', function() {
      // uncomment below and update the code to test the property scheduleType
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheduleCondition (base name: "scheduleCondition")', function() {
      // uncomment below and update the code to test the property scheduleCondition
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeCondition (base name: "timeCondition")', function() {
      // uncomment below and update the code to test the property timeCondition
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property preferredTimezone (base name: "preferredTimezone")', function() {
      // uncomment below and update the code to test the property preferredTimezone
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property preferredTimeCondition (base name: "preferredTimeCondition")', function() {
      // uncomment below and update the code to test the property preferredTimeCondition
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendInContactsTimezone (base name: "sendInContactsTimezone")', function() {
      // uncomment below and update the code to test the property sendInContactsTimezone
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property smartSend (base name: "smartSend")', function() {
      // uncomment below and update the code to test the property smartSend
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property includedSegments (base name: "includedSegments")', function() {
      // uncomment below and update the code to test the property includedSegments
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property includedLists (base name: "includedLists")', function() {
      // uncomment below and update the code to test the property includedLists
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property includedTags (base name: "includedTags")', function() {
      // uncomment below and update the code to test the property includedTags
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property excludedSegments (base name: "excludedSegments")', function() {
      // uncomment below and update the code to test the property excludedSegments
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property excludedLists (base name: "excludedLists")', function() {
      // uncomment below and update the code to test the property excludedLists
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

    it('should have the property excludedTags (base name: "excludedTags")', function() {
      // uncomment below and update the code to test the property excludedTags
      //var instance = new sendx.CampaignRequest();
      //expect(instance).to.be();
    });

  });

}));
