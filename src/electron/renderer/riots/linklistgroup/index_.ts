// http://riotjs.com/guide/
// http://riotjs.com/api/
import { IRiotOptsLinkListItem } from "../linklist/index_";
// import {
//     RiotMixinWithRecursivePropertySetter,
//     riot_mixin_RecursivePropertySetter,
// } from "../riot_mixin_RecursivePropertySetter";
// import { riot_mixin_EventTracer } from "../riot_mixin_EventTracer";

export interface IRiotOptsLinkListGroupItem {
    label: string;
    links: IRiotOptsLinkListItem[];
    // url: string;
}
export interface IRiotOptsLinkListGroup {
    basic: boolean;
    linksgroup: IRiotOptsLinkListGroupItem[];
    url: string;
}

export interface IRiotTagLinkListGroup extends
    // IRiotOptsLinkListGroup,
    RiotTag { // RiotMixinWithRecursivePropertySetter
    setBasic: (basic: boolean) => void;
    // setBasic: (basic: boolean) => void;
}

export const riotMountLinkListGroup = (selector: string, opts: IRiotOptsLinkListGroup): RiotTag[] => {
    const tag = riot.mount(selector, opts);
    // console.log(tag); // RiotTag[]
    return tag;
};

// tslint:disable-next-line:space-before-function-paren
(window as any).riot_linklistgroup = function (_opts: IRiotOptsLinkListGroup) {
    // console.log(opts);
    // console.log(this);

    const that = this as IRiotTagLinkListGroup;

    // that.mixin(riot_mixin_RecursivePropertySetter);

    // that.linksgroup = opts.linksgroup;
    // that.url = opts.url;
    // that.basic = opts.basic ? true : false;

    // that.setBasic = (basic: boolean) => {
    //     that.opts.basic = basic;
    //     // that.basic = basic;
    //     // that.setPropertyRecursively("basic", basic, "riot-linklist");
    // };

    // tslint:disable-next-line:space-before-function-paren
    that.setBasic = function (basic: boolean) {
        this.opts.basic = basic;
        this.update();
    };
};