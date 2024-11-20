# SendX JavaScript SDK [![npm version](https://img.shields.io/npm/v/sendx-javascript-sdk.svg?style=flat)](https://www.npmjs.com/package/sendx-javascript-sdk)
## Introduction
SendX is an email marketing product. It helps you convert website visitors to customers, send them promotional emails, engage with them using drip sequences and craft custom journeys using powerful but simple automations.

The SendX API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
The SendX Rest API doesn’t support bulk updates. You can work on only one object per request. <br>

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via npm:

```shell
npm install sendx-javascript-sdk --save
```


### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';


let apiInstance = new sendx.ContactApi(); // ContactApi |
let contactRequest = new sendx.ContactRequest(); // ContactRequest |

contactRequest.email = "jane@doe.com";
contactRequest.firstName = "Jane";
contactRequest.lastName = "Doe"; 
contactRequest.company = "Tech Solutions Inc.";
contactRequest.lastTrackedIp = "34.94.159.140";
contactRequest.customFields = { "1231nfenife213": "VIP", "1434bife23bfij32": "Special Offer Subscriber" };
contactRequest.lists = ["234b324bjed32", "234bij3e2eyv3v2i"];
contactRequest.tags = ["234bijn2ei2jbu4", "2342bijhb2ijneni"]; 

apiInstance.createContact(contactRequest).then((data) => {
    console.log('API called successfully. Contact created: ' + JSON.stringify(data, null, 2));
}, (error) => {
    console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*sendx.CampaignApi* | [**createCampaign**](docs/CampaignApi.md#createCampaign) | **POST** /campaign | Create Campaign
*sendx.CampaignApi* | [**deleteCampaign**](docs/CampaignApi.md#deleteCampaign) | **DELETE** /campaign/{campaignId} | Delete Campaign
*sendx.CampaignApi* | [**editCampaign**](docs/CampaignApi.md#editCampaign) | **PUT** /campaign/{campaignId} | Edit Campaign
*sendx.CampaignApi* | [**getAllCampaigns**](docs/CampaignApi.md#getAllCampaigns) | **GET** /campaign | Get All Campaigns
*sendx.CampaignApi* | [**getCampaignById**](docs/CampaignApi.md#getCampaignById) | **GET** /campaign/{campaignId} | Get Campaign By Id
*sendx.ContactApi* | [**createContact**](docs/ContactApi.md#createContact) | **POST** /contact | Create a contact
*sendx.ContactApi* | [**deleteContact**](docs/ContactApi.md#deleteContact) | **DELETE** /contact/{identifier} | Delete Contact
*sendx.ContactApi* | [**getAllContacts**](docs/ContactApi.md#getAllContacts) | **GET** /contact | Get All Contacts
*sendx.ContactApi* | [**getContactById**](docs/ContactApi.md#getContactById) | **GET** /contact/{identifier} | Get Contact by Identifier
*sendx.ContactApi* | [**unsubscribeContact**](docs/ContactApi.md#unsubscribeContact) | **POST** /contact/unsubscribe/{identifier} | Unsubscribe Contact
*sendx.ContactApi* | [**updateContact**](docs/ContactApi.md#updateContact) | **PUT** /contact/{identifier} | Update Contact
*sendx.EventApi* | [**createRevenueEvent**](docs/EventApi.md#createRevenueEvent) | **POST** /events/revenue | Record a revenue event for a specific contact
*sendx.EventApi* | [**pushCustomEvent**](docs/EventApi.md#pushCustomEvent) | **POST** /events/custom | Push a custom event associated with a contact
*sendx.GettingStartedApi* | [**identifyContact**](docs/GettingStartedApi.md#identifyContact) | **POST** /contact/identify | Identify contact
*sendx.GettingStartedApi* | [**trackingContact**](docs/GettingStartedApi.md#trackingContact) | **POST** /contact/track | Add Tracking info
*sendx.ListApi* | [**createList**](docs/ListApi.md#createList) | **POST** /list | Create List
*sendx.ListApi* | [**deleteList**](docs/ListApi.md#deleteList) | **DELETE** /list/{listId} | Delete List
*sendx.ListApi* | [**getAllLists**](docs/ListApi.md#getAllLists) | **GET** /list | Get All Lists
*sendx.ListApi* | [**getListById**](docs/ListApi.md#getListById) | **GET** /list/{listId} | Get List
*sendx.ListApi* | [**updateList**](docs/ListApi.md#updateList) | **PUT** /list/{listId} | Update List
*sendx.ReportsApi* | [**getCampaignReport**](docs/ReportsApi.md#getCampaignReport) | **GET** /report/campaign/{campaignId} | Get CampaignReport Data
*sendx.SenderApi* | [**createSender**](docs/SenderApi.md#createSender) | **POST** /sender | Create Sender
*sendx.SenderApi* | [**getAllSenders**](docs/SenderApi.md#getAllSenders) | **GET** /sender | Get All Senders
*sendx.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tag | Create a Tag
*sendx.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tag/{tagId} | Delete a Tag
*sendx.TagsApi* | [**getAllTags**](docs/TagsApi.md#getAllTags) | **GET** /tag | Get All Tags
*sendx.TagsApi* | [**getTagById**](docs/TagsApi.md#getTagById) | **GET** /tag/{tagId} | Get a Tag by ID
*sendx.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tag/{tagId} | Update a Tag


## Documentation for Models

 - [sendx.Campaign](docs/Campaign.md)
 - [sendx.CampaignDashboardData](docs/CampaignDashboardData.md)
 - [sendx.CampaignRequest](docs/CampaignRequest.md)
 - [sendx.Contact](docs/Contact.md)
 - [sendx.ContactRequest](docs/ContactRequest.md)
 - [sendx.CreateResponse](docs/CreateResponse.md)
 - [sendx.CustomEventRequest](docs/CustomEventRequest.md)
 - [sendx.DashboardStats](docs/DashboardStats.md)
 - [sendx.DeleteCampaign200Response](docs/DeleteCampaign200Response.md)
 - [sendx.DeleteRequest](docs/DeleteRequest.md)
 - [sendx.DeleteResponse](docs/DeleteResponse.md)
 - [sendx.EventResponse](docs/EventResponse.md)
 - [sendx.IdentifyRequest](docs/IdentifyRequest.md)
 - [sendx.IdentifyResponse](docs/IdentifyResponse.md)
 - [sendx.LastSentCampaignStat](docs/LastSentCampaignStat.md)
 - [sendx.ListModel](docs/ListModel.md)
 - [sendx.ListRequest](docs/ListRequest.md)
 - [sendx.ReportData](docs/ReportData.md)
 - [sendx.Response](docs/Response.md)
 - [sendx.RevenueEventRequest](docs/RevenueEventRequest.md)
 - [sendx.Sender](docs/Sender.md)
 - [sendx.SenderRequest](docs/SenderRequest.md)
 - [sendx.SenderResponse](docs/SenderResponse.md)
 - [sendx.Tag](docs/Tag.md)
 - [sendx.TagRequest](docs/TagRequest.md)
 - [sendx.TrackRequest](docs/TrackRequest.md)
 - [sendx.TrackResponse](docs/TrackResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### apiKeyAuth


- **Type**: API key
- **API key parameter name**: X-Team-ApiKey
- **Location**: HTTP header

