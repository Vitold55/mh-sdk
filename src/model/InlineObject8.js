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
 * The InlineObject8 model module.
 * @module model/InlineObject8
 * @version 0.8.0
 */
class InlineObject8 {
    /**
     * Constructs a new <code>InlineObject8</code>.
     * @alias module:model/InlineObject8
     */
    constructor() { 
        
        InlineObject8.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject8} obj Optional instance to populate.
     * @return {module:model/InlineObject8} The populated <code>InlineObject8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject8();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('fname')) {
                obj['fname'] = ApiClient.convertToType(data['fname'], 'String');
            }
            if (data.hasOwnProperty('lname')) {
                obj['lname'] = ApiClient.convertToType(data['lname'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InlineObject8.prototype['email'] = undefined;

/**
 * @member {String} fname
 */
InlineObject8.prototype['fname'] = undefined;

/**
 * @member {String} lname
 */
InlineObject8.prototype['lname'] = undefined;

/**
 * @member {module:model/InlineObject8.StatusEnum} status
 */
InlineObject8.prototype['status'] = undefined;

/**
 * @member {module:model/InlineObject8.RoleEnum} role
 */
InlineObject8.prototype['role'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject8['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};


/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject8['RoleEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "manager"
     * @const
     */
    "manager": "manager",

    /**
     * value: "operator"
     * @const
     */
    "operator": "operator"
};



export default InlineObject8;

