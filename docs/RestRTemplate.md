# sendx.RestRTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique template identifier with template_ prefix | [optional] 
**name** | **String** | Name of the template | [optional] 
**subject** | **String** | Email subject line (if applicable) | [optional] 
**htmlCode** | **String** | HTML content of the template | [optional] 
**templateCode** | **String** | Template code for visual editors (JSON structure) | [optional] 
**type** | **Number** | Template type.  **Values:** - &#x60;0&#x60; - Email template - &#x60;1&#x60; - Other types  | [optional] 
**thumbnail** | **String** | URL to template thumbnail image | [optional] 
**editorType** | **Number** | Editor type used to create the template.  **Values:** - &#x60;0&#x60; - PlainText - &#x60;1&#x60; - DragDrop - &#x60;2&#x60; - SendxEditor  | [optional] 
**created** | **Date** | Template creation timestamp | [optional] 
**updated** | **Date** | Template last update timestamp | [optional] 



## Enum: EditorTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)




