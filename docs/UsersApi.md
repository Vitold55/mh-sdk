# MailHubApi.UsersApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get all users
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete user
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | Get one user
[**usersIdPasswordPut**](UsersApi.md#usersIdPasswordPut) | **PUT** /users/{id}/password | Change user&#39;s password
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | Change user
[**usersLoginPost**](UsersApi.md#usersLoginPost) | **POST** /users/login | Authenticate user
[**usersOnboardPost**](UsersApi.md#usersOnboardPost) | **POST** /users/onboard | Onboard user
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Add user



## usersGet

> [User] usersGet()

Get all users

List all users in organization

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
apiInstance.usersGet((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdDelete

> InlineResponse200 usersIdDelete(id)

Delete user

Delete a single user by id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
let id = 14; // Number | ID of user
apiInstance.usersIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| ID of user | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> User usersIdGet(id)

Get one user

Get a single user by id

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
let id = 14; // Number | ID of user
apiInstance.usersIdGet(id, (error, data, response) => {
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
 **id** | **Number**| ID of user | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdPasswordPut

> InlineResponse200 usersIdPasswordPut(id, opts)

Change user&#39;s password

Change user&#39;s password

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
let id = 14; // Number | ID of user
let opts = {
  'inlineObject9': new MailHubApi.InlineObject9() // InlineObject9 | 
};
apiInstance.usersIdPasswordPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of user | 
 **inlineObject9** | [**InlineObject9**](InlineObject9.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersIdPatch

> InlineResponse200 usersIdPatch(id, opts)

Change user

Change user&#39;s attributes. E.g. role, status, etc. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
let id = 14; // Number | ID of user
let opts = {
  'inlineObject8': new MailHubApi.InlineObject8() // InlineObject8 | 
};
apiInstance.usersIdPatch(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of user | 
 **inlineObject8** | [**InlineObject8**](InlineObject8.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersLoginPost

> InlineResponse2005 usersLoginPost(opts)

Authenticate user

Authentication is required to get access to resources of organization and make operations. &lt;/br&gt;  For authentication you must provide &#x60;username(email)&#x60; and &#x60;password&#x60; of user you are acting on behalf of. &lt;/br&gt;  In response you&#39;ll get &#x60;session key&#x60;. This key must be used in all subsequent requests to API. &lt;/br&gt; Note, that different users inside single organization may have different access to various resources (RBAC).   

### Example

```javascript
import MailHubApi from 'mail_hub_api';

let apiInstance = new MailHubApi.UsersApi();
let opts = {
  'inlineObject5': new MailHubApi.InlineObject5() // InlineObject5 | 
};
apiInstance.usersLoginPost(opts, (error, data, response) => {
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
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersOnboardPost

> InlineResponse200 usersOnboardPost(opts)

Onboard user

Onboard previously invited user. &lt;/br&gt;  You must posses invitation code. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';

let apiInstance = new MailHubApi.UsersApi();
let opts = {
  'inlineObject7': new MailHubApi.InlineObject7() // InlineObject7 | 
};
apiInstance.usersOnboardPost(opts, (error, data, response) => {
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
 **inlineObject7** | [**InlineObject7**](InlineObject7.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPost

> InlineResponse201 usersPost(opts)

Add user

Add new user to organization. &lt;/br&gt; User will be invited via email. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.UsersApi();
let opts = {
  'inlineObject6': new MailHubApi.InlineObject6() // InlineObject6 | 
};
apiInstance.usersPost(opts, (error, data, response) => {
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
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

