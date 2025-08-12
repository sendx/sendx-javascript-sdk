# sendx.RestEContact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the contact | [optional] 
**lastName** | **String** | Last name of the contact | [optional] 
**email** | **String** | Email address of the contact (required and must be unique within team).  **Validation:** - Must be a valid email format - Must be unique within the team - Cannot be empty or null  | 
**company** | **String** | Company name of the contact | [optional] 
**customFields** | **{String: String}** | Custom fields as key-value pairs. Keys should use &#x60;field_&#x60; prefix.  **Processing:** - Keys are case-sensitive - Values are stored as strings  **Examples:** - &#x60;\&quot;field_MnuqBAG2NPLm7PZMWbjQxt\&quot;: \&quot;Engineering\&quot;&#x60; → stored as &#x60;department: Engineering&#x60;  | [optional] 
**lists** | **[String]** | Array of list identifiers to associate with the contact.  Identifiers should use &#x60;list_&#x60; prefix.  **Processing:** - Invalid list IDs will send our 400 error - Duplicates will be removed  **Examples:** - &#x60;\&quot;list_OcuxJHdiAvujmwQVJfd3ss\&quot;&#x60; → valid prefixed format  | [optional] 
**tags** | **[String]** | Array of tag identifiers to associate with the contact. Identifiers should use &#x60;tag_&#x60; prefix.  **Processing:** - Invalid tag IDs will be ignored - Duplicates will be removed  **Examples:** - &#x60;\&quot;tag_UhsDkjL772Qbj5lWtT62VK\&quot;&#x60; → valid prefixed format  | [optional] 
**lastTrackedIp** | **String** | Last tracked IP address of the contact for analytics purposes.  **Usage:** - Used for geographic analytics - Helps with spam detection - Optional field  | [optional] 


