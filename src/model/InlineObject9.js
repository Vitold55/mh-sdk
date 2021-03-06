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

/**
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 0.8.0
 */
class InlineObject9 {
    /**
     * Constructs a new <code>InlineObject9</code>.
     * @alias module:model/InlineObject9
     * @param oldPassword {String} 
     * @param newPassword {String} Require strong password. At least 8 characters length. At least: 1 uppercase alphabetical character,  1 lowercase alphabetical character, 1 number, 1 special character. 
     */
    constructor(oldPassword, newPassword) { 
        
        InlineObject9.initialize(this, oldPassword, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, oldPassword, newPassword) { 
        obj['oldPassword'] = oldPassword;
        obj['newPassword'] = newPassword;
    }

    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject9();

            if (data.hasOwnProperty('oldPassword')) {
                obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} oldPassword
 */
InlineObject9.prototype['oldPassword'] = undefined;

/**
 * Require strong password. At least 8 characters length. At least: 1 uppercase alphabetical character,  1 lowercase alphabetical character, 1 number, 1 special character. 
 * @member {String} newPassword
 */
InlineObject9.prototype['newPassword'] = undefined;






export default InlineObject9;

