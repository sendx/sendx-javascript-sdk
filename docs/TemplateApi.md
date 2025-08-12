# sendx.TemplateApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailTemplate**](TemplateApi.md#createEmailTemplate) | **POST** /template/email | Create email template
[**deleteEmailTemplate**](TemplateApi.md#deleteEmailTemplate) | **DELETE** /template/email/{identifier} | Delete template
[**getAllEmailTemplates**](TemplateApi.md#getAllEmailTemplates) | **GET** /template/email | Get all templates
[**getEmailTemplate**](TemplateApi.md#getEmailTemplate) | **GET** /template/email/{identifier} | Get template by ID
[**updateEmailTemplate**](TemplateApi.md#updateEmailTemplate) | **PUT** /template/email/{identifier} | Update template



## createEmailTemplate

> RestRTemplate createEmailTemplate(restETemplate)

Create email template

Creates a new reusable email template. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TemplateApi();
let restETemplate = {"name":"Weekly Newsletter Template","htmlCode":"<div class=\"newsletter\"><h1>{{company.name}} Weekly Update</h1><div class=\"content\">{{email.content}}</div></div>","templateCode":"{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null,\"showIfKey\":null},\"content\":[{\"type\":\"text\",\"text\":\"This is a new template\"}]}]}","editorType":1}; // RestETemplate | 
apiInstance.createEmailTemplate(restETemplate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restETemplate** | [**RestETemplate**](RestETemplate.md)|  | 

### Return type

[**RestRTemplate**](RestRTemplate.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmailTemplate

> DeleteResponse deleteEmailTemplate(identifier)

Delete template

Deletes an email template. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TemplateApi();
let identifier = "template_f3lJvTEhSjKGVb5Lwc5SWS"; // String | The unique template identifier to update.  - `template_f3lJvTEhSjKGVb5Lwc5SWS` 
apiInstance.deleteEmailTemplate(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique template identifier to update.  - &#x60;template_f3lJvTEhSjKGVb5Lwc5SWS&#x60;  | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllEmailTemplates

> [RestRTemplate] getAllEmailTemplates(opts)

Get all templates

Retrieves all email templates. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TemplateApi();
let opts = {
  'offset': 0, // Number | Number of records to skip for pagination.  **Examples:** - `0` - First page (default) - `25` - Second page (with limit=25) - `50` - Third page (with limit=25) 
  'limit': 10, // Number | Maximum number of templates to return per page.  **Guidelines:** - Default: 10 templates - Maximum: 100 templates - Recommended: 25-100 for optimal performance 
  'search': "search_example" // String | Search templates by name (case-insensitive partial matching).  **Examples:** - `newsletter` - Finds \"Weekly Newsletter\", \"Monthly Newsletter\" - `welcome` - Finds \"Welcome Email\", \"New User Welcome\" - `product` - Finds \"Product Launch\", \"Product Update\" 
};
apiInstance.getAllEmailTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of records to skip for pagination.  **Examples:** - &#x60;0&#x60; - First page (default) - &#x60;25&#x60; - Second page (with limit&#x3D;25) - &#x60;50&#x60; - Third page (with limit&#x3D;25)  | [optional] [default to 0]
 **limit** | **Number**| Maximum number of templates to return per page.  **Guidelines:** - Default: 10 templates - Maximum: 100 templates - Recommended: 25-100 for optimal performance  | [optional] [default to 10]
 **search** | **String**| Search templates by name (case-insensitive partial matching).  **Examples:** - &#x60;newsletter&#x60; - Finds \&quot;Weekly Newsletter\&quot;, \&quot;Monthly Newsletter\&quot; - &#x60;welcome&#x60; - Finds \&quot;Welcome Email\&quot;, \&quot;New User Welcome\&quot; - &#x60;product&#x60; - Finds \&quot;Product Launch\&quot;, \&quot;Product Update\&quot;  | [optional] 

### Return type

[**[RestRTemplate]**](RestRTemplate.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailTemplate

> RestRTemplate getEmailTemplate(identifier)

Get template by ID

Retrieves a specific email template. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TemplateApi();
let identifier = "template_f3lJvTEhSjKGVb5Lwc5SWS"; // String | The unique template identifier.  - `template_f3lJvTEhSjKGVb5Lwc5SWS` - Standard prefixed ID 
apiInstance.getEmailTemplate(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The unique template identifier.  - &#x60;template_f3lJvTEhSjKGVb5Lwc5SWS&#x60; - Standard prefixed ID  | 

### Return type

[**RestRTemplate**](RestRTemplate.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmailTemplate

> RestRTemplate updateEmailTemplate(restETemplate, identifier)

Update template

Updates an existing email template. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TemplateApi();
let restETemplate = new sendx.RestETemplate(); // RestETemplate | 
let identifier = "template_f3lJvTEhSjKGVb5Lwc5SWS"; // String | The unique template identifier to update.  - `template_f3lJvTEhSjKGVb5Lwc5SWS` 
apiInstance.updateEmailTemplate(restETemplate, identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restETemplate** | [**RestETemplate**](RestETemplate.md)|  | 
 **identifier** | **String**| The unique template identifier to update.  - &#x60;template_f3lJvTEhSjKGVb5Lwc5SWS&#x60;  | 

### Return type

[**RestRTemplate**](RestRTemplate.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

