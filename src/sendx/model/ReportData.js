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
 * The ReportData model module.
 * @module sendx/model/ReportData
 * @version 1.0.0
 */
class ReportData {
    /**
     * Constructs a new <code>ReportData</code>.
     * Contains the report data for a given campaign
     * @alias module:sendx/model/ReportData
     */
    constructor() { 
        
        ReportData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/ReportData} obj Optional instance to populate.
     * @return {module:sendx/model/ReportData} The populated <code>ReportData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportData();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'String');
            }
            if (data.hasOwnProperty('linkStats')) {
                obj['linkStats'] = ApiClient.convertToType(data['linkStats'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('clickedContactCount')) {
                obj['clickedContactCount'] = ApiClient.convertToType(data['clickedContactCount'], 'Number');
            }
            if (data.hasOwnProperty('openedContactCount')) {
                obj['openedContactCount'] = ApiClient.convertToType(data['openedContactCount'], 'Number');
            }
            if (data.hasOwnProperty('repliedContactCount')) {
                obj['repliedContactCount'] = ApiClient.convertToType(data['repliedContactCount'], 'Number');
            }
            if (data.hasOwnProperty('clickedUniqueContactCount')) {
                obj['clickedUniqueContactCount'] = ApiClient.convertToType(data['clickedUniqueContactCount'], 'Number');
            }
            if (data.hasOwnProperty('openedUniqueContactCount')) {
                obj['openedUniqueContactCount'] = ApiClient.convertToType(data['openedUniqueContactCount'], 'Number');
            }
            if (data.hasOwnProperty('repliedUniqueContactCount')) {
                obj['repliedUniqueContactCount'] = ApiClient.convertToType(data['repliedUniqueContactCount'], 'Number');
            }
            if (data.hasOwnProperty('sentContactCount')) {
                obj['sentContactCount'] = ApiClient.convertToType(data['sentContactCount'], 'Number');
            }
            if (data.hasOwnProperty('unsubscribeContactCount')) {
                obj['unsubscribeContactCount'] = ApiClient.convertToType(data['unsubscribeContactCount'], 'Number');
            }
            if (data.hasOwnProperty('bounceContactCount')) {
                obj['bounceContactCount'] = ApiClient.convertToType(data['bounceContactCount'], 'Number');
            }
            if (data.hasOwnProperty('spamContactCount')) {
                obj['spamContactCount'] = ApiClient.convertToType(data['spamContactCount'], 'Number');
            }
            if (data.hasOwnProperty('emailRevenue')) {
                obj['emailRevenue'] = ApiClient.convertToType(data['emailRevenue'], 'String');
            }
            if (data.hasOwnProperty('revenuePerRecipient')) {
                obj['revenuePerRecipient'] = ApiClient.convertToType(data['revenuePerRecipient'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['campaignId'] && !(typeof data['campaignId'] === 'string' || data['campaignId'] instanceof String)) {
            throw new Error("Expected the field `campaignId` to be a primitive type in the JSON string but got " + data['campaignId']);
        }
        // ensure the json data is a string
        if (data['emailRevenue'] && !(typeof data['emailRevenue'] === 'string' || data['emailRevenue'] instanceof String)) {
            throw new Error("Expected the field `emailRevenue` to be a primitive type in the JSON string but got " + data['emailRevenue']);
        }
        // ensure the json data is a string
        if (data['revenuePerRecipient'] && !(typeof data['revenuePerRecipient'] === 'string' || data['revenuePerRecipient'] instanceof String)) {
            throw new Error("Expected the field `revenuePerRecipient` to be a primitive type in the JSON string but got " + data['revenuePerRecipient']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }

/**
     * Returns The ID of the campaign
     * @return {String}
     */
    getCampaignId() {
        return this.campaignId;
    }

    /**
     * Sets The ID of the campaign
     * @param {String} campaignId The ID of the campaign
     */
    setCampaignId(campaignId) {
        this['campaignId'] = campaignId;
    }
/**
     * Returns Statistics about the links clicked within the campaign
     * @return {Object.<String, Number>}
     */
    getLinkStats() {
        return this.linkStats;
    }

    /**
     * Sets Statistics about the links clicked within the campaign
     * @param {Object.<String, Number>} linkStats Statistics about the links clicked within the campaign
     */
    setLinkStats(linkStats) {
        this['linkStats'] = linkStats;
    }
/**
     * Returns The total number of contacts that clicked on any link
     * @return {Number}
     */
    getClickedContactCount() {
        return this.clickedContactCount;
    }

    /**
     * Sets The total number of contacts that clicked on any link
     * @param {Number} clickedContactCount The total number of contacts that clicked on any link
     */
    setClickedContactCount(clickedContactCount) {
        this['clickedContactCount'] = clickedContactCount;
    }
/**
     * Returns The total number of contacts that opened the campaign email
     * @return {Number}
     */
    getOpenedContactCount() {
        return this.openedContactCount;
    }

    /**
     * Sets The total number of contacts that opened the campaign email
     * @param {Number} openedContactCount The total number of contacts that opened the campaign email
     */
    setOpenedContactCount(openedContactCount) {
        this['openedContactCount'] = openedContactCount;
    }
/**
     * Returns The total number of contacts that replied to the campaign email
     * @return {Number}
     */
    getRepliedContactCount() {
        return this.repliedContactCount;
    }

    /**
     * Sets The total number of contacts that replied to the campaign email
     * @param {Number} repliedContactCount The total number of contacts that replied to the campaign email
     */
    setRepliedContactCount(repliedContactCount) {
        this['repliedContactCount'] = repliedContactCount;
    }
/**
     * Returns The unique number of contacts that clicked on any link
     * @return {Number}
     */
    getClickedUniqueContactCount() {
        return this.clickedUniqueContactCount;
    }

    /**
     * Sets The unique number of contacts that clicked on any link
     * @param {Number} clickedUniqueContactCount The unique number of contacts that clicked on any link
     */
    setClickedUniqueContactCount(clickedUniqueContactCount) {
        this['clickedUniqueContactCount'] = clickedUniqueContactCount;
    }
/**
     * Returns The unique number of contacts that opened the campaign email
     * @return {Number}
     */
    getOpenedUniqueContactCount() {
        return this.openedUniqueContactCount;
    }

    /**
     * Sets The unique number of contacts that opened the campaign email
     * @param {Number} openedUniqueContactCount The unique number of contacts that opened the campaign email
     */
    setOpenedUniqueContactCount(openedUniqueContactCount) {
        this['openedUniqueContactCount'] = openedUniqueContactCount;
    }
/**
     * Returns The unique number of contacts that replied to the campaign email
     * @return {Number}
     */
    getRepliedUniqueContactCount() {
        return this.repliedUniqueContactCount;
    }

    /**
     * Sets The unique number of contacts that replied to the campaign email
     * @param {Number} repliedUniqueContactCount The unique number of contacts that replied to the campaign email
     */
    setRepliedUniqueContactCount(repliedUniqueContactCount) {
        this['repliedUniqueContactCount'] = repliedUniqueContactCount;
    }
/**
     * Returns The total number of contacts the campaign was sent to
     * @return {Number}
     */
    getSentContactCount() {
        return this.sentContactCount;
    }

    /**
     * Sets The total number of contacts the campaign was sent to
     * @param {Number} sentContactCount The total number of contacts the campaign was sent to
     */
    setSentContactCount(sentContactCount) {
        this['sentContactCount'] = sentContactCount;
    }
/**
     * Returns The total number of contacts that unsubscribed
     * @return {Number}
     */
    getUnsubscribeContactCount() {
        return this.unsubscribeContactCount;
    }

    /**
     * Sets The total number of contacts that unsubscribed
     * @param {Number} unsubscribeContactCount The total number of contacts that unsubscribed
     */
    setUnsubscribeContactCount(unsubscribeContactCount) {
        this['unsubscribeContactCount'] = unsubscribeContactCount;
    }
/**
     * Returns The total number of bounced contacts
     * @return {Number}
     */
    getBounceContactCount() {
        return this.bounceContactCount;
    }

    /**
     * Sets The total number of bounced contacts
     * @param {Number} bounceContactCount The total number of bounced contacts
     */
    setBounceContactCount(bounceContactCount) {
        this['bounceContactCount'] = bounceContactCount;
    }
/**
     * Returns The total number of contacts that marked the email as spam
     * @return {Number}
     */
    getSpamContactCount() {
        return this.spamContactCount;
    }

    /**
     * Sets The total number of contacts that marked the email as spam
     * @param {Number} spamContactCount The total number of contacts that marked the email as spam
     */
    setSpamContactCount(spamContactCount) {
        this['spamContactCount'] = spamContactCount;
    }
/**
     * Returns The total revenue generated from the campaign email
     * @return {String}
     */
    getEmailRevenue() {
        return this.emailRevenue;
    }

    /**
     * Sets The total revenue generated from the campaign email
     * @param {String} emailRevenue The total revenue generated from the campaign email
     */
    setEmailRevenue(emailRevenue) {
        this['emailRevenue'] = emailRevenue;
    }
/**
     * Returns The average revenue generated per recipient
     * @return {String}
     */
    getRevenuePerRecipient() {
        return this.revenuePerRecipient;
    }

    /**
     * Sets The average revenue generated per recipient
     * @param {String} revenuePerRecipient The average revenue generated per recipient
     */
    setRevenuePerRecipient(revenuePerRecipient) {
        this['revenuePerRecipient'] = revenuePerRecipient;
    }
/**
     * Returns The currency in which the revenue is measured
     * @return {String}
     */
    getCurrency() {
        return this.currency;
    }

    /**
     * Sets The currency in which the revenue is measured
     * @param {String} currency The currency in which the revenue is measured
     */
    setCurrency(currency) {
        this['currency'] = currency;
    }

}



/**
 * The ID of the campaign
 * @member {String} campaignId
 */
ReportData.prototype['campaignId'] = undefined;

/**
 * Statistics about the links clicked within the campaign
 * @member {Object.<String, Number>} linkStats
 */
ReportData.prototype['linkStats'] = undefined;

/**
 * The total number of contacts that clicked on any link
 * @member {Number} clickedContactCount
 */
ReportData.prototype['clickedContactCount'] = undefined;

/**
 * The total number of contacts that opened the campaign email
 * @member {Number} openedContactCount
 */
ReportData.prototype['openedContactCount'] = undefined;

/**
 * The total number of contacts that replied to the campaign email
 * @member {Number} repliedContactCount
 */
ReportData.prototype['repliedContactCount'] = undefined;

/**
 * The unique number of contacts that clicked on any link
 * @member {Number} clickedUniqueContactCount
 */
ReportData.prototype['clickedUniqueContactCount'] = undefined;

/**
 * The unique number of contacts that opened the campaign email
 * @member {Number} openedUniqueContactCount
 */
ReportData.prototype['openedUniqueContactCount'] = undefined;

/**
 * The unique number of contacts that replied to the campaign email
 * @member {Number} repliedUniqueContactCount
 */
ReportData.prototype['repliedUniqueContactCount'] = undefined;

/**
 * The total number of contacts the campaign was sent to
 * @member {Number} sentContactCount
 */
ReportData.prototype['sentContactCount'] = undefined;

/**
 * The total number of contacts that unsubscribed
 * @member {Number} unsubscribeContactCount
 */
ReportData.prototype['unsubscribeContactCount'] = undefined;

/**
 * The total number of bounced contacts
 * @member {Number} bounceContactCount
 */
ReportData.prototype['bounceContactCount'] = undefined;

/**
 * The total number of contacts that marked the email as spam
 * @member {Number} spamContactCount
 */
ReportData.prototype['spamContactCount'] = undefined;

/**
 * The total revenue generated from the campaign email
 * @member {String} emailRevenue
 */
ReportData.prototype['emailRevenue'] = undefined;

/**
 * The average revenue generated per recipient
 * @member {String} revenuePerRecipient
 */
ReportData.prototype['revenuePerRecipient'] = undefined;

/**
 * The currency in which the revenue is measured
 * @member {String} currency
 */
ReportData.prototype['currency'] = undefined;






export default ReportData;

