import { createState, useState } from '@hookstate/core';
import services, { CreateAttributeReq } from '../../services';
import { fromFetchListAttributesResToAttributes } from './attributeMappers';
import { Attribute } from './attributeType';

const attributeState = createState<Attribute[]>([]);

export function useAttributeState() {
    const state = useState<Attribute[]>(attributeState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async getListAttributes() {
                const res = await services.attribute.getListAttributes();
                state.set(fromFetchListAttributesResToAttributes(res))
            },

            async createAttribute(input: CreateAttributeReq) {
                await services.attribute.createAttribute(input);
            },

            async removeAttribute(input: string) {
                await services.attribute.removeAttribute(input);
            },
        }
    })
}