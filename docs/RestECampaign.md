# sendx.RestECampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Campaign name for internal organization | 
**subject** | **String** | Email subject line with personalization support.  **Features:** - Supports template variables ({{contact.firstName}}) - Emoji support for better engagement - A/B testing variations supported  | 
**sender** | **String** | Sender identifier.  **Note:** Sender must be verified before use  | 
**htmlCode** | **String** | HTML content of the email campaign | 
**previewText** | **String** | Preview text shown in email clients | [optional] 
**plainText** | **String** | Plain text version for better deliverability | [optional] 
**scheduleType** | **Number** | Campaign scheduling type.  **Values:** - &#x60;0&#x60; - Schedule for specific date/time - &#x60;1&#x60; - Send immediately  | [optional] 
**scheduleCondition** | **String** | datetime for scheduled campaigns (required if scheduleType&#x3D;0) | [optional] 
**timeCondition** | **String** | Time condition for scheduled campaigns in HH:MM PM/AM format | [optional] 
**timezone** | **String** | Timezone for scheduled campaigns (IANA format) | [optional] 
**preferredTimezone** | **String** | Preferred timezone for smart send optimization (required for smartSend and sendInContactsTimezone) | [optional] 
**preferredTimeCondition** | **String** | Preferred time optimization setting (required for smartSend and sendInContactsTimezone) | [optional] 
**sendInContactsTimezone** | **Boolean** | Send at specified time in each contact&#39;s timezone | [optional] 
**smartSend** | **Boolean** | Enable AI-powered send time optimization | [optional] 
**includedSegments** | **[String]** | Segment IDs to include | [optional] 
**includedLists** | **[String]** | List IDs to include | [optional] 
**includedTags** | **[String]** | Tag IDs to include | [optional] 
**excludedSegments** | **[String]** | Segment IDs to exclude | [optional] 
**excludedLists** | **[String]** | List IDs to exclude | [optional] 
**excludedTags** | **[String]** | Tag IDs to exclude (prefix automatically stripped) | [optional] 


