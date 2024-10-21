# sendx.Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifier for the contact. | [optional] 
**firstName** | **String** | The first name of the contact. | [optional] 
**lastName** | **String** | The last name of the contact. | [optional] 
**email** | **String** | The email address of the contact. | [optional] 
**company** | **String** | The company of the contact. | [optional] 
**customFields** | **{String: String}** | Custom fields and their values | [optional] 
**unsubscribed** | **Boolean** | Indicates if the contact has unsubscribed from emails. | [optional] 
**bounced** | **Boolean** | Indicates if the contact&#39;s email has bounced. | [optional] 
**spam** | **Boolean** | Indicates if the contact marked the email as spam. | [optional] 
**created** | **Date** | The date and time when the contact was created. | [optional] 
**updated** | **Date** | The date and time when the contact was last updated. | [optional] 
**blocked** | **Boolean** | Indicates if the contact is blocked from receiving emails. | [optional] 
**dropped** | **Boolean** | Indicates if emails to this contact were dropped. | [optional] 
**LTV** | **Number** | Lifetime value (LTV) of the contact in currency units. | [optional] 
**contactSource** | **Number** | The source from which the contact was added. Possible values:  | [optional] 
**lastTrackedIp** | **String** | The last known IP address tracked for the contact. | [optional] 
**lists** | **[String]** | A list of &#x60;lists&#x60; ids the contact is subscribed to. | [optional] 
**tags** | **[String]** | &#x60;Tag&#x60; ids associated with the contact for segmentation or categorization. | [optional] 



## Enum: ContactSourceEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)

* `10` (value: `10`)

* `11` (value: `11`)

* `12` (value: `12`)

* `13` (value: `13`)

* `14` (value: `14`)

* `15` (value: `15`)

* `16` (value: `16`)

* `17` (value: `17`)

* `18` (value: `18`)

* `19` (value: `19`)




