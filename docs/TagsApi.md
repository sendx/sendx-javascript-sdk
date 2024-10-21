# sendx.TagsApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsApi.md#createTag) | **POST** /tag | Create a Tag
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /tag/{tagId} | Delete a Tag
[**getAllTags**](TagsApi.md#getAllTags) | **GET** /tag | Get All Tags
[**getTagById**](TagsApi.md#getTagById) | **GET** /tag/{tagId} | Get a Tag by ID
[**updateTag**](TagsApi.md#updateTag) | **PUT** /tag/{tagId} | Update a Tag



## createTag

> CreateResponse createTag(tagRequest)

Create a Tag

Create a new tag for the account

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagsApi();
let tagRequest = new sendx.TagRequest(); // TagRequest | The tag content
apiInstance.createTag(tagRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagRequest** | [**TagRequest**](TagRequest.md)| The tag content | 

### Return type

[**CreateResponse**](CreateResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTag

> DeleteResponse deleteTag(tagId)

Delete a Tag

Delete an existing tag by ID

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagsApi();
let tagId = "tagId_example"; // String | ID of the tag to delete
apiInstance.deleteTag(tagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| ID of the tag to delete | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllTags

> [Tag] getAllTags(opts)

Get All Tags

Retrieve all tags for the account with optional pagination and search filters

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagsApi();
let opts = {
  'offset': 56, // Number | Offset for pagination
  'limit': 56, // Number | Limit the number of results
  'search': "search_example" // String | Search term to filter tags
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
 **offset** | **Number**| Offset for pagination | [optional] 
 **limit** | **Number**| Limit the number of results | [optional] 
 **search** | **String**| Search term to filter tags | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTagById

> Tag getTagById(tagId)

Get a Tag by ID

Retrieve a tag based on the provided tag ID

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagsApi();
let tagId = "tagId_example"; // String | ID of the tag you want to fetch
apiInstance.getTagById(tagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| ID of the tag you want to fetch | 

### Return type

[**Tag**](Tag.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## updateTag

> Response updateTag(tagRequest, tagId)

Update a Tag

Update an existing tag

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TagsApi();
let tagRequest = new sendx.TagRequest(); // TagRequest | The tag content
let tagId = "tagId_example"; // String | ID of the tag to update
apiInstance.updateTag(tagRequest, tagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagRequest** | [**TagRequest**](TagRequest.md)| The tag content | 
 **tagId** | **String**| ID of the tag to update | 

### Return type

[**Response**](Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

