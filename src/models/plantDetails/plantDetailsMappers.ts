import { PlantDetails } from './plantDetailsType';

export const fromPlantDetailsResToPlant = (data: any): PlantDetails => {
    return {
        id: data._id,
        tag: data.tag,
        name: String(data.tag).split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        thumbnail: undefined,
        labels: [],
        updatedAt: data.updatedAt,
        requestCount: data.requests.length,
        contributeCount: data.contributed,
        progress: 0,
        tabs: data.tabs ? data.tabs.map((t: any) => {
            return {
                id: t.tab._id,
                name: t.tab.name,
                description: t.tab.description,
                attributes: t.attributes ? t.attributes.map((a: any) => {
                    console.log(a);
                    return {
                        id: a.attribute._id,
                        name: a.attribute.name,
                        description: a.attribute.description,
                        value: a.contributes && a.contributes.length ? a.contributes[0].value : "Unknown",
                        contributes: a.contributes ? a.contributes.map((c: any) => {
                            return {
                                id: c._id,
                                user: {
                                    name: c.username,
                                },
                                tag: c.tag,
                                tab: c.tab,
                                attribute: c.attribute,
                                value: c.value,
                                verified: c.isData,
                                downVote: c.downvote,
                                upVote: c.upvote,
                                check: c.check,
                                createdAt: c.createdAt,
                            }
                        }) : [],
                    }
                }) : []
            }
        }) : []
    }
}