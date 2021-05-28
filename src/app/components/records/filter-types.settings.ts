import { Option } from "../../interfaces/option";

export interface FilterType extends Option {
    checked: boolean;
}

export const FILTERS_TYPES: FilterType[] = [
    {
        name: 'Access Points',
        value: 'accessPoint',
        checked: true
    },
    {
        name: 'Stations',
        value: 'station',
        checked: true
    },
    {
        name: 'Alerts',
        value: 'alert',
        checked: true
    },
    {
        name: 'Events',
        value: 'event',
        checked: true
    }
]