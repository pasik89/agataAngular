import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface INavigationItem {
    label: string;
    url: string;
    path: string;
    icon?: IconProp;
}