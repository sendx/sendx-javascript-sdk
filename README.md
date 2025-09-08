# SendX JavaScript SDK

## 🚀 Introduction

The SendX API is organized around REST principles. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

**Key Features:**
- 🔒 **Security**: Team-based authentication with optional member-level access
- 🎯 **Resource-Oriented**: RESTful design with clear resource boundaries
- 📊 **Rich Data Models**: Three-layer model system (Input/Output/Internal)
- 🔗 **Relationships**: Automatic prefix handling for resource relationships
- 📈 **Scalable**: Built for high-volume email marketing operations

## 🏗️ Architecture Overview

SendX uses a three-layer model architecture:

1. **Input Models** (`RestE*`): For API requests
2. **Output Models** (`RestR*`): For API responses with prefixed IDs
3. **Internal Models**: Core business logic (not exposed in API)

## 🔐 Security & Authentication

SendX uses API key authentication:

### Team API Key
```http
X-Team-ApiKey: YOUR_TEAM_API_KEY
```
- **Required for all requests**
- Team-level access to resources
- Available in SendX Settings → Team API Key

## 🆔 Encrypted ID System

SendX uses encrypted IDs for security and better developer experience:

- **Internal IDs**: Sequential integers (not exposed)
- **Encrypted IDs**: 22-character alphanumeric strings
- **Prefixed IDs**: Resource-type prefixes in API responses (`contact_<22-char-id>`)

### ID Format

**All resource IDs follow this pattern:**
```
<resource_prefix>_<22_character_alphanumeric_string>
```

**Example:**
```json
{
  "id": "contact_BnKjkbBBS500CoBCP0oChQ",
  "lists": ["list_OcuxJHdiAvujmwQVJfd3ss", "list_0tOFLp5RgV7s3LNiHrjGYs"],
  "tags": ["tag_UhsDkjL772Qbj5lWtT62VK", "tag_fL7t9lsnZ9swvx2HrtQ9wM"]
}
```

## 📚 Resource Prefixes

| Resource | Prefix | Example |
|----------|--------|---------|
| Contact | `contact_` | `contact_BnKjkbBBS500CoBCP0oChQ` |
| Campaign | `campaign_` | `campaign_LUE9BTxmksSmqHWbh96zsn` |
| List | `list_` | `list_OcuxJHdiAvujmwQVJfd3ss` |
| Tag | `tag_` | `tag_UhsDkjL772Qbj5lWtT62VK` |
| Sender | `sender_` | `sender_4vK3WFhMgvOwUNyaL4QxCD` |
| Template | `template_` | `template_f3lJvTEhSjKGVb5Lwc5SWS` |
| Custom Field | `field_` | `field_MnuqBAG2NPLm7PZMWbjQxt` |
| Webhook | `webhook_` | `webhook_9l154iiXlZoPo7vngmamee` |
| Post | `post_` | `post_XyZ123aBc456DeF789GhI` |
| Post Category | `post_category_` | `post_category_YzS1wOU20yw87UUHKxMzwn` |
| Post Tag | `post_tag_` | `post_tag_123XyZ456AbC` |
| Member | `member_` | `member_JkL012MnO345PqR678` |

## 🎯 Best Practices

### Error Handling
- **Always check status codes**: 2xx = success, 4xx = client error, 5xx = server error
- **Read error messages**: Descriptive messages help debug issues
- **Handle rate limits**: Respect API rate limits for optimal performance

### Data Validation
- **Email format**: Must be valid email addresses
- **Required fields**: Check documentation for mandatory fields
- **Field lengths**: Respect maximum length constraints

### Performance
- **Pagination**: Use offset/limit for large datasets
- **Batch operations**: Process multiple items when supported
- **Caching**: Cache responses when appropriate

## 🛠️ SDKs & Integration

Official SDKs available for:
- [Golang](https://github.com/sendx/sendx-go-sdk)
- [Python](https://github.com/sendx/sendx-python-sdk)
- [Ruby](https://github.com/sendx/sendx-ruby-sdk)
- [Java](https://github.com/sendx/sendx-java-sdk)
- [PHP](https://github.com/sendx/sendx-php-sdk)
- [JavaScript](https://github.com/sendx/sendx-javascript-sdk)

## 📞 Support

Need help? Contact us:
- 💬 **Website Chat**: Available on sendx.io
- 📧 **Email**: hello@sendx.io
- 📚 **Documentation**: Full guides at help.sendx.io

---

**API Endpoint:** `https://api.sendx.io/api/v1/rest`

[<img src=\"https://run.pstmn.io/button.svg\" alt=\"Run In Postman\" style=\"width: 128px; height: 32px;\">](https://god.gw.postman.com/run-collection/33476323-44b198b0-5219-4619-a01f-cfc24d573885?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D33476323-44b198b0-5219-4619-a01f-cfc24d573885%26entityType%3Dcollection%26workspaceId%3D6b1e4f65-96a9-4136-9512-6266c852517e)


## Installation

### For [Node.js](https://nodejs.org/)

#### npm


To install it via npm:

```shell
npm install sendx-javascript-sdk 
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import sendx from 'sendx-javascript-sdk';

let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
var TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = "YOUR API KEY"


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
*sendx.CampaignApi* | [**createCampaign**](docs/CampaignApi.md#createCampaign) | **POST** /campaign | Create campaign
*sendx.CampaignApi* | [**deleteCampaign**](docs/CampaignApi.md#deleteCampaign) | **DELETE** /campaign/{identifier} | Delete campaign
*sendx.CampaignApi* | [**getAllCampaigns**](docs/CampaignApi.md#getAllCampaigns) | **GET** /campaign | Get all campaigns
*sendx.CampaignApi* | [**getCampaign**](docs/CampaignApi.md#getCampaign) | **GET** /campaign/{identifier} | Get campaign by ID
*sendx.ContactApi* | [**createContact**](docs/ContactApi.md#createContact) | **POST** /contact | Create a new contact
*sendx.ContactApi* | [**deleteContact**](docs/ContactApi.md#deleteContact) | **DELETE** /contact/{identifier} | Delete contact
*sendx.ContactApi* | [**getAllContacts**](docs/ContactApi.md#getAllContacts) | **GET** /contact | Get all contacts
*sendx.ContactApi* | [**getContact**](docs/ContactApi.md#getContact) | **GET** /contact/{identifier} | Get contact by ID
*sendx.ContactApi* | [**unsubscribeContact**](docs/ContactApi.md#unsubscribeContact) | **POST** /contact/unsubscribe/{identifier} | Unsubscribe contact
*sendx.ContactApi* | [**updateContact**](docs/ContactApi.md#updateContact) | **PUT** /contact/{identifier} | Update contact
*sendx.CustomFieldApi* | [**createCustomField**](docs/CustomFieldApi.md#createCustomField) | **POST** /customfield | Create custom field
*sendx.CustomFieldApi* | [**deleteCustomField**](docs/CustomFieldApi.md#deleteCustomField) | **DELETE** /customfield/{identifier} | Delete custom field
*sendx.CustomFieldApi* | [**getAllCustomFields**](docs/CustomFieldApi.md#getAllCustomFields) | **GET** /customfield | Get all custom fields
*sendx.CustomFieldApi* | [**getCustomField**](docs/CustomFieldApi.md#getCustomField) | **GET** /customfield/{identifier} | Get custom field by ID
*sendx.CustomFieldApi* | [**updateCustomField**](docs/CustomFieldApi.md#updateCustomField) | **PUT** /customfield/{identifier} | Update custom field
*sendx.EmailSendingApi* | [**sendEmail**](docs/EmailSendingApi.md#sendEmail) | **POST** /send/email | Send transactional email
*sendx.EmailSendingApi* | [**sendEmailWithTemplate**](docs/EmailSendingApi.md#sendEmailWithTemplate) | **POST** /send/template | Send email using template
*sendx.EventApi* | [**eventsCustomPostbackGet**](docs/EventApi.md#eventsCustomPostbackGet) | **GET** /events/custom/postback | Custom Event Postback URL
*sendx.EventApi* | [**eventsRevenuePostbackGet**](docs/EventApi.md#eventsRevenuePostbackGet) | **GET** /events/revenue/postback | Revenue Event Postback URL
*sendx.EventsApi* | [**trackCustomEvent**](docs/EventsApi.md#trackCustomEvent) | **POST** /events/custom | Track custom event
*sendx.EventsApi* | [**trackRevenueEvent**](docs/EventsApi.md#trackRevenueEvent) | **POST** /events/revenue | Track revenue event
*sendx.ListApi* | [**createList**](docs/ListApi.md#createList) | **POST** /list | Create list
*sendx.ListApi* | [**deleteList**](docs/ListApi.md#deleteList) | **DELETE** /list/{identifier} | Delete list
*sendx.ListApi* | [**getAllLists**](docs/ListApi.md#getAllLists) | **GET** /list | Get all lists
*sendx.ListApi* | [**getList**](docs/ListApi.md#getList) | **GET** /list/{identifier} | Get list by ID
*sendx.ListApi* | [**updateList**](docs/ListApi.md#updateList) | **PUT** /list/{identifier} | Update list
*sendx.PostApi* | [**createPost**](docs/PostApi.md#createPost) | **POST** /post | Create blog post
*sendx.PostApi* | [**deletePost**](docs/PostApi.md#deletePost) | **DELETE** /post/{identifier} | Delete post
*sendx.PostApi* | [**getAllPosts**](docs/PostApi.md#getAllPosts) | **GET** /post | Get all posts
*sendx.PostApi* | [**getPost**](docs/PostApi.md#getPost) | **GET** /post/{identifier} | Get post by ID
*sendx.PostApi* | [**updatePost**](docs/PostApi.md#updatePost) | **PUT** /post/{identifier} | Update post
*sendx.PostCategoryApi* | [**createPostCategory**](docs/PostCategoryApi.md#createPostCategory) | **POST** /post/category | Create post category
*sendx.PostCategoryApi* | [**deletePostCategory**](docs/PostCategoryApi.md#deletePostCategory) | **DELETE** /post/category/{identifier} | Delete post category
*sendx.PostCategoryApi* | [**getAllPostCategories**](docs/PostCategoryApi.md#getAllPostCategories) | **GET** /post/category | Get all post categories
*sendx.PostCategoryApi* | [**getPostCategory**](docs/PostCategoryApi.md#getPostCategory) | **GET** /post/category/{identifier} | Get post category by ID
*sendx.PostCategoryApi* | [**updatePostCategory**](docs/PostCategoryApi.md#updatePostCategory) | **PUT** /post/category/{identifier} | Update post category
*sendx.PostTagApi* | [**createPostTag**](docs/PostTagApi.md#createPostTag) | **POST** /post/tag | Create post tag
*sendx.PostTagApi* | [**deletePostTag**](docs/PostTagApi.md#deletePostTag) | **DELETE** /post/tag/{identifier} | Delete post tag
*sendx.PostTagApi* | [**getAllPostTags**](docs/PostTagApi.md#getAllPostTags) | **GET** /post/tag | Get all post tags
*sendx.PostTagApi* | [**getPostTag**](docs/PostTagApi.md#getPostTag) | **GET** /post/tag/{identifier} | Get post tag by ID
*sendx.PostTagApi* | [**updatePostTag**](docs/PostTagApi.md#updatePostTag) | **PUT** /post/tag/{identifier} | Update post tag
*sendx.ReportApi* | [**getCampaignReport**](docs/ReportApi.md#getCampaignReport) | **GET** /report/campaign/{identifier} | Get campaign report
*sendx.SenderApi* | [**createSender**](docs/SenderApi.md#createSender) | **POST** /sender | Create sender
*sendx.SenderApi* | [**getAllSenders**](docs/SenderApi.md#getAllSenders) | **GET** /sender | Get all senders
*sendx.TagApi* | [**createTag**](docs/TagApi.md#createTag) | **POST** /tag | Create tag
*sendx.TagApi* | [**deleteTag**](docs/TagApi.md#deleteTag) | **DELETE** /tag/{identifier} | Delete tag
*sendx.TagApi* | [**getAllTags**](docs/TagApi.md#getAllTags) | **GET** /tag | Get all tags
*sendx.TagApi* | [**getTag**](docs/TagApi.md#getTag) | **GET** /tag/{identifier} | Get tag by ID
*sendx.TagApi* | [**updateTag**](docs/TagApi.md#updateTag) | **PUT** /tag/{identifier} | Update tag
*sendx.TeamMemberApi* | [**getAllTeamMembers**](docs/TeamMemberApi.md#getAllTeamMembers) | **GET** /team/member | Get all team members
*sendx.TeamMemberApi* | [**getTeamMember**](docs/TeamMemberApi.md#getTeamMember) | **GET** /team/member/{identifier} | Get a team member by ID
*sendx.TemplateApi* | [**createEmailTemplate**](docs/TemplateApi.md#createEmailTemplate) | **POST** /template/email | Create email template
*sendx.TemplateApi* | [**deleteEmailTemplate**](docs/TemplateApi.md#deleteEmailTemplate) | **DELETE** /template/email/{identifier} | Delete template
*sendx.TemplateApi* | [**getAllEmailTemplates**](docs/TemplateApi.md#getAllEmailTemplates) | **GET** /template/email | Get all templates
*sendx.TemplateApi* | [**getEmailTemplate**](docs/TemplateApi.md#getEmailTemplate) | **GET** /template/email/{identifier} | Get template by ID
*sendx.TemplateApi* | [**updateEmailTemplate**](docs/TemplateApi.md#updateEmailTemplate) | **PUT** /template/email/{identifier} | Update template
*sendx.TrackingApi* | [**identifyContact**](docs/TrackingApi.md#identifyContact) | **POST** /contact/identify | Identify contact
*sendx.TrackingApi* | [**trackContact**](docs/TrackingApi.md#trackContact) | **POST** /contact/track | Track contact
*sendx.WebhookApi* | [**createWebhook**](docs/WebhookApi.md#createWebhook) | **POST** /webhook | Create webhook
*sendx.WebhookApi* | [**deleteWebhook**](docs/WebhookApi.md#deleteWebhook) | **DELETE** /webhook/{identifier} | Delete webhook
*sendx.WebhookApi* | [**getAllWebhooks**](docs/WebhookApi.md#getAllWebhooks) | **GET** /webhook | Get all webhooks
*sendx.WebhookApi* | [**getWebhook**](docs/WebhookApi.md#getWebhook) | **GET** /webhook/{identifier} | Get webhook by ID
*sendx.WebhookApi* | [**updateWebhook**](docs/WebhookApi.md#updateWebhook) | **PUT** /webhook/{identifier} | Update webhook


## Documentation for Models

 - [sendx.CustomEventRequest](docs/CustomEventRequest.md)
 - [sendx.DeleteResponse](docs/DeleteResponse.md)
 - [sendx.ErrorResponse](docs/ErrorResponse.md)
 - [sendx.EventResponse](docs/EventResponse.md)
 - [sendx.EventsRevenuePostbackGet200Response](docs/EventsRevenuePostbackGet200Response.md)
 - [sendx.EventsRevenuePostbackGet400Response](docs/EventsRevenuePostbackGet400Response.md)
 - [sendx.EventsRevenuePostbackGet500Response](docs/EventsRevenuePostbackGet500Response.md)
 - [sendx.IdentifyRequest](docs/IdentifyRequest.md)
 - [sendx.IdentifyResponse](docs/IdentifyResponse.md)
 - [sendx.LinkStat](docs/LinkStat.md)
 - [sendx.MessageResponse](docs/MessageResponse.md)
 - [sendx.PostbackResponse](docs/PostbackResponse.md)
 - [sendx.RestECampaign](docs/RestECampaign.md)
 - [sendx.RestEContact](docs/RestEContact.md)
 - [sendx.RestECustomField](docs/RestECustomField.md)
 - [sendx.RestEList](docs/RestEList.md)
 - [sendx.RestEPost](docs/RestEPost.md)
 - [sendx.RestEPostCategory](docs/RestEPostCategory.md)
 - [sendx.RestEPostTag](docs/RestEPostTag.md)
 - [sendx.RestESender](docs/RestESender.md)
 - [sendx.RestETag](docs/RestETag.md)
 - [sendx.RestETemplate](docs/RestETemplate.md)
 - [sendx.RestEWebhook](docs/RestEWebhook.md)
 - [sendx.RestRCampaign](docs/RestRCampaign.md)
 - [sendx.RestRContact](docs/RestRContact.md)
 - [sendx.RestRCustomField](docs/RestRCustomField.md)
 - [sendx.RestRList](docs/RestRList.md)
 - [sendx.RestRMember](docs/RestRMember.md)
 - [sendx.RestRPost](docs/RestRPost.md)
 - [sendx.RestRPostCategory](docs/RestRPostCategory.md)
 - [sendx.RestRPostTag](docs/RestRPostTag.md)
 - [sendx.RestRSender](docs/RestRSender.md)
 - [sendx.RestRTag](docs/RestRTag.md)
 - [sendx.RestRTemplate](docs/RestRTemplate.md)
 - [sendx.RestRWebhook](docs/RestRWebhook.md)
 - [sendx.RestReportData](docs/RestReportData.md)
 - [sendx.RevenueEventRequest](docs/RevenueEventRequest.md)
 - [sendx.TemplateEmailMessage](docs/TemplateEmailMessage.md)
 - [sendx.TrackRequest](docs/TrackRequest.md)
 - [sendx.TrackResponse](docs/TrackResponse.md)
 - [sendx.WebhookObject](docs/WebhookObject.md)
 - [sendx.XAttachment](docs/XAttachment.md)
 - [sendx.XEmailMessage](docs/XEmailMessage.md)
 - [sendx.XEmailResponse](docs/XEmailResponse.md)
 - [sendx.XFrom](docs/XFrom.md)
 - [sendx.XReplyTo](docs/XReplyTo.md)
 - [sendx.XTo](docs/XTo.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### TeamApiKey


- **Type**: API key
- **API key parameter name**: X-Team-ApiKey
- **Location**: HTTP header

