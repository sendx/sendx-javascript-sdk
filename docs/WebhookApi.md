# sendx.WebhookApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhookApi.md#createWebhook) | **POST** /webhook | Create webhook
[**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /webhook/{identifier} | Delete webhook
[**getAllWebhooks**](WebhookApi.md#getAllWebhooks) | **GET** /webhook | Get all webhooks
[**getWebhook**](WebhookApi.md#getWebhook) | **GET** /webhook/{identifier} | Get webhook by ID
[**updateWebhook**](WebhookApi.md#updateWebhook) | **PUT** /webhook/{identifier} | Update webhook



## createWebhook

> RestRWebhook createWebhook(restEWebhook)

Create webhook

Creates a new webhook for event notifications. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.WebhookApi();
let restEWebhook = {"enabled":true,"url":"https://api.example.com/webhooks/sendx","unsubscribed":true,"dropped":true,"bounced":true,"markedSpam":true,"clicked":true,"opened":true,"contactCreated":true}; // RestEWebhook | 
apiInstance.createWebhook(restEWebhook).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEWebhook** | [**RestEWebhook**](RestEWebhook.md)|  | 

### Return type

[**RestRWebhook**](RestRWebhook.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhook

> DeleteResponse deleteWebhook(identifier)

Delete webhook

Deletes a webhook configuration.  **🎯 Key Features:** - Remove webhooks - Stop event delivery - Clean up endpoints 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.WebhookApi();
let identifier = "identifier_example"; // String | Webhook identifier to update
apiInstance.deleteWebhook(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Webhook identifier to update | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllWebhooks

> [RestRWebhook] getAllWebhooks()

Get all webhooks

Retrieves all configured webhooks. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.WebhookApi();
apiInstance.getAllWebhooks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[RestRWebhook]**](RestRWebhook.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> RestRWebhook getWebhook(identifier)

Get webhook by ID

Retrieves details about a specific webhook. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.WebhookApi();
let identifier = "identifier_example"; // String | Webhook identifier to retrieve
apiInstance.getWebhook(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Webhook identifier to retrieve | 

### Return type

[**RestRWebhook**](RestRWebhook.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> RestRWebhook updateWebhook(restEWebhook, identifier)

Update webhook

Updates webhook configuration. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.WebhookApi();
let restEWebhook = new sendx.RestEWebhook(); // RestEWebhook | 
let identifier = "identifier_example"; // String | Webhook identifier to update
apiInstance.updateWebhook(restEWebhook, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restEWebhook** | [**RestEWebhook**](RestEWebhook.md)|  | 
 **identifier** | **String**| Webhook identifier to update | 

### Return type

[**RestRWebhook**](RestRWebhook.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

