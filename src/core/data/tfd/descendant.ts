import { githubLink } from "@/core/helpers/system";

interface IDescendant {
    descendant_id: string,
    descendant_name: string,
    descendant_image_url: string,
    descendant_stat: [
        {
            level: number,
            stat_detail: [
                {
                    stat_type: string,
                    stat_value: number
                }
            ]
        }
    ],
    descendant_skill: [
        {
        skill_type: string,
        skill_name: string,
        element_type: string,
        arche_type: string,
        skill_image_url: string,
        skill_description: string
        }
    ]
}

export type { IDescendant };

export const getDescendant = async (): Promise<IDescendant[]> => {
    const result = await fetch(`${githubLink.value}/firdic-static/descendant.json`);
    const descendant = await result.json();
    return descendant;
};