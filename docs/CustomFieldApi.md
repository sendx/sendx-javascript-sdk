# sendx.CustomFieldApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomField**](CustomFieldApi.md#createCustomField) | **POST** /customfield | Create custom field
[**deleteCustomField**](CustomFieldApi.md#deleteCustomField) | **DELETE** /customfield/{identifier} | Delete custom field
[**getAllCustomFields**](CustomFieldApi.md#getAllCustomFields) | **GET** /customfield | Get all custom fields
[**getCustomField**](CustomFieldApi.md#getCustomField) | **GET** /customfield/{identifier} | Get custom field by ID
[**updateCustomField**](CustomFieldApi.md#updateCustomField) | **PUT** /customfield/{identifier} | Update custom field



## createCustomField

> RestRCustomField createCustomField(restECustomField)

Create custom field

Creates a new custom field for storing contact data. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CustomFieldApi();
let restECustomField = new sendx.RestECustomField(); // RestECustomField | 
apiInstance.createCustomField(restECustomField).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restECustomField** | [**RestECustomField**](RestECustomField.md)|  | 

### Return type

[**RestRCustomField**](RestRCustomField.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomField

> DeleteResponse deleteCustomField(identifier)

Delete custom field

Deletes a custom field (data is preserved).  **🎯 Key Features:** - Remove unused fields - Data remains on contacts - Clean up field list 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CustomFieldApi();
let identifier = "identifier_example"; // String | Custom field identifier to update
apiInstance.deleteCustomField(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Custom field identifier to update | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCustomFields

> [RestRCustomField] getAllCustomFields(opts)

Get all custom fields

Retrieves all custom fields defined for your team. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CustomFieldApi();
let opts = {
  'offset': 0, // Number | Number of fields to skip for pagination
  'limit': 10, // Number | Maximum number of fields to return
  'search': "search_example" // String | Search custom fields by name (case-insensitive partial matching).  **Examples:** - `points` - Finds \"Loyalty points\", \"Reward points\" 
};
apiInstance.getAllCustomFields(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of fields to skip for pagination | [optional] [default to 0]
 **limit** | **Number**| Maximum number of fields to return | [optional] [default to 10]
 **search** | **String**| Search custom fields by name (case-insensitive partial matching).  **Examples:** - &#x60;points&#x60; - Finds \&quot;Loyalty points\&quot;, \&quot;Reward points\&quot;  | [optional] 

### Return type

[**[RestRCustomField]**](RestRCustomField.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomField

> RestRCustomField getCustomField(identifier)

Get custom field by ID

Retrieves details about a specific custom field. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CustomFieldApi();
let identifier = "identifier_example"; // String | Custom field identifier to update
apiInstance.getCustomField(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Custom field identifier to update | 

### Return type

[**RestRCustomField**](RestRCustomField.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomField

> RestRCustomField updateCustomField(restECustomField, identifier)

Update custom field

Updates a custom field definition. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CustomFieldApi();
let restECustomField = {"name":"Customer Tier","description":"Customer segmentation tier (Bronze/Silver/Gold)"}; // RestECustomField | 
let identifier = "identifier_example"; // String | Custom field identifier to update
apiInstance.updateCustomField(restECustomField, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restECustomField** | [**RestECustomField**](RestECustomField.md)|  | 
 **identifier** | **String**| Custom field identifier to update | 

### Return type

[**RestRCustomField**](RestRCustomField.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

