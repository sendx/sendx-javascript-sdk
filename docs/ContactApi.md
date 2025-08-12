# sendx.ContactApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactApi.md#createContact) | **POST** /contact | Create a new contact
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /contact/{identifier} | Delete contact
[**getAllContacts**](ContactApi.md#getAllContacts) | **GET** /contact | Get all contacts
[**getContact**](ContactApi.md#getContact) | **GET** /contact/{identifier} | Get contact by ID
[**unsubscribeContact**](ContactApi.md#unsubscribeContact) | **POST** /contact/unsubscribe/{identifier} | Unsubscribe contact
[**updateContact**](ContactApi.md#updateContact) | **PUT** /contact/{identifier} | Update contact



## createContact

> RestRContact createContact(restEContact)

Create a new contact

Creates a new contact in your SendX team with the provided information.  **🎯 Key Features:** - Email validation and duplicate detection - Automatic relationship building with lists and tags - Smart custom field handling  **📋 Business Rules:** - Email is mandatory and must be unique within the team - Last tracked IP is stored for analytics 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let restEContact = {"email":"john.doe@example.com"}; // RestEContact | 
apiInstance.createContact(restEContact).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEContact** | [**RestEContact**](RestEContact.md)|  | 

### Return type

[**RestRContact**](RestRContact.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> DeleteResponse deleteContact(identifier)

Delete contact

Soft deletes a contact from your team.  **🎯 Key Features:** - Soft delete preserves data - Removes from all lists - Cancels pending campaigns - Maintains historical data 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let identifier = "contact_BnKjkbBBS500CoBCP0oChQ"; // String | Resource identifier with prefix (e.g., `contact_BnKjkbBBS500CoBCP0oChQ`)  **Format:** `<prefix>_<22-character-id>` 
apiInstance.deleteContact(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Resource identifier with prefix (e.g., &#x60;contact_BnKjkbBBS500CoBCP0oChQ&#x60;)  **Format:** &#x60;&lt;prefix&gt;_&lt;22-character-id&gt;&#x60;  | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllContacts

> [RestRContact] getAllContacts(opts)

Get all contacts

Retrieves a paginated list of all contacts in your team with optional filtering capabilities.  **🎯 Key Features:** - Pagination support with offset/limit - Search contacts by name or email - All relationships included (lists, tags, custom fields) - Prefixed IDs for easy integration  **📊 Pagination:** - Default limit: 10 contacts per page - Maximum limit: 100 contacts per page - Use offset for page navigation  **🔍 Search:** - Searches across firstName, lastName, and email fields - Case-insensitive partial matching - Combine with pagination for large datasets 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let opts = {
  'offset': 0, // Number | Number of records to skip for pagination.  **Examples:** - `0` - First page (default) - `50` - Second page (with limit=50) - `100` - Third page (with limit=50) 
  'limit': 10, // Number | Maximum number of records to return.  **Constraints:** - Minimum: 1 - Maximum: 100 - Default: 10 
  'search': "john" // String | Search term to filter contacts by name or email.  **Search Behavior:** - Searches firstName, lastName, and email fields - Case-insensitive partial matching - Minimum 2 characters for search  **Examples:** - `john` - Finds \"John Doe\", \"johnson@example.com\" - `@company.com` - Finds all emails from company.com - `smith` - Finds \"John Smith\", \"smith@email.com\" 
};
apiInstance.getAllContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of records to skip for pagination.  **Examples:** - &#x60;0&#x60; - First page (default) - &#x60;50&#x60; - Second page (with limit&#x3D;50) - &#x60;100&#x60; - Third page (with limit&#x3D;50)  | [optional] [default to 0]
 **limit** | **Number**| Maximum number of records to return.  **Constraints:** - Minimum: 1 - Maximum: 100 - Default: 10  | [optional] [default to 50]
 **search** | **String**| Search term to filter contacts by name or email.  **Search Behavior:** - Searches firstName, lastName, and email fields - Case-insensitive partial matching - Minimum 2 characters for search  **Examples:** - &#x60;john&#x60; - Finds \&quot;John Doe\&quot;, \&quot;johnson@example.com\&quot; - &#x60;@company.com&#x60; - Finds all emails from company.com - &#x60;smith&#x60; - Finds \&quot;John Smith\&quot;, \&quot;smith@email.com\&quot;  | [optional] 

### Return type

[**[RestRContact]**](RestRContact.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> RestRContact getContact(identifier)

Get contact by ID

Retrieves detailed information about a specific contact.  **🎯 Key Features:** - Returns complete contact profile - Includes all lists and tags - Shows custom field values - Provides engagement metrics 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let identifier = "contact_BnKjkbBBS500CoBCP0oChQ"; // String | Resource identifier with prefix (e.g., `contact_BnKjkbBBS500CoBCP0oChQ`)  **Format:** `<prefix>_<22-character-id>` 
apiInstance.getContact(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Resource identifier with prefix (e.g., &#x60;contact_BnKjkbBBS500CoBCP0oChQ&#x60;)  **Format:** &#x60;&lt;prefix&gt;_&lt;22-character-id&gt;&#x60;  | 

### Return type

[**RestRContact**](RestRContact.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unsubscribeContact

> MessageResponse unsubscribeContact(identifier)

Unsubscribe contact

Unsubscribes a contact from all marketing communications.  **🎯 Key Features:** - Marks contact as unsubscribed - Removes from all active campaigns - Maintains unsubscribe history - Complies with anti-spam regulations 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let identifier = "contact_BnKjkbBBS500CoBCP0oChQ"; // String | Resource identifier with prefix (e.g., `contact_BnKjkbBBS500CoBCP0oChQ`)  **Format:** `<prefix>_<22-character-id>` 
apiInstance.unsubscribeContact(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Resource identifier with prefix (e.g., &#x60;contact_BnKjkbBBS500CoBCP0oChQ&#x60;)  **Format:** &#x60;&lt;prefix&gt;_&lt;22-character-id&gt;&#x60;  | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContact

> RestRContact updateContact(restEContact, identifier)

Update contact

Updates an existing contact&#39;s information.  **🎯 Key Features:** - Partial updates supported - Add/remove lists and tags - Update custom fields - Change email address 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let restEContact = {"firstName":"Alexander","lastName":"Johnson-Smith","company":"New Enterprise Corp"}; // RestEContact | 
let identifier = "contact_BnKjkbBBS500CoBCP0oChQ"; // String | Resource identifier with prefix (e.g., `contact_BnKjkbBBS500CoBCP0oChQ`)  **Format:** `<prefix>_<22-character-id>` 
apiInstance.updateContact(restEContact, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEContact** | [**RestEContact**](RestEContact.md)|  | 
 **identifier** | **String**| Resource identifier with prefix (e.g., &#x60;contact_BnKjkbBBS500CoBCP0oChQ&#x60;)  **Format:** &#x60;&lt;prefix&gt;_&lt;22-character-id&gt;&#x60;  | 

### Return type

[**RestRContact**](RestRContact.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

