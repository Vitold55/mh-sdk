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

import ApiClient from '../ApiClient';
import InlineResponse2006Pages from './InlineResponse2006Pages';
import Mail from './Mail';

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 0.8.0
 */
class InlineResponse2006 {
    /**
     * Constructs a new <code>InlineResponse2006</code>.
     * @alias module:model/InlineResponse2006
     */
    constructor() { 
        
        InlineResponse2006.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006();

            if (data.hasOwnProperty('pages')) {
                obj['pages'] = InlineResponse2006Pages.constructFromObject(data['pages']);
            }
            if (data.hasOwnProperty('mails')) {
                obj['mails'] = ApiClient.convertToType(data['mails'], [Mail]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2006Pages} pages
 */
InlineResponse2006.prototype['pages'] = undefined;

/**
 * @member {Array.<module:model/Mail>} mails
 */
InlineResponse2006.prototype['mails'] = undefined;






export default InlineResponse2006;
