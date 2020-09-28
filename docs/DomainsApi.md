# MailHubApi.DomainsApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsGet**](DomainsApi.md#domainsGet) | **GET** /domains | Get all domains
[**domainsIdDelete**](DomainsApi.md#domainsIdDelete) | **DELETE** /domains/{id} | Delete domain
[**domainsIdGet**](DomainsApi.md#domainsIdGet) | **GET** /domains/{id} | Get one domain by id
[**domainsIdPut**](DomainsApi.md#domainsIdPut) | **PUT** /domains/{id} | Update domain
[**domainsNameNameGet**](DomainsApi.md#domainsNameNameGet) | **GET** /domains/name/{name} | Get one domain by name
[**domainsPost**](DomainsApi.md#domainsPost) | **POST** /domains | Add domain
[**infoBasedomainsGet**](DomainsApi.md#infoBasedomainsGet) | **GET** /info/basedomains | Get base domains
[**infoDomainGet**](DomainsApi.md#infoDomainGet) | **GET** /info/domain | Check domain availability



## domainsGet

> [Domain] domainsGet()

Get all domains

List domains of organization. &lt;/br&gt;  Domain in list doesn&#39;t include destination addresses. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
apiInstance.domainsGet((error, data, response) => {
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

[**[Domain]**](Domain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsIdDelete

> InlineResponse200 domainsIdDelete(id)

Delete domain

Delete domain by id. &lt;/br&gt; Domain will be marked as deleted and may be restored later. &lt;/br&gt; Domain ownership is never transferred between organizations. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let id = 10; // Number | ID of domain
apiInstance.domainsIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| ID of domain | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsIdGet

> OneDomain domainsIdGet(id)

Get one domain by id

Get single domain that belongs to organization by its id.

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let id = 10; // Number | ID of domain
apiInstance.domainsIdGet(id, (error, data, response) => {
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
 **id** | **Number**| ID of domain | 

### Return type

[**OneDomain**](OneDomain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsIdPut

> InlineResponse200 domainsIdPut(id, opts)

Update domain

Update domain properties.

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let id = 10; // Number | ID of domain
let opts = {
  'inlineObject1': new MailHubApi.InlineObject1() // InlineObject1 | 
};
apiInstance.domainsIdPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of domain | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainsNameNameGet

> domainsNameNameGet(name)

Get one domain by name

Get single domain that belongs to organization by its name.

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let name = example.com; // String | FQDN of domain
apiInstance.domainsNameNameGet(name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| FQDN of domain | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsPost

> InlineResponse200 domainsPost(opts)

Add domain

Add domain to organization. &lt;/br&gt; For subdomain type of domain, appropriate DNS record will be created. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new MailHubApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | success
};
apiInstance.domainsPost(opts, (error, data, response) => {
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| success | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## infoBasedomainsGet

> [InlineResponse2001] infoBasedomainsGet(opts)

Get base domains

List base domains. Base domains are shared between organization. &lt;/br&gt; Subdomains created on top of base domain. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let opts = {
  'purpose': "purpose_example" // String | Specify domain purpose. Can be either \"subdomain\" or \"mailbox\". If parameter is not specified, domains with all purposes are returned. </br> <strong>Note:</strong> currently only \"subdomain\" purpose is implemented. 
};
apiInstance.infoBasedomainsGet(opts, (error, data, response) => {
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
 **purpose** | **String**| Specify domain purpose. Can be either \&quot;subdomain\&quot; or \&quot;mailbox\&quot;. If parameter is not specified, domains with all purposes are returned. &lt;/br&gt; &lt;strong&gt;Note:&lt;/strong&gt; currently only \&quot;subdomain\&quot; purpose is implemented.  | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoDomainGet

> InlineResponse200 infoDomainGet(fqdn)

Check domain availability

Check that subdomain is not in use and can be registered. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DomainsApi();
let fqdn = subdomain.example.com; // String | FQDN that is checked for availability 
apiInstance.infoDomainGet(fqdn, (error, data, response) => {
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
 **fqdn** | **String**| FQDN that is checked for availability  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

