# MailHubApi.OrganizationApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsBillingAuthPost**](OrganizationApi.md#organizationsBillingAuthPost) | **POST** /organizations/billing/auth | Get access to billing area
[**organizationsGet**](OrganizationApi.md#organizationsGet) | **GET** /organizations | Get organization
[**organizationsIdDelete**](OrganizationApi.md#organizationsIdDelete) | **DELETE** /organizations/{id} | Delete organization
[**organizationsIdPut**](OrganizationApi.md#organizationsIdPut) | **PUT** /organizations/{id} | Change organization
[**organizationsPost**](OrganizationApi.md#organizationsPost) | **POST** /organizations | Create organization
[**organizationsQuotasGet**](OrganizationApi.md#organizationsQuotasGet) | **GET** /organizations/quotas | Get quotas usage



## organizationsBillingAuthPost

> InlineResponse2003 organizationsBillingAuthPost(opts)

Get access to billing area

Get URL to billing area. &lt;/br&gt; URL includes secret key, that is used to authenticate and access billing area. &lt;/br&gt; Only owner of organization is allowed to access billing area. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.OrganizationApi();
let opts = {
  'inlineObject3': new MailHubApi.InlineObject3() // InlineObject3 | 
};
apiInstance.organizationsBillingAuthPost(opts, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organizationsGet

> Organization organizationsGet()

Get organization

Get organization information

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.OrganizationApi();
apiInstance.organizationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdDelete

> InlineResponse202 organizationsIdDelete(id)

Delete organization

Permanently delete organization. &lt;/br&gt; Verification is required for this operation. It will be send to owner&#39;s email address.&lt;/br&gt; All organization resources will be deleted as well. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.OrganizationApi();
let id = 14; // Number | ID of organization
apiInstance.organizationsIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| ID of organization | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdPut

> InlineResponse200 organizationsIdPut(id, opts)

Change organization

Change organization information

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.OrganizationApi();
let id = 14; // Number | ID of organization
let opts = {
  'UNKNOWN_BASE_TYPE': new MailHubApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.organizationsIdPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of organization | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organizationsPost

> InlineResponse200 organizationsPost(opts)

Create organization

Create organization and its owner

### Example

```javascript
import MailHubApi from 'mail_hub_api';

let apiInstance = new MailHubApi.OrganizationApi();
let opts = {
  'inlineObject2': new MailHubApi.InlineObject2() // InlineObject2 | 
};
apiInstance.organizationsPost(opts, (error, data, response) => {
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
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organizationsQuotasGet

> InlineResponse2004 organizationsQuotasGet(opts)

Get quotas usage

Get current quotas usage. &lt;/br&gt; Optionally, specify &#x60;percent_used&#x60; parameter to return quotas that reached some percent of usage. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.OrganizationApi();
let opts = {
  'percentUsed': 75 // Number | Percent of quota used
};
apiInstance.organizationsQuotasGet(opts, (error, data, response) => {
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
 **percentUsed** | **Number**| Percent of quota used | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

