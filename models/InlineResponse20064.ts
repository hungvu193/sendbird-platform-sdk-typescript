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

import { InlineResponse20064ExportedData } from './InlineResponse20064ExportedData';
import { HttpFile } from '../http/http';

export class InlineResponse20064 {
    'exportedData'?: Array<InlineResponse20064ExportedData>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exportedData",
            "baseName": "exported_data",
            "type": "Array<InlineResponse20064ExportedData>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20064.attributeTypeMap;
    }

    public constructor() {
    }
}
