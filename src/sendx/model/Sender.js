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
 * The Sender model module.
 * @module sendx/model/Sender
 * @version 1.0.0
 */
class Sender {
    /**
     * Constructs a new <code>Sender</code>.
     * @alias module:sendx/model/Sender
     * @param id {String} ID of the sender
     * @param name {String} Name of the sender
     * @param email {String} Email address of the sender
     */
    constructor(id, name, email) { 
        
        Sender.initialize(this, id, name, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, email) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Sender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/Sender} obj Optional instance to populate.
     * @return {module:sendx/model/Sender} The populated <code>Sender</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sender();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sender</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sender</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Sender.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }

/**
     * Returns ID of the sender
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets ID of the sender
     * @param {String} id ID of the sender
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Name of the sender
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the sender
     * @param {String} name Name of the sender
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Email address of the sender
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email address of the sender
     * @param {String} email Email address of the sender
     */
    setEmail(email) {
        this['email'] = email;
    }

}

Sender.RequiredProperties = ["id", "name", "email"];

/**
 * ID of the sender
 * @member {String} id
 */
Sender.prototype['id'] = undefined;

/**
 * Name of the sender
 * @member {String} name
 */
Sender.prototype['name'] = undefined;

/**
 * Email address of the sender
 * @member {String} email
 */
Sender.prototype['email'] = undefined;






export default Sender;

