/**
 * Mail-Hub API
 * This is a specification for Mail-Hub API  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: support@mail-hub.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Attachment from './model/Attachment';
import DestinationMailbox from './model/DestinationMailbox';
import Domain from './model/Domain';
import Group from './model/Group';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject2 from './model/InlineObject2';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2006Pages from './model/InlineResponse2006Pages';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse202 from './model/InlineResponse202';
import Mail from './model/Mail';
import OneAttachment from './model/OneAttachment';
import OneDomain from './model/OneDomain';
import OneDomainAllOf from './model/OneDomainAllOf';
import OneDomainAllOfDomainForwards from './model/OneDomainAllOfDomainForwards';
import Organization from './model/Organization';
import Source from './model/Source';
import User from './model/User';
import DestinationMailboxesApi from './api/DestinationMailboxesApi';
import DomainsApi from './api/DomainsApi';
import InfoApi from './api/InfoApi';
import MailboxesApi from './api/MailboxesApi';
import MailsApi from './api/MailsApi';
import OrganizationApi from './api/OrganizationApi';
import UsersApi from './api/UsersApi';
import VerificationsApi from './api/VerificationsApi';


/**
* This_is_a_specification_for_Mail_Hub_API_Authentication___ReDoc_Inject_security_definitions___.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MailHubApi = require('index'); // See note below*.
* var xxxSvc = new MailHubApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MailHubApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MailHubApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MailHubApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.8.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment,

    /**
     * The DestinationMailbox model constructor.
     * @property {module:model/DestinationMailbox}
     */
    DestinationMailbox,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2006Pages model constructor.
     * @property {module:model/InlineResponse2006Pages}
     */
    InlineResponse2006Pages,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse202 model constructor.
     * @property {module:model/InlineResponse202}
     */
    InlineResponse202,

    /**
     * The Mail model constructor.
     * @property {module:model/Mail}
     */
    Mail,

    /**
     * The OneAttachment model constructor.
     * @property {module:model/OneAttachment}
     */
    OneAttachment,

    /**
     * The OneDomain model constructor.
     * @property {module:model/OneDomain}
     */
    OneDomain,

    /**
     * The OneDomainAllOf model constructor.
     * @property {module:model/OneDomainAllOf}
     */
    OneDomainAllOf,

    /**
     * The OneDomainAllOfDomainForwards model constructor.
     * @property {module:model/OneDomainAllOfDomainForwards}
     */
    OneDomainAllOfDomainForwards,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The DestinationMailboxesApi service constructor.
    * @property {module:api/DestinationMailboxesApi}
    */
    DestinationMailboxesApi,

    /**
    * The DomainsApi service constructor.
    * @property {module:api/DomainsApi}
    */
    DomainsApi,

    /**
    * The InfoApi service constructor.
    * @property {module:api/InfoApi}
    */
    InfoApi,

    /**
    * The MailboxesApi service constructor.
    * @property {module:api/MailboxesApi}
    */
    MailboxesApi,

    /**
    * The MailsApi service constructor.
    * @property {module:api/MailsApi}
    */
    MailsApi,

    /**
    * The OrganizationApi service constructor.
    * @property {module:api/OrganizationApi}
    */
    OrganizationApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VerificationsApi service constructor.
    * @property {module:api/VerificationsApi}
    */
    VerificationsApi
};
