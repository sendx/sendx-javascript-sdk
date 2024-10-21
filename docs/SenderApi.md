# sendx.SenderApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSender**](SenderApi.md#createSender) | **POST** /sender | Create Sender
[**getAllSenders**](SenderApi.md#getAllSenders) | **GET** /sender | Get All Senders



## createSender

> Sender createSender(senderRequest)

Create Sender

Creates a new sender in the system.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.SenderApi();
let senderRequest = new sendx.SenderRequest(); // SenderRequest | 
apiInstance.createSender(senderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderRequest** | [**SenderRequest**](SenderRequest.md)|  | 

### Return type

[**Sender**](Sender.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllSenders

> [SenderResponse] getAllSenders(opts)

Get All Senders

Retrieve all senders for the team, with optional filters like offset, limit, and search.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.SenderApi();
let opts = {
  'offset': 0, // Number | Number of records to skip
  'limit': 10, // Number | Maximum number of records to return
  'search': "search_example" // String | Search keyword to filter senders by name or email
};
apiInstance.getAllSenders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of records to skip | [optional] [default to 0]
 **limit** | **Number**| Maximum number of records to return | [optional] [default to 10]
 **search** | **String**| Search keyword to filter senders by name or email | [optional] 

### Return type

[**[SenderResponse]**](SenderResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

