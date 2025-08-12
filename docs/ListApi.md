# sendx.ListApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createList**](ListApi.md#createList) | **POST** /list | Create list
[**deleteList**](ListApi.md#deleteList) | **DELETE** /list/{identifier} | Delete list
[**getAllLists**](ListApi.md#getAllLists) | **GET** /list | Get all lists
[**getList**](ListApi.md#getList) | **GET** /list/{identifier} | Get list by ID
[**updateList**](ListApi.md#updateList) | **PUT** /list/{identifier} | Update list



## createList

> RestRList createList(restEList)

Create list

Creates a new contact list. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let restEList = {"name":"Premium Members"}; // RestEList | 
apiInstance.createList(restEList).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEList** | [**RestEList**](RestEList.md)|  | 

### Return type

[**RestRList**](RestRList.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteList

> DeleteResponse deleteList(identifier)

Delete list

Deletes a list. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let identifier = "identifier_example"; // String | List identifier to delete
apiInstance.deleteList(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| List identifier to delete | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllLists

> [RestRList] getAllLists(opts)

Get all lists

Retrieves all contact lists in your team. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let opts = {
  'offset': 0, // Number | Number of records to skip for pagination
  'limit': 10, // Number | Maximum number of lists to return (max: 500)
  'search': "search_example" // String | Search lists by name
};
apiInstance.getAllLists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of records to skip for pagination | [optional] [default to 0]
 **limit** | **Number**| Maximum number of lists to return (max: 500) | [optional] [default to 10]
 **search** | **String**| Search lists by name | [optional] 

### Return type

[**[RestRList]**](RestRList.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getList

> RestRList getList(identifier)

Get list by ID

Retrieves detailed information about a specific list. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let identifier = "identifier_example"; // String | List identifier - `list_OcuxJHdiAvujmwQVJfd3ss` 
apiInstance.getList(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| List identifier - &#x60;list_OcuxJHdiAvujmwQVJfd3ss&#x60;  | 

### Return type

[**RestRList**](RestRList.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateList

> RestRList updateList(restEList, identifier)

Update list

Updates an existing list&#39;s settings. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let restEList = {"name":"2024 Newsletter Subscribers"}; // RestEList | 
let identifier = "identifier_example"; // String | List identifier to update
apiInstance.updateList(restEList, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEList** | [**RestEList**](RestEList.md)|  | 
 **identifier** | **String**| List identifier to update | 

### Return type

[**RestRList**](RestRList.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

