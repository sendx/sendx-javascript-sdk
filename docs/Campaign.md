# sendx.Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Encrypted ID of the campaign | [optional] 
**name** | **String** | Name of the campaign | [optional] 
**trackReply** | **Boolean** | Indicates if replies to the campaign should be tracked | [optional] 
**status** | **Number** | Campaign status: 0 (Draft), 1 (Scheduled), 2 (Sending), 3 (Sent), 4 (Quarantined) | [optional] 
**scheduleType** | **Number** | Schedule type: 0 (Schedule later), 1 (Send Now), 2 (Trigger via automation), 3 (Recurring) | [optional] 
**scheduleCondition** | **String** | Condition for scheduling the campaign | [optional] 
**timeCondition** | **String** | Time-related condition for the campaign | [optional] 
**timezone** | **String** | Timezone for the scheduled send | [optional] 
**preferredTimeCondition** | **String** | Preferred time condition for the campaign | [optional] 
**preferredTimezone** | **String** | Preferred timezone for sending the campaign | [optional] 
**strategy** | **String** | Strategy for the campaign | [optional] 
**sendInContactsTimezone** | **Boolean** | Indicates if the campaign should be sent in the recipient&#39;s timezone | [optional] 
**smartSend** | **Boolean** | Indicates if smart sending should be used | [optional] 
**isArchived** | **Boolean** | Indicates if the campaign is archived | [optional] 
**sender** | **String** | Information about the sender of the campaign | [optional] 
**campaignScreenshotUrl** | **String** | URL of the campaign&#39;s screenshot | [optional] 
**includedSegments** | **[String]** | Segments to be included in the campaign | [optional] 
**includedLists** | **[String]** | Lists to be included in the campaign | [optional] 
**includedTags** | **[String]** | Tags to be included in the campaign | [optional] 
**excludedSegments** | **[String]** | Segments to be excluded from the campaign | [optional] 
**excludedLists** | **[String]** | Lists to be excluded from the campaign | [optional] 
**excludedTags** | **[String]** | Tags to be excluded from the campaign | [optional] 



## Enum: StatusEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)





## Enum: ScheduleTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)




