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
 * The Campaign model module.
 * @module sendx/model/Campaign
 * @version 1.0.0
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * @alias module:sendx/model/Campaign
     */
    constructor() { 
        
        Campaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendx/model/Campaign} obj Optional instance to populate.
     * @return {module:sendx/model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('trackReply')) {
                obj['trackReply'] = ApiClient.convertToType(data['trackReply'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
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
            if (data.hasOwnProperty('preferredTimeCondition')) {
                obj['preferredTimeCondition'] = ApiClient.convertToType(data['preferredTimeCondition'], 'String');
            }
            if (data.hasOwnProperty('preferredTimezone')) {
                obj['preferredTimezone'] = ApiClient.convertToType(data['preferredTimezone'], 'String');
            }
            if (data.hasOwnProperty('strategy')) {
                obj['strategy'] = ApiClient.convertToType(data['strategy'], 'String');
            }
            if (data.hasOwnProperty('sendInContactsTimezone')) {
                obj['sendInContactsTimezone'] = ApiClient.convertToType(data['sendInContactsTimezone'], 'Boolean');
            }
            if (data.hasOwnProperty('smartSend')) {
                obj['smartSend'] = ApiClient.convertToType(data['smartSend'], 'Boolean');
            }
            if (data.hasOwnProperty('isArchived')) {
                obj['isArchived'] = ApiClient.convertToType(data['isArchived'], 'Boolean');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('campaignScreenshotUrl')) {
                obj['campaignScreenshotUrl'] = ApiClient.convertToType(data['campaignScreenshotUrl'], 'String');
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
     * Validates the JSON data with respect to <code>Campaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Campaign</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['preferredTimeCondition'] && !(typeof data['preferredTimeCondition'] === 'string' || data['preferredTimeCondition'] instanceof String)) {
            throw new Error("Expected the field `preferredTimeCondition` to be a primitive type in the JSON string but got " + data['preferredTimeCondition']);
        }
        // ensure the json data is a string
        if (data['preferredTimezone'] && !(typeof data['preferredTimezone'] === 'string' || data['preferredTimezone'] instanceof String)) {
            throw new Error("Expected the field `preferredTimezone` to be a primitive type in the JSON string but got " + data['preferredTimezone']);
        }
        // ensure the json data is a string
        if (data['strategy'] && !(typeof data['strategy'] === 'string' || data['strategy'] instanceof String)) {
            throw new Error("Expected the field `strategy` to be a primitive type in the JSON string but got " + data['strategy']);
        }
        // ensure the json data is a string
        if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
            throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
        }
        // ensure the json data is a string
        if (data['campaignScreenshotUrl'] && !(typeof data['campaignScreenshotUrl'] === 'string' || data['campaignScreenshotUrl'] instanceof String)) {
            throw new Error("Expected the field `campaignScreenshotUrl` to be a primitive type in the JSON string but got " + data['campaignScreenshotUrl']);
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
     * Returns Encrypted ID of the campaign
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets Encrypted ID of the campaign
     * @param {String} id Encrypted ID of the campaign
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Name of the campaign
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the campaign
     * @param {String} name Name of the campaign
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Indicates if replies to the campaign should be tracked
     * @return {Boolean}
     */
    getTrackReply() {
        return this.trackReply;
    }

    /**
     * Sets Indicates if replies to the campaign should be tracked
     * @param {Boolean} trackReply Indicates if replies to the campaign should be tracked
     */
    setTrackReply(trackReply) {
        this['trackReply'] = trackReply;
    }
/**
     * Returns Campaign status: 0 (Draft), 1 (Scheduled), 2 (Sending), 3 (Sent), 4 (Quarantined)
     * @return {module:sendx/model/Campaign.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets Campaign status: 0 (Draft), 1 (Scheduled), 2 (Sending), 3 (Sent), 4 (Quarantined)
     * @param {module:sendx/model/Campaign.StatusEnum} status Campaign status: 0 (Draft), 1 (Scheduled), 2 (Sending), 3 (Sent), 4 (Quarantined)
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns Schedule type: 0 (Schedule later), 1 (Send Now), 2 (Trigger via automation), 3 (Recurring)
     * @return {module:sendx/model/Campaign.ScheduleTypeEnum}
     */
    getScheduleType() {
        return this.scheduleType;
    }

    /**
     * Sets Schedule type: 0 (Schedule later), 1 (Send Now), 2 (Trigger via automation), 3 (Recurring)
     * @param {module:sendx/model/Campaign.ScheduleTypeEnum} scheduleType Schedule type: 0 (Schedule later), 1 (Send Now), 2 (Trigger via automation), 3 (Recurring)
     */
    setScheduleType(scheduleType) {
        this['scheduleType'] = scheduleType;
    }
/**
     * Returns Condition for scheduling the campaign
     * @return {String}
     */
    getScheduleCondition() {
        return this.scheduleCondition;
    }

    /**
     * Sets Condition for scheduling the campaign
     * @param {String} scheduleCondition Condition for scheduling the campaign
     */
    setScheduleCondition(scheduleCondition) {
        this['scheduleCondition'] = scheduleCondition;
    }
/**
     * Returns Time-related condition for the campaign
     * @return {String}
     */
    getTimeCondition() {
        return this.timeCondition;
    }

    /**
     * Sets Time-related condition for the campaign
     * @param {String} timeCondition Time-related condition for the campaign
     */
    setTimeCondition(timeCondition) {
        this['timeCondition'] = timeCondition;
    }
/**
     * Returns Timezone for the scheduled send
     * @return {String}
     */
    getTimezone() {
        return this.timezone;
    }

    /**
     * Sets Timezone for the scheduled send
     * @param {String} timezone Timezone for the scheduled send
     */
    setTimezone(timezone) {
        this['timezone'] = timezone;
    }
/**
     * Returns Preferred time condition for the campaign
     * @return {String}
     */
    getPreferredTimeCondition() {
        return this.preferredTimeCondition;
    }

    /**
     * Sets Preferred time condition for the campaign
     * @param {String} preferredTimeCondition Preferred time condition for the campaign
     */
    setPreferredTimeCondition(preferredTimeCondition) {
        this['preferredTimeCondition'] = preferredTimeCondition;
    }
/**
     * Returns Preferred timezone for sending the campaign
     * @return {String}
     */
    getPreferredTimezone() {
        return this.preferredTimezone;
    }

    /**
     * Sets Preferred timezone for sending the campaign
     * @param {String} preferredTimezone Preferred timezone for sending the campaign
     */
    setPreferredTimezone(preferredTimezone) {
        this['preferredTimezone'] = preferredTimezone;
    }
/**
     * Returns Strategy for the campaign
     * @return {String}
     */
    getStrategy() {
        return this.strategy;
    }

    /**
     * Sets Strategy for the campaign
     * @param {String} strategy Strategy for the campaign
     */
    setStrategy(strategy) {
        this['strategy'] = strategy;
    }
/**
     * Returns Indicates if the campaign should be sent in the recipient's timezone
     * @return {Boolean}
     */
    getSendInContactsTimezone() {
        return this.sendInContactsTimezone;
    }

    /**
     * Sets Indicates if the campaign should be sent in the recipient's timezone
     * @param {Boolean} sendInContactsTimezone Indicates if the campaign should be sent in the recipient's timezone
     */
    setSendInContactsTimezone(sendInContactsTimezone) {
        this['sendInContactsTimezone'] = sendInContactsTimezone;
    }
/**
     * Returns Indicates if smart sending should be used
     * @return {Boolean}
     */
    getSmartSend() {
        return this.smartSend;
    }

    /**
     * Sets Indicates if smart sending should be used
     * @param {Boolean} smartSend Indicates if smart sending should be used
     */
    setSmartSend(smartSend) {
        this['smartSend'] = smartSend;
    }
/**
     * Returns Indicates if the campaign is archived
     * @return {Boolean}
     */
    getIsArchived() {
        return this.isArchived;
    }

    /**
     * Sets Indicates if the campaign is archived
     * @param {Boolean} isArchived Indicates if the campaign is archived
     */
    setIsArchived(isArchived) {
        this['isArchived'] = isArchived;
    }
/**
     * Returns Information about the sender of the campaign
     * @return {String}
     */
    getSender() {
        return this.sender;
    }

    /**
     * Sets Information about the sender of the campaign
     * @param {String} sender Information about the sender of the campaign
     */
    setSender(sender) {
        this['sender'] = sender;
    }
/**
     * Returns URL of the campaign's screenshot
     * @return {String}
     */
    getCampaignScreenshotUrl() {
        return this.campaignScreenshotUrl;
    }

    /**
     * Sets URL of the campaign's screenshot
     * @param {String} campaignScreenshotUrl URL of the campaign's screenshot
     */
    setCampaignScreenshotUrl(campaignScreenshotUrl) {
        this['campaignScreenshotUrl'] = campaignScreenshotUrl;
    }
/**
     * Returns Segments to be included in the campaign
     * @return {Array.<String>}
     */
    getIncludedSegments() {
        return this.includedSegments;
    }

    /**
     * Sets Segments to be included in the campaign
     * @param {Array.<String>} includedSegments Segments to be included in the campaign
     */
    setIncludedSegments(includedSegments) {
        this['includedSegments'] = includedSegments;
    }
/**
     * Returns Lists to be included in the campaign
     * @return {Array.<String>}
     */
    getIncludedLists() {
        return this.includedLists;
    }

    /**
     * Sets Lists to be included in the campaign
     * @param {Array.<String>} includedLists Lists to be included in the campaign
     */
    setIncludedLists(includedLists) {
        this['includedLists'] = includedLists;
    }
/**
     * Returns Tags to be included in the campaign
     * @return {Array.<String>}
     */
    getIncludedTags() {
        return this.includedTags;
    }

    /**
     * Sets Tags to be included in the campaign
     * @param {Array.<String>} includedTags Tags to be included in the campaign
     */
    setIncludedTags(includedTags) {
        this['includedTags'] = includedTags;
    }
/**
     * Returns Segments to be excluded from the campaign
     * @return {Array.<String>}
     */
    getExcludedSegments() {
        return this.excludedSegments;
    }

    /**
     * Sets Segments to be excluded from the campaign
     * @param {Array.<String>} excludedSegments Segments to be excluded from the campaign
     */
    setExcludedSegments(excludedSegments) {
        this['excludedSegments'] = excludedSegments;
    }
/**
     * Returns Lists to be excluded from the campaign
     * @return {Array.<String>}
     */
    getExcludedLists() {
        return this.excludedLists;
    }

    /**
     * Sets Lists to be excluded from the campaign
     * @param {Array.<String>} excludedLists Lists to be excluded from the campaign
     */
    setExcludedLists(excludedLists) {
        this['excludedLists'] = excludedLists;
    }
/**
     * Returns Tags to be excluded from the campaign
     * @return {Array.<String>}
     */
    getExcludedTags() {
        return this.excludedTags;
    }

    /**
     * Sets Tags to be excluded from the campaign
     * @param {Array.<String>} excludedTags Tags to be excluded from the campaign
     */
    setExcludedTags(excludedTags) {
        this['excludedTags'] = excludedTags;
    }

}



/**
 * Encrypted ID of the campaign
 * @member {String} id
 */
Campaign.prototype['id'] = undefined;

/**
 * Name of the campaign
 * @member {String} name
 */
Campaign.prototype['name'] = undefined;

/**
 * Indicates if replies to the campaign should be tracked
 * @member {Boolean} trackReply
 */
Campaign.prototype['trackReply'] = undefined;

/**
 * Campaign status: 0 (Draft), 1 (Scheduled), 2 (Sending), 3 (Sent), 4 (Quarantined)
 * @member {module:sendx/model/Campaign.StatusEnum} status
 */
Campaign.prototype['status'] = undefined;

/**
 * Schedule type: 0 (Schedule later), 1 (Send Now), 2 (Trigger via automation), 3 (Recurring)
 * @member {module:sendx/model/Campaign.ScheduleTypeEnum} scheduleType
 */
Campaign.prototype['scheduleType'] = undefined;

/**
 * Condition for scheduling the campaign
 * @member {String} scheduleCondition
 */
Campaign.prototype['scheduleCondition'] = undefined;

/**
 * Time-related condition for the campaign
 * @member {String} timeCondition
 */
Campaign.prototype['timeCondition'] = undefined;

/**
 * Timezone for the scheduled send
 * @member {String} timezone
 */
Campaign.prototype['timezone'] = undefined;

/**
 * Preferred time condition for the campaign
 * @member {String} preferredTimeCondition
 */
Campaign.prototype['preferredTimeCondition'] = undefined;

/**
 * Preferred timezone for sending the campaign
 * @member {String} preferredTimezone
 */
Campaign.prototype['preferredTimezone'] = undefined;

/**
 * Strategy for the campaign
 * @member {String} strategy
 */
Campaign.prototype['strategy'] = undefined;

/**
 * Indicates if the campaign should be sent in the recipient's timezone
 * @member {Boolean} sendInContactsTimezone
 */
Campaign.prototype['sendInContactsTimezone'] = undefined;

/**
 * Indicates if smart sending should be used
 * @member {Boolean} smartSend
 */
Campaign.prototype['smartSend'] = undefined;

/**
 * Indicates if the campaign is archived
 * @member {Boolean} isArchived
 */
Campaign.prototype['isArchived'] = undefined;

/**
 * Information about the sender of the campaign
 * @member {String} sender
 */
Campaign.prototype['sender'] = undefined;

/**
 * URL of the campaign's screenshot
 * @member {String} campaignScreenshotUrl
 */
Campaign.prototype['campaignScreenshotUrl'] = undefined;

/**
 * Segments to be included in the campaign
 * @member {Array.<String>} includedSegments
 */
Campaign.prototype['includedSegments'] = undefined;

/**
 * Lists to be included in the campaign
 * @member {Array.<String>} includedLists
 */
Campaign.prototype['includedLists'] = undefined;

/**
 * Tags to be included in the campaign
 * @member {Array.<String>} includedTags
 */
Campaign.prototype['includedTags'] = undefined;

/**
 * Segments to be excluded from the campaign
 * @member {Array.<String>} excludedSegments
 */
Campaign.prototype['excludedSegments'] = undefined;

/**
 * Lists to be excluded from the campaign
 * @member {Array.<String>} excludedLists
 */
Campaign.prototype['excludedLists'] = undefined;

/**
 * Tags to be excluded from the campaign
 * @member {Array.<String>} excludedTags
 */
Campaign.prototype['excludedTags'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
Campaign['StatusEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3,

    /**
     * value: 4
     * @const
     */
    "4": 4
};


/**
 * Allowed values for the <code>scheduleType</code> property.
 * @enum {Number}
 * @readonly
 */
Campaign['ScheduleTypeEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3
};



export default Campaign;

