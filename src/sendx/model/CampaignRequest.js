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
 * The CampaignRequest model module.
 * @module sendx/model/CampaignRequest
 * @version 1.0.0
 */
class CampaignRequest {
    /**
     * Constructs a new <code>CampaignRequest</code>.
     * @alias module:sendx/model/CampaignRequest
     */
    constructor() { 
        
        CampaignRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/CampaignRequest} obj Optional instance to populate.
     * @return {module:sendx/model/CampaignRequest} The populated <code>CampaignRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('htmlCode')) {
                obj['htmlCode'] = ApiClient.convertToType(data['htmlCode'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('previewText')) {
                obj['previewText'] = ApiClient.convertToType(data['previewText'], 'String');
            }
            if (data.hasOwnProperty('scheduleType')) {
                obj['scheduleType'] = ApiClient.convertToType(data['scheduleType'], 'Number');
            }
            if (data.hasOwnProperty('scheduleCondition')) {
                obj['scheduleCondition'] = ApiClient.convertToType(data['scheduleCondition'], 'String');
            }
            if (data.hasOwnProperty('timeCondition')) {
                obj['timeCondition'] = ApiClient.convertToType(data['timeCondition'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('preferredTimezone')) {
                obj['preferredTimezone'] = ApiClient.convertToType(data['preferredTimezone'], 'String');
            }
            if (data.hasOwnProperty('preferredTimeCondition')) {
                obj['preferredTimeCondition'] = ApiClient.convertToType(data['preferredTimeCondition'], 'String');
            }
            if (data.hasOwnProperty('sendInContactsTimezone')) {
                obj['sendInContactsTimezone'] = ApiClient.convertToType(data['sendInContactsTimezone'], 'Boolean');
            }
            if (data.hasOwnProperty('smartSend')) {
                obj['smartSend'] = ApiClient.convertToType(data['smartSend'], 'Boolean');
            }
            if (data.hasOwnProperty('includedSegments')) {
                obj['includedSegments'] = ApiClient.convertToType(data['includedSegments'], ['String']);
            }
            if (data.hasOwnProperty('includedLists')) {
                obj['includedLists'] = ApiClient.convertToType(data['includedLists'], ['String']);
            }
            if (data.hasOwnProperty('includedTags')) {
                obj['includedTags'] = ApiClient.convertToType(data['includedTags'], ['String']);
            }
            if (data.hasOwnProperty('excludedSegments')) {
                obj['excludedSegments'] = ApiClient.convertToType(data['excludedSegments'], ['String']);
            }
            if (data.hasOwnProperty('excludedLists')) {
                obj['excludedLists'] = ApiClient.convertToType(data['excludedLists'], ['String']);
            }
            if (data.hasOwnProperty('excludedTags')) {
                obj['excludedTags'] = ApiClient.convertToType(data['excludedTags'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['htmlCode'] && !(typeof data['htmlCode'] === 'string' || data['htmlCode'] instanceof String)) {
            throw new Error("Expected the field `htmlCode` to be a primitive type in the JSON string but got " + data['htmlCode']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
            throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
        }
        // ensure the json data is a string
        if (data['previewText'] && !(typeof data['previewText'] === 'string' || data['previewText'] instanceof String)) {
            throw new Error("Expected the field `previewText` to be a primitive type in the JSON string but got " + data['previewText']);
        }
        // ensure the json data is a string
        if (data['scheduleCondition'] && !(typeof data['scheduleCondition'] === 'string' || data['scheduleCondition'] instanceof String)) {
            throw new Error("Expected the field `scheduleCondition` to be a primitive type in the JSON string but got " + data['scheduleCondition']);
        }
        // ensure the json data is a string
        if (data['timeCondition'] && !(typeof data['timeCondition'] === 'string' || data['timeCondition'] instanceof String)) {
            throw new Error("Expected the field `timeCondition` to be a primitive type in the JSON string but got " + data['timeCondition']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is a string
        if (data['preferredTimezone'] && !(typeof data['preferredTimezone'] === 'string' || data['preferredTimezone'] instanceof String)) {
            throw new Error("Expected the field `preferredTimezone` to be a primitive type in the JSON string but got " + data['preferredTimezone']);
        }
        // ensure the json data is a string
        if (data['preferredTimeCondition'] && !(typeof data['preferredTimeCondition'] === 'string' || data['preferredTimeCondition'] instanceof String)) {
            throw new Error("Expected the field `preferredTimeCondition` to be a primitive type in the JSON string but got " + data['preferredTimeCondition']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['includedSegments'])) {
            throw new Error("Expected the field `includedSegments` to be an array in the JSON data but got " + data['includedSegments']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['includedLists'])) {
            throw new Error("Expected the field `includedLists` to be an array in the JSON data but got " + data['includedLists']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['includedTags'])) {
            throw new Error("Expected the field `includedTags` to be an array in the JSON data but got " + data['includedTags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excludedSegments'])) {
            throw new Error("Expected the field `excludedSegments` to be an array in the JSON data but got " + data['excludedSegments']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excludedLists'])) {
            throw new Error("Expected the field `excludedLists` to be an array in the JSON data but got " + data['excludedLists']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excludedTags'])) {
            throw new Error("Expected the field `excludedTags` to be an array in the JSON data but got " + data['excludedTags']);
        }

        return true;
    }

/**
     * Returns The name of the campaign.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the campaign.
     * @param {String} name The name of the campaign.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The HTML code of the campaign.
     * @return {String}
     */
    getHtmlCode() {
        return this.htmlCode;
    }

    /**
     * Sets The HTML code of the campaign.
     * @param {String} htmlCode The HTML code of the campaign.
     */
    setHtmlCode(htmlCode) {
        this['htmlCode'] = htmlCode;
    }
/**
     * Returns The subject of the campaign.
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets The subject of the campaign.
     * @param {String} subject The subject of the campaign.
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * Returns Sender unique identifier.
     * @return {String}
     */
    getSender() {
        return this.sender;
    }

    /**
     * Sets Sender unique identifier.
     * @param {String} sender Sender unique identifier.
     */
    setSender(sender) {
        this['sender'] = sender;
    }
/**
     * Returns The preview text shown in email clients.
     * @return {String}
     */
    getPreviewText() {
        return this.previewText;
    }

    /**
     * Sets The preview text shown in email clients.
     * @param {String} previewText The preview text shown in email clients.
     */
    setPreviewText(previewText) {
        this['previewText'] = previewText;
    }
/**
     * Returns The type of scheduling for the campaign <br> 0: Send Now <br> 1: Send Later 
     * @return {module:sendx/model/CampaignRequest.ScheduleTypeEnum}
     */
    getScheduleType() {
        return this.scheduleType;
    }

    /**
     * Sets The type of scheduling for the campaign <br> 0: Send Now <br> 1: Send Later 
     * @param {module:sendx/model/CampaignRequest.ScheduleTypeEnum} scheduleType The type of scheduling for the campaign <br> 0: Send Now <br> 1: Send Later 
     */
    setScheduleType(scheduleType) {
        this['scheduleType'] = scheduleType;
    }
/**
     * Returns The condition for scheduling the campaign.
     * @return {String}
     */
    getScheduleCondition() {
        return this.scheduleCondition;
    }

    /**
     * Sets The condition for scheduling the campaign.
     * @param {String} scheduleCondition The condition for scheduling the campaign.
     */
    setScheduleCondition(scheduleCondition) {
        this['scheduleCondition'] = scheduleCondition;
    }
/**
     * Returns The specific time to send the campaign.
     * @return {String}
     */
    getTimeCondition() {
        return this.timeCondition;
    }

    /**
     * Sets The specific time to send the campaign.
     * @param {String} timeCondition The specific time to send the campaign.
     */
    setTimeCondition(timeCondition) {
        this['timeCondition'] = timeCondition;
    }
/**
     * Returns The timezone for the campaign scheduling.
     * @return {String}
     */
    getTimezone() {
        return this.timezone;
    }

    /**
     * Sets The timezone for the campaign scheduling.
     * @param {String} timezone The timezone for the campaign scheduling.
     */
    setTimezone(timezone) {
        this['timezone'] = timezone;
    }
/**
     * Returns Preferred timezone for scheduling.
     * @return {String}
     */
    getPreferredTimezone() {
        return this.preferredTimezone;
    }

    /**
     * Sets Preferred timezone for scheduling.
     * @param {String} preferredTimezone Preferred timezone for scheduling.
     */
    setPreferredTimezone(preferredTimezone) {
        this['preferredTimezone'] = preferredTimezone;
    }
/**
     * Returns Specific time preference for sending the campaign.
     * @return {String}
     */
    getPreferredTimeCondition() {
        return this.preferredTimeCondition;
    }

    /**
     * Sets Specific time preference for sending the campaign.
     * @param {String} preferredTimeCondition Specific time preference for sending the campaign.
     */
    setPreferredTimeCondition(preferredTimeCondition) {
        this['preferredTimeCondition'] = preferredTimeCondition;
    }
/**
     * Returns Whether to send emails in each contact's timezone.
     * @return {Boolean}
     */
    getSendInContactsTimezone() {
        return this.sendInContactsTimezone;
    }

    /**
     * Sets Whether to send emails in each contact's timezone.
     * @param {Boolean} sendInContactsTimezone Whether to send emails in each contact's timezone.
     */
    setSendInContactsTimezone(sendInContactsTimezone) {
        this['sendInContactsTimezone'] = sendInContactsTimezone;
    }
/**
     * Returns Whether to enable smart send features (e.g., optimizing send time).
     * @return {Boolean}
     */
    getSmartSend() {
        return this.smartSend;
    }

    /**
     * Sets Whether to enable smart send features (e.g., optimizing send time).
     * @param {Boolean} smartSend Whether to enable smart send features (e.g., optimizing send time).
     */
    setSmartSend(smartSend) {
        this['smartSend'] = smartSend;
    }
/**
     * Returns List of segment IDs to include.
     * @return {Array.<String>}
     */
    getIncludedSegments() {
        return this.includedSegments;
    }

    /**
     * Sets List of segment IDs to include.
     * @param {Array.<String>} includedSegments List of segment IDs to include.
     */
    setIncludedSegments(includedSegments) {
        this['includedSegments'] = includedSegments;
    }
/**
     * Returns List of list IDs to include.
     * @return {Array.<String>}
     */
    getIncludedLists() {
        return this.includedLists;
    }

    /**
     * Sets List of list IDs to include.
     * @param {Array.<String>} includedLists List of list IDs to include.
     */
    setIncludedLists(includedLists) {
        this['includedLists'] = includedLists;
    }
/**
     * Returns List of tag IDs to include.
     * @return {Array.<String>}
     */
    getIncludedTags() {
        return this.includedTags;
    }

    /**
     * Sets List of tag IDs to include.
     * @param {Array.<String>} includedTags List of tag IDs to include.
     */
    setIncludedTags(includedTags) {
        this['includedTags'] = includedTags;
    }
/**
     * Returns List of segment IDs to exclude.
     * @return {Array.<String>}
     */
    getExcludedSegments() {
        return this.excludedSegments;
    }

    /**
     * Sets List of segment IDs to exclude.
     * @param {Array.<String>} excludedSegments List of segment IDs to exclude.
     */
    setExcludedSegments(excludedSegments) {
        this['excludedSegments'] = excludedSegments;
    }
/**
     * Returns List of list IDs to exclude.
     * @return {Array.<String>}
     */
    getExcludedLists() {
        return this.excludedLists;
    }

    /**
     * Sets List of list IDs to exclude.
     * @param {Array.<String>} excludedLists List of list IDs to exclude.
     */
    setExcludedLists(excludedLists) {
        this['excludedLists'] = excludedLists;
    }
/**
     * Returns List of tag IDs to exclude.
     * @return {Array.<String>}
     */
    getExcludedTags() {
        return this.excludedTags;
    }

    /**
     * Sets List of tag IDs to exclude.
     * @param {Array.<String>} excludedTags List of tag IDs to exclude.
     */
    setExcludedTags(excludedTags) {
        this['excludedTags'] = excludedTags;
    }

}



/**
 * The name of the campaign.
 * @member {String} name
 */
CampaignRequest.prototype['name'] = undefined;

/**
 * The HTML code of the campaign.
 * @member {String} htmlCode
 */
CampaignRequest.prototype['htmlCode'] = undefined;

/**
 * The subject of the campaign.
 * @member {String} subject
 */
CampaignRequest.prototype['subject'] = undefined;

/**
 * Sender unique identifier.
 * @member {String} sender
 */
CampaignRequest.prototype['sender'] = undefined;

/**
 * The preview text shown in email clients.
 * @member {String} previewText
 */
CampaignRequest.prototype['previewText'] = undefined;

/**
 * The type of scheduling for the campaign <br> 0: Send Now <br> 1: Send Later 
 * @member {module:sendx/model/CampaignRequest.ScheduleTypeEnum} scheduleType
 */
CampaignRequest.prototype['scheduleType'] = undefined;

/**
 * The condition for scheduling the campaign.
 * @member {String} scheduleCondition
 */
CampaignRequest.prototype['scheduleCondition'] = undefined;

/**
 * The specific time to send the campaign.
 * @member {String} timeCondition
 */
CampaignRequest.prototype['timeCondition'] = undefined;

/**
 * The timezone for the campaign scheduling.
 * @member {String} timezone
 */
CampaignRequest.prototype['timezone'] = undefined;

/**
 * Preferred timezone for scheduling.
 * @member {String} preferredTimezone
 */
CampaignRequest.prototype['preferredTimezone'] = undefined;

/**
 * Specific time preference for sending the campaign.
 * @member {String} preferredTimeCondition
 */
CampaignRequest.prototype['preferredTimeCondition'] = undefined;

/**
 * Whether to send emails in each contact's timezone.
 * @member {Boolean} sendInContactsTimezone
 */
CampaignRequest.prototype['sendInContactsTimezone'] = undefined;

/**
 * Whether to enable smart send features (e.g., optimizing send time).
 * @member {Boolean} smartSend
 */
CampaignRequest.prototype['smartSend'] = undefined;

/**
 * List of segment IDs to include.
 * @member {Array.<String>} includedSegments
 */
CampaignRequest.prototype['includedSegments'] = undefined;

/**
 * List of list IDs to include.
 * @member {Array.<String>} includedLists
 */
CampaignRequest.prototype['includedLists'] = undefined;

/**
 * List of tag IDs to include.
 * @member {Array.<String>} includedTags
 */
CampaignRequest.prototype['includedTags'] = undefined;

/**
 * List of segment IDs to exclude.
 * @member {Array.<String>} excludedSegments
 */
CampaignRequest.prototype['excludedSegments'] = undefined;

/**
 * List of list IDs to exclude.
 * @member {Array.<String>} excludedLists
 */
CampaignRequest.prototype['excludedLists'] = undefined;

/**
 * List of tag IDs to exclude.
 * @member {Array.<String>} excludedTags
 */
CampaignRequest.prototype['excludedTags'] = undefined;





/**
 * Allowed values for the <code>scheduleType</code> property.
 * @enum {Number}
 * @readonly
 */
CampaignRequest['ScheduleTypeEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};



export default CampaignRequest;

