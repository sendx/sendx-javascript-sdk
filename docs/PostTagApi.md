# sendx.PostTagApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPostTag**](PostTagApi.md#createPostTag) | **POST** /post/tag | Create post tag
[**deletePostTag**](PostTagApi.md#deletePostTag) | **DELETE** /post/tag/{identifier} | Delete post tag
[**getAllPostTags**](PostTagApi.md#getAllPostTags) | **GET** /post/tag | Get all post tags
[**getPostTag**](PostTagApi.md#getPostTag) | **GET** /post/tag/{identifier} | Get post tag by ID
[**updatePostTag**](PostTagApi.md#updatePostTag) | **PUT** /post/tag/{identifier} | Update post tag



## createPostTag

> RestRPostTag createPostTag(restEPostTag)

Create post tag

Creates a new tag for blog posts. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostTagApi();
let restEPostTag = new sendx.RestEPostTag(); // RestEPostTag | 
apiInstance.createPostTag(restEPostTag).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEPostTag** | [**RestEPostTag**](RestEPostTag.md)|  | 

### Return type

[**RestRPostTag**](RestRPostTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePostTag

> MessageResponse deletePostTag(identifier)

Delete post tag

Soft deletes a post tag. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostTagApi();
let identifier = "post_tag_leBDiFdrUnRmRz4nfopSrv"; // String | The unique post tag identifier to retrieve. - `post_tag_leBDiFdrUnRmRz4nfopSrv` 
apiInstance.deletePostTag(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique post tag identifier to retrieve. - &#x60;post_tag_leBDiFdrUnRmRz4nfopSrv&#x60;  | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPostTags

> [RestRPostTag] getAllPostTags()

Get all post tags

Retrieves all blog post tags. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostTagApi();
apiInstance.getAllPostTags().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[RestRPostTag]**](RestRPostTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPostTag

> RestRPostTag getPostTag(identifier)

Get post tag by ID

Retrieves a specific post tag. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostTagApi();
let identifier = "post_tag_leBDiFdrUnRmRz4nfopSrv"; // String | The unique post tag identifier to retrieve. - `post_tag_leBDiFdrUnRmRz4nfopSrv` 
apiInstance.getPostTag(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique post tag identifier to retrieve. - &#x60;post_tag_leBDiFdrUnRmRz4nfopSrv&#x60;  | 

### Return type

[**RestRPostTag**](RestRPostTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePostTag

> RestRPostTag updatePostTag(restEPostTag, identifier)

Update post tag

Updates a post tag. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostTagApi();
let restEPostTag = new sendx.RestEPostTag(); // RestEPostTag | 
let identifier = "post_tag_leBDiFdrUnRmRz4nfopSrv"; // String | The unique post tag identifier to retrieve. - `post_tag_leBDiFdrUnRmRz4nfopSrv` 
apiInstance.updatePostTag(restEPostTag, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEPostTag** | [**RestEPostTag**](RestEPostTag.md)|  | 
 **identifier** | **String**| The unique post tag identifier to retrieve. - &#x60;post_tag_leBDiFdrUnRmRz4nfopSrv&#x60;  | 

### Return type

[**RestRPostTag**](RestRPostTag.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

