# sendx.WebhookApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendXWebhooksPost**](WebhookApi.md#sendXWebhooksPost) | **POST** /SendXWebhooks | SendX Webhook Object



## sendXWebhooksPost

> sendXWebhooksPost(opts)

SendX Webhook Object

Every event generated as SendX webhook will have &lt;code&gt;type&lt;/code&gt; field in event object:  Webhook Event | Type Field Value  -----------|------------------ Unsubscribed | 73 Marked Spam | 6 Mail Opened  | 7 Link Clicked | 8 Mail Bounced | 58 Mail Dropped | 60 

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
let opts = {
  'webhookObject': new sendx.WebhookObject() // WebhookObject | 
};
apiInstance.sendXWebhooksPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookObject** | [**WebhookObject**](WebhookObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

