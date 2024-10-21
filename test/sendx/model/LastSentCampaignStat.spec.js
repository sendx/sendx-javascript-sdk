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
    instance = new sendx.LastSentCampaignStat();
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

  describe('LastSentCampaignStat', function() {
    it('should create an instance of LastSentCampaignStat', function() {
      // uncomment below and update the code to test LastSentCampaignStat
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be.a(sendx.LastSentCampaignStat);
    });

    it('should have the property campaign (base name: "campaign")', function() {
      // uncomment below and update the code to test the property campaign
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property sent (base name: "sent")', function() {
      // uncomment below and update the code to test the property sent
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property delivered (base name: "delivered")', function() {
      // uncomment below and update the code to test the property delivered
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property subscribed (base name: "subscribed")', function() {
      // uncomment below and update the code to test the property subscribed
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribed (base name: "unsubscribed")', function() {
      // uncomment below and update the code to test the property unsubscribed
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property linkClicked (base name: "linkClicked")', function() {
      // uncomment below and update the code to test the property linkClicked
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

    it('should have the property replied (base name: "replied")', function() {
      // uncomment below and update the code to test the property replied
      //var instance = new sendx.LastSentCampaignStat();
      //expect(instance).to.be();
    });

  });

}));
