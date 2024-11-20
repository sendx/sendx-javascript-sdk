/**
 * SendX REST API
 * # Introduction SendX is an email marketing product. It helps you convert website visitors to customers, send them promotional emails, engage with them using drip sequences and craft custom journeys using powerful but simple automations. The SendX API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. The SendX Rest API doesn’t support bulk updates. You can work on only one object per request. <br> 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendx.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CustomEventRequest from '../model/CustomEventRequest';
import EventResponse from '../model/EventResponse';
import RevenueEventRequest from '../model/RevenueEventRequest';

/**
* Event service.
* @module sendx/api/EventApi
* @version 1.0.0
*/
export default class EventApi {

    /**
    * Constructs a new EventApi. 
    * @alias module:sendx/api/EventApi
    * @class
    * @param {module:sendx/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sendx/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Record a revenue event for a specific contact
     * Records a revenue event, which can be attributed to campaigns, drips, workflows, or other sources of user interaction.
     * @param {module:sendx/model/RevenueEventRequest} revenueEventRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sendx/model/EventResponse} and HTTP response
     */
    createRevenueEventWithHttpInfo(revenueEventRequest) {
      let postBody = revenueEventRequest;
      // verify the required parameter 'revenueEventRequest' is set
      if (revenueEventRequest === undefined || revenueEventRequest === null) {
        throw new Error("Missing the required parameter 'revenueEventRequest' when calling createRevenueEvent");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EventResponse;
      return this.apiClient.callApi(
        '/events/revenue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Record a revenue event for a specific contact
     * Records a revenue event, which can be attributed to campaigns, drips, workflows, or other sources of user interaction.
     * @param {module:sendx/model/RevenueEventRequest} revenueEventRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sendx/model/EventResponse}
     */
    createRevenueEvent(revenueEventRequest) {
      return this.createRevenueEventWithHttpInfo(revenueEventRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Push a custom event associated with a contact
     * Pushes a custom event with properties and values for a specified contact.
     * @param {module:sendx/model/CustomEventRequest} customEventRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sendx/model/EventResponse} and HTTP response
     */
    pushCustomEventWithHttpInfo(customEventRequest) {
      let postBody = customEventRequest;
      // verify the required parameter 'customEventRequest' is set
      if (customEventRequest === undefined || customEventRequest === null) {
        throw new Error("Missing the required parameter 'customEventRequest' when calling pushCustomEvent");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EventResponse;
      return this.apiClient.callApi(
        '/events/custom', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Push a custom event associated with a contact
     * Pushes a custom event with properties and values for a specified contact.
     * @param {module:sendx/model/CustomEventRequest} customEventRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sendx/model/EventResponse}
     */
    pushCustomEvent(customEventRequest) {
      return this.pushCustomEventWithHttpInfo(customEventRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}