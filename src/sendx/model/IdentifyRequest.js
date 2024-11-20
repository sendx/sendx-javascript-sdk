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
 * The IdentifyRequest model module.
 * @module sendx/model/IdentifyRequest
 * @version 1.0.0
 */
class IdentifyRequest {
    /**
     * Constructs a new <code>IdentifyRequest</code>.
     * @alias module:sendx/model/IdentifyRequest
     * @param email {String} Email address of the contact.
     */
    constructor(email) { 
        
        IdentifyRequest.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>IdentifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/IdentifyRequest} obj Optional instance to populate.
     * @return {module:sendx/model/IdentifyRequest} The populated <code>IdentifyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentifyRequest();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('newEmail')) {
                obj['newEmail'] = ApiClient.convertToType(data['newEmail'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentifyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentifyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IdentifyRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['newEmail'] && !(typeof data['newEmail'] === 'string' || data['newEmail'] instanceof String)) {
            throw new Error("Expected the field `newEmail` to be a primitive type in the JSON string but got " + data['newEmail']);
        }
        // ensure the json data is a string
        if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
            throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }

        return true;
    }

/**
     * Returns First name of the contact.
     * @return {String}
     */
    getFirstName() {
        return this.firstName;
    }

    /**
     * Sets First name of the contact.
     * @param {String} firstName First name of the contact.
     */
    setFirstName(firstName) {
        this['firstName'] = firstName;
    }
/**
     * Returns Last name of the contact.
     * @return {String}
     */
    getLastName() {
        return this.lastName;
    }

    /**
     * Sets Last name of the contact.
     * @param {String} lastName Last name of the contact.
     */
    setLastName(lastName) {
        this['lastName'] = lastName;
    }
/**
     * Returns Email address of the contact.
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email address of the contact.
     * @param {String} email Email address of the contact.
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns New email address of the contact.
     * @return {String}
     */
    getNewEmail() {
        return this.newEmail;
    }

    /**
     * Sets New email address of the contact.
     * @param {String} newEmail New email address of the contact.
     */
    setNewEmail(newEmail) {
        this['newEmail'] = newEmail;
    }
/**
     * Returns Company of the contact.
     * @return {String}
     */
    getCompany() {
        return this.company;
    }

    /**
     * Sets Company of the contact.
     * @param {String} company Company of the contact.
     */
    setCompany(company) {
        this['company'] = company;
    }
/**
     * @return {Array.<String>}
     */
    getTags() {
        return this.tags;
    }

    /**
     * @param {Array.<String>} tags
     */
    setTags(tags) {
        this['tags'] = tags;
    }
/**
     * @return {Object.<String, String>}
     */
    getCustomFields() {
        return this.customFields;
    }

    /**
     * @param {Object.<String, String>} customFields
     */
    setCustomFields(customFields) {
        this['customFields'] = customFields;
    }

}

IdentifyRequest.RequiredProperties = ["email"];

/**
 * First name of the contact.
 * @member {String} firstName
 */
IdentifyRequest.prototype['firstName'] = undefined;

/**
 * Last name of the contact.
 * @member {String} lastName
 */
IdentifyRequest.prototype['lastName'] = undefined;

/**
 * Email address of the contact.
 * @member {String} email
 */
IdentifyRequest.prototype['email'] = undefined;

/**
 * New email address of the contact.
 * @member {String} newEmail
 */
IdentifyRequest.prototype['newEmail'] = undefined;

/**
 * Company of the contact.
 * @member {String} company
 */
IdentifyRequest.prototype['company'] = undefined;

/**
 * @member {Array.<String>} tags
 */
IdentifyRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} customFields
 */
IdentifyRequest.prototype['customFields'] = undefined;






export default IdentifyRequest;
