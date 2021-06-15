import { createState, useState } from '@hookstate/core';
import services, { CreateTabReq } from '../../services';
import { fromFetchListTabsResToTabs } from './tabMappers';
import { Tab } from './tabType';

const tabState = createState<Tab[]>([]);

export function useTabState() {
    const state = useState<Tab[]>(tabState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async getListTabs() {
                const res = await services.tab.getListTabs();
                state.set(fromFetchListTabsResToTabs(res))
            },

            async createTab(input: CreateTabReq) {
                await services.tab.createTab(input);
            },

            async removeTab(input: string) {
                await services.tab.removeTab(input);
            },
        }
    })
}