# sendx.ReportApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCampaignReport**](ReportApi.md#getCampaignReport) | **GET** /report/campaign/{identifier} | Get campaign report



## getCampaignReport

> RestReportData getCampaignReport(identifier)

Get campaign report

Retrieves a detailed performance report for a specific campaign. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ReportApi();
let identifier = "contact_BnKjkbBBS500CoBCP0oChQ"; // String | Resource identifier with prefix (e.g., `contact_BnKjkbBBS500CoBCP0oChQ`)  **Format:** `<prefix>_<22-character-id>` 
apiInstance.getCampaignReport(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Resource identifier with prefix (e.g., &#x60;contact_BnKjkbBBS500CoBCP0oChQ&#x60;)  **Format:** &#x60;&lt;prefix&gt;_&lt;22-character-id&gt;&#x60;  | 

### Return type

[**RestReportData**](RestReportData.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

