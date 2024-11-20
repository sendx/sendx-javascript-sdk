# sendx.GettingStartedApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identifyContact**](GettingStartedApi.md#identifyContact) | **POST** /contact/identify | Identify contact
[**trackingContact**](GettingStartedApi.md#trackingContact) | **POST** /contact/track | Add Tracking info



## identifyContact

> IdentifyResponse identifyContact(identifyRequest)

Identify contact

Identify a contact by email address. If the contact already exists, it will be updated.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.GettingStartedApi();
let identifyRequest = new sendx.IdentifyRequest(); // IdentifyRequest | 
apiInstance.identifyContact(identifyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifyRequest** | [**IdentifyRequest**](IdentifyRequest.md)|  | 

### Return type

[**IdentifyResponse**](IdentifyResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackingContact

> TrackResponse trackingContact(trackRequest)

Add Tracking info

Track a contact

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.GettingStartedApi();
let trackRequest = new sendx.TrackRequest(); // TrackRequest | 
apiInstance.trackingContact(trackRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackRequest** | [**TrackRequest**](TrackRequest.md)|  | 

### Return type

[**TrackResponse**](TrackResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

