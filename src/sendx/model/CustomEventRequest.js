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
 * The CustomEventRequest model module.
 * @module sendx/model/CustomEventRequest
 * @version 1.0.0
 */
class CustomEventRequest {
    /**
     * Constructs a new <code>CustomEventRequest</code>.
     * @alias module:sendx/model/CustomEventRequest
     * @param name {String} Name of the custom event (e.g., 'abandoned_cart').
     * @param identifier {String} Unique identifier for the contact (e.g., contact's email).
     * @param data {Object.<String, String>} Map of property-value pairs associated with the event, where both key and value are strings.
     * @param time {Number} Unix timestamp of when the event occurred.
     */
    constructor(name, identifier, data, time) { 
        
        CustomEventRequest.initialize(this, name, identifier, data, time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, identifier, data, time) { 
        obj['name'] = name;
        obj['identifier'] = identifier;
        obj['data'] = data;
        obj['time'] = time;
    }

    /**
     * Constructs a <code>CustomEventRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/CustomEventRequest} obj Optional instance to populate.
     * @return {module:sendx/model/CustomEventRequest} The populated <code>CustomEventRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEventRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': 'String'});
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEventRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEventRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEventRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }

        return true;
    }

/**
     * Returns Name of the custom event (e.g., 'abandoned_cart').
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the custom event (e.g., 'abandoned_cart').
     * @param {String} name Name of the custom event (e.g., 'abandoned_cart').
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Unique identifier for the contact (e.g., contact's email).
     * @return {String}
     */
    getIdentifier() {
        return this.identifier;
    }

    /**
     * Sets Unique identifier for the contact (e.g., contact's email).
     * @param {String} identifier Unique identifier for the contact (e.g., contact's email).
     */
    setIdentifier(identifier) {
        this['identifier'] = identifier;
    }
/**
     * Returns Map of property-value pairs associated with the event, where both key and value are strings.
     * @return {Object.<String, String>}
     */
    getData() {
        return this.data;
    }

    /**
     * Sets Map of property-value pairs associated with the event, where both key and value are strings.
     * @param {Object.<String, String>} data Map of property-value pairs associated with the event, where both key and value are strings.
     */
    setData(data) {
        this['data'] = data;
    }
/**
     * Returns Unix timestamp of when the event occurred.
     * @return {Number}
     */
    getTime() {
        return this.time;
    }

    /**
     * Sets Unix timestamp of when the event occurred.
     * @param {Number} time Unix timestamp of when the event occurred.
     */
    setTime(time) {
        this['time'] = time;
    }

}

CustomEventRequest.RequiredProperties = ["name", "identifier", "data", "time"];

/**
 * Name of the custom event (e.g., 'abandoned_cart').
 * @member {String} name
 */
CustomEventRequest.prototype['name'] = undefined;

/**
 * Unique identifier for the contact (e.g., contact's email).
 * @member {String} identifier
 */
CustomEventRequest.prototype['identifier'] = undefined;

/**
 * Map of property-value pairs associated with the event, where both key and value are strings.
 * @member {Object.<String, String>} data
 */
CustomEventRequest.prototype['data'] = undefined;

/**
 * Unix timestamp of when the event occurred.
 * @member {Number} time
 */
CustomEventRequest.prototype['time'] = undefined;






export default CustomEventRequest;
