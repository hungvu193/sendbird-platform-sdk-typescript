/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TranslateMessageIntoOtherLanguagesData {
    /**
    * Specifies an array of one or more codes of [translation](/docs/chat/v3/platform-api/message/translations/translation-engine) to translate the message.
    */
    'targetLangs'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "targetLangs",
            "baseName": "target_langs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranslateMessageIntoOtherLanguagesData.attributeTypeMap;
    }

    public constructor() {
    }
}
