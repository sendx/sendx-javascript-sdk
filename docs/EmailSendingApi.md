# sendx.EmailSendingApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendEmail**](EmailSendingApi.md#sendEmail) | **POST** /send/email | Send transactional email
[**sendEmailWithTemplate**](EmailSendingApi.md#sendEmailWithTemplate) | **POST** /send/template | Send email using template



## sendEmail

> [XEmailResponse] sendEmail(xEmailMessage)

Send transactional email

Sends transactional emails to specified recipients with support for personalization, attachments, and tracking. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EmailSendingApi();
let xEmailMessage = new sendx.XEmailMessage(); // XEmailMessage | 
apiInstance.sendEmail(xEmailMessage).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEmailMessage** | [**XEmailMessage**](XEmailMessage.md)|  | 

### Return type

[**[XEmailResponse]**](XEmailResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendEmailWithTemplate

> [XEmailResponse] sendEmailWithTemplate(xEmailMessage)

Send email using template

Sends emails using a pre-defined template with variable substitution. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EmailSendingApi();
let xEmailMessage = new sendx.XEmailMessage(); // XEmailMessage | 
apiInstance.sendEmailWithTemplate(xEmailMessage).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEmailMessage** | [**XEmailMessage**](XEmailMessage.md)|  | 

### Return type

[**[XEmailResponse]**](XEmailResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

