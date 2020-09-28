# MailHubApi.MailsApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailsGet**](MailsApi.md#mailsGet) | **GET** /mails | Get all mails
[**mailsIdAttachmentsAttachmentIdGet**](MailsApi.md#mailsIdAttachmentsAttachmentIdGet) | **GET** /mails/{id}/attachments/{attachment_id} | Get one attachment
[**mailsIdAttachmentsGet**](MailsApi.md#mailsIdAttachmentsGet) | **GET** /mails/{id}/attachments | Get all attachments
[**mailsIdDelete**](MailsApi.md#mailsIdDelete) | **DELETE** /mails/{id} | Delete one mail
[**mailsIdGet**](MailsApi.md#mailsIdGet) | **GET** /mails/{id} | Get one mail
[**mailsIdSourcesGet**](MailsApi.md#mailsIdSourcesGet) | **GET** /mails/{id}/sources | Get source of mail



## mailsGet

> InlineResponse2006 mailsGet(opts)

Get all mails

List all received mails for organization

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let opts = {
  'page': 4, // Number | page of pagination
  'limit': 20, // Number | mails per page
  'filterDomain': site.com, // String | filter domains
  'filterDomain2': ["site1.com","site2.com"], // [String] | filter domains
  'filterTo': name@site.com, // String | filter by rcpt to
  'filterFrom': sender@site.com, // String | filter by from address
  'filterDateFrom': 1588063084, // Number | filter from date
  'filterDateTo': 1588063184 // Number | filter to date
};
apiInstance.mailsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| page of pagination | [optional] 
 **limit** | **Number**| mails per page | [optional] [default to 20]
 **filterDomain** | **String**| filter domains | [optional] 
 **filterDomain2** | [**[String]**](String.md)| filter domains | [optional] 
 **filterTo** | **String**| filter by rcpt to | [optional] 
 **filterFrom** | **String**| filter by from address | [optional] 
 **filterDateFrom** | **Number**| filter from date | [optional] 
 **filterDateTo** | **Number**| filter to date | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailsIdAttachmentsAttachmentIdGet

> OneAttachment mailsIdAttachmentsAttachmentIdGet(id, attachmentId)

Get one attachment

Get one attachment by mail id and attachment id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let id = 2f04d16211a17fb71661f5c52c2983a7; // String | ID of mail
let attachmentId = 1; // Number | ID of attachment
apiInstance.mailsIdAttachmentsAttachmentIdGet(id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of mail | 
 **attachmentId** | **Number**| ID of attachment | 

### Return type

[**OneAttachment**](OneAttachment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailsIdAttachmentsGet

> [Attachment] mailsIdAttachmentsGet(id)

Get all attachments

Get short information of attachments by mail id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let id = 10; // Number | ID of mail
apiInstance.mailsIdAttachmentsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of mail | 

### Return type

[**[Attachment]**](Attachment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailsIdDelete

> InlineResponse200 mailsIdDelete(id)

Delete one mail

Delete one mail by id &lt;/br&gt; Source of email and attachments deleted as well. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let id = 10; // Number | ID of mail
apiInstance.mailsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of mail | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailsIdGet

> Mail mailsIdGet(id)

Get one mail

Get one mail by id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let id = 10; // Number | ID of mail
apiInstance.mailsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of mail | 

### Return type

[**Mail**](Mail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailsIdSourcesGet

> Source mailsIdSourcesGet(id)

Get source of mail

Get source of mail by mail id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailsApi();
let id = 10; // Number | ID of mail
apiInstance.mailsIdSourcesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of mail | 

### Return type

[**Source**](Source.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

