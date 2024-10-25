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
 * The DeleteCampaign200Response model module.
 * @module sendx/model/DeleteCampaign200Response
 * @version 1.0.0
 */
class DeleteCampaign200Response {
    /**
     * Constructs a new <code>DeleteCampaign200Response</code>.
     * @alias module:sendx/model/DeleteCampaign200Response
     */
    constructor() { 
        
        DeleteCampaign200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteCampaign200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/DeleteCampaign200Response} obj Optional instance to populate.
     * @return {module:sendx/model/DeleteCampaign200Response} The populated <code>DeleteCampaign200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteCampaign200Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteCampaign200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteCampaign200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }

/**
     * Returns ID of the deleted campaign
     * @return {Number}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets ID of the deleted campaign
     * @param {Number} id ID of the deleted campaign
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Success message
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets Success message
     * @param {String} message Success message
     */
    setMessage(message) {
        this['message'] = message;
    }

}



/**
 * ID of the deleted campaign
 * @member {Number} id
 */
DeleteCampaign200Response.prototype['id'] = undefined;

/**
 * Success message
 * @member {String} message
 */
DeleteCampaign200Response.prototype['message'] = undefined;






export default DeleteCampaign200Response;

