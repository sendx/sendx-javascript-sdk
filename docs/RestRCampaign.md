# sendx.RestRCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Internal campaign name | 
**subject** | **String** | Email subject line | 
**preheader** | **String** | Email preview text | [optional] 
**sender** | **String** | Sender id | 
**htmlContent** | **String** | HTML email content | [optional] 
**textContent** | **String** | Plain text email content | [optional] 
**scheduleTime** | **Date** | When to send (if scheduled) | 
**scheduleType** | **Number** | Campaign scheduling type.  **Values:** - &#x60;0&#x60; - Schedule later - &#x60;1&#x60; - Send Now  | [default to 0]
**scheduleCondition** | **String** | datetime for scheduled campaigns (required if scheduleType&#x3D;1) | 
**timeCondition** | **String** | Time-related condition for the campaign | [optional] 
**timezone** | **String** | Campaign timezone | [optional] 
**smartSend** | **Boolean** | Timezone for the scheduled send | [optional] 
**sendInContactsTimezone** | **Boolean** | Send at specified time in each contact&#39;s timezone | [optional] 
**preferredTimeCondition** | **String** | Preferred time condition, in case of smartSend and sendInContactTimeZone | [optional] 
**preferredTimezone** | **String** | Preferred timezone for smart send optimization | [optional] 
**strategy** | **String** | Campaign delivery strategy | [optional] 
**includedSegments** | **[String]** | Included segment IDs | [optional] 
**includedLists** | **[String]** | Included list IDs with prefix | 
**includedTags** | **[String]** | Included tag IDs with prefix | [optional] 
**excludedSegments** | **[String]** | Excluded segment IDs | [optional] 
**excludedLists** | **[String]** | Excluded list IDs with prefix | 
**excludedTags** | **[String]** | Excluded tag IDs with prefix | [optional] 
**created** | **Date** |  | [optional] 
**updated** | **Date** |  | [optional] 


