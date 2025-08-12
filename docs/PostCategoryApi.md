# sendx.PostCategoryApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPostCategory**](PostCategoryApi.md#createPostCategory) | **POST** /post/category | Create post category
[**deletePostCategory**](PostCategoryApi.md#deletePostCategory) | **DELETE** /post/category/{identifier} | Delete post category
[**getAllPostCategories**](PostCategoryApi.md#getAllPostCategories) | **GET** /post/category | Get all post categories
[**getPostCategory**](PostCategoryApi.md#getPostCategory) | **GET** /post/category/{identifier} | Get post category by ID
[**updatePostCategory**](PostCategoryApi.md#updatePostCategory) | **PUT** /post/category/{identifier} | Update post category



## createPostCategory

> RestRPostCategory createPostCategory(restEPostCategory)

Create post category

Creates a new category for organizing blog posts. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostCategoryApi();
let restEPostCategory = {"name":"Product Updates"}; // RestEPostCategory | 
apiInstance.createPostCategory(restEPostCategory).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEPostCategory** | [**RestEPostCategory**](RestEPostCategory.md)|  | 

### Return type

[**RestRPostCategory**](RestRPostCategory.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePostCategory

> MessageResponse deletePostCategory(identifier)

Delete post category

Soft deletes a post category. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostCategoryApi();
let identifier = "post_category_YzS1wOU20yw87UUHKxMzwn"; // String | The unique post category identifier to retrieve. - `post_category_YzS1wOU20yw87UUHKxMzwn` 
apiInstance.deletePostCategory(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique post category identifier to retrieve. - &#x60;post_category_YzS1wOU20yw87UUHKxMzwn&#x60;  | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPostCategories

> [RestRPostCategory] getAllPostCategories()

Get all post categories

Retrieves all blog post categories. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostCategoryApi();
apiInstance.getAllPostCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[RestRPostCategory]**](RestRPostCategory.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPostCategory

> RestRPostCategory getPostCategory(identifier)

Get post category by ID

Retrieves a specific post category. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostCategoryApi();
let identifier = "post_category_YzS1wOU20yw87UUHKxMzwn"; // String | The unique post category identifier to retrieve. - `post_category_YzS1wOU20yw87UUHKxMzwn` 
apiInstance.getPostCategory(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique post category identifier to retrieve. - &#x60;post_category_YzS1wOU20yw87UUHKxMzwn&#x60;  | 

### Return type

[**RestRPostCategory**](RestRPostCategory.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePostCategory

> RestRPostCategory updatePostCategory(restEPostCategory, identifier)

Update post category

Updates a post category. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.PostCategoryApi();
let restEPostCategory = new sendx.RestEPostCategory(); // RestEPostCategory | 
let identifier = "post_category_YzS1wOU20yw87UUHKxMzwn"; // String | The unique post category identifier to retrieve. - `post_category_YzS1wOU20yw87UUHKxMzwn` 
apiInstance.updatePostCategory(restEPostCategory, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEPostCategory** | [**RestEPostCategory**](RestEPostCategory.md)|  | 
 **identifier** | **String**| The unique post category identifier to retrieve. - &#x60;post_category_YzS1wOU20yw87UUHKxMzwn&#x60;  | 

### Return type

[**RestRPostCategory**](RestRPostCategory.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

