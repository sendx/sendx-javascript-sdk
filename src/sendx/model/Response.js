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

import ApiClient from '../ApiClient';

/**
 * The Response model module.
 * @module sendx/model/Response
 * @version 1.0.0
 */
class Response {
    /**
     * Constructs a new <code>Response</code>.
     * @alias module:sendx/model/Response
     */
    constructor() { 
        
        Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/Response} obj Optional instance to populate.
     * @return {module:sendx/model/Response} The populated <code>Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }

        return true;
    }

/**
     * Returns The status of the response.
     * @return {String}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets The status of the response.
     * @param {String} status The status of the response.
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns A message indicating the result of the operation.
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets A message indicating the result of the operation.
     * @param {String} message A message indicating the result of the operation.
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * Returns Additional data associated with the response.
     * @return {String}
     */
    getData() {
        return this.data;
    }

    /**
     * Sets Additional data associated with the response.
     * @param {String} data Additional data associated with the response.
     */
    setData(data) {
        this['data'] = data;
    }

}



/**
 * The status of the response.
 * @member {String} status
 */
Response.prototype['status'] = undefined;

/**
 * A message indicating the result of the operation.
 * @member {String} message
 */
Response.prototype['message'] = undefined;

/**
 * Additional data associated with the response.
 * @member {String} data
 */
Response.prototype['data'] = undefined;






export default Response;

