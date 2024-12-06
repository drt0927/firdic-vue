import { githubLink } from "@/core/helpers/system";
import _ from "lodash";

export interface IDescendant {
    descendant_id: string,
    descendant_name: string,
    descendant_image_url: string,
    descendant_stat: IDescendantStat[],
    descendant_passive_skill: IDescendantSkill,
    descendant_skill: IDescendantSkill[],
    detail: IDescendantDetail
}

export interface IDescendantSkill {
    skill_type: string,
    skill_name: string,
    element_type: string,
    arche_type: string,
    skill_image_url: string,
    skill_description: string
}

export interface IDescendantStat {
    level: number,
    stat_detail: IDescendantStatDetail[]
}

export interface IDescendantStatDetail {
    stat_type: string,
    stat_value: number
}

export interface IDescendantDetail {
    descendant_id: string,
    eng_name: string,
    tier: string,
    role: string,
    point: string,
    attribute: string,
    story: string,
    only_weapon: string,
    only_weapon_desc: string,
    only_weapon_comment: string
}

export const getDescendant = async (): Promise<IDescendant[]> => {
    const descendantResult = await fetch(`${githubLink.value}/firdic-static/descendant.json`);
    const descendantDetailResult = await fetch(`${githubLink.value}/firdic-static/descendant-detail.json`);

    const descendants = await descendantResult.json() as IDescendant[];
    const descendantDetails = await descendantDetailResult.json() as IDescendantDetail[];

    for (const desc of descendants) {
        const passiveSkill = desc.descendant_skill.find((x) => x.skill_type === '패시브 스킬');
        if (passiveSkill) {
            desc.descendant_passive_skill = passiveSkill;
        }
        const detail = descendantDetails.find((x) => desc.descendant_id === x.descendant_id);
        if (detail) {
            desc.detail = detail;
        }

        desc.descendant_skill.sort((a, b) => a.skill_type > b.skill_type ? -1 : a.skill_type < b.skill_type ? 1 : 0);
    }

    const result = _.sortBy(descendants, ['detail.tier', 'descendant_id']);
    return result;
};