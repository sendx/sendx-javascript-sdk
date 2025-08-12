# sendx.TagApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /tag | Create tag
[**deleteTag**](TagApi.md#deleteTag) | **DELETE** /tag/{identifier} | Delete tag
[**getAllTags**](TagApi.md#getAllTags) | **GET** /tag | Get all tags
[**getTag**](TagApi.md#getTag) | **GET** /tag/{identifier} | Get tag by ID
[**updateTag**](TagApi.md#updateTag) | **PUT** /tag/{identifier} | Update tag



## createTag

> RestRTag createTag(restETag)

Create tag

Creates a new tag for contact categorization. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagApi();
let restETag = {"name":"VIP Customer"}; // RestETag | 
apiInstance.createTag(restETag).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restETag** | [**RestETag**](RestETag.md)|  | 

### Return type

[**RestRTag**](RestRTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTag

> DeleteResponse deleteTag(identifier)

Delete tag

Deletes a tag from the system. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagApi();
let identifier = "identifier_example"; // String | Tag identifier to update
apiInstance.deleteTag(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Tag identifier to update | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllTags

> [RestRTag] getAllTags(opts)

Get all tags

Retrieves all tags in your team. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagApi();
let opts = {
  'offset': 0, // Number | Number of tags to skip
  'limit': 10 // Number | Maximum number of tags to return
};
apiInstance.getAllTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of tags to skip | [optional] [default to 0]
 **limit** | **Number**| Maximum number of tags to return | [optional] [default to 10]

### Return type

[**[RestRTag]**](RestRTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTag

> RestRTag getTag(identifier)

Get tag by ID

Retrieves detailed information about a specific tag. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagApi();
let identifier = "identifier_example"; // String | Tag identifier to retrieve
apiInstance.getTag(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Tag identifier to retrieve | 

### Return type

[**RestRTag**](RestRTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTag

> RestRTag updateTag(restETag, identifier)

Update tag

Updates an existing tag&#39;s name. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagApi();
let restETag = new sendx.RestETag(); // RestETag | 
let identifier = "identifier_example"; // String | Tag identifier to update
apiInstance.updateTag(restETag, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restETag** | [**RestETag**](RestETag.md)|  | 
 **identifier** | **String**| Tag identifier to update | 

### Return type

[**RestRTag**](RestRTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

