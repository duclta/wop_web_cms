import { Plant } from './plantType'
import { convertTagToName } from '@/utils';

export const fromListPlantsResToListPlant = (res: any): Plant[] => {
    return Object.keys(res).map((key, index) => {

        const data = res[key];
        const plant: Plant = {
            id: data._id,
            tag: data.tag,
            name: convertTagToName(data.tag),
            family: data.family,
            thumbnail: undefined,
            labels: [],
            updatedAt: data.updatedAt,
            requestCount: data.requests.length,
            contributeCount: data.contributed,
            progress: 0,
        }
        if (data.tag === 'paphiopedilum_belalutum') {
            plant.progress = 50;
            plant.thumbnail =
                "https://orchids-shop.com/media/catalog/product/cache/4/image/650x/aa7e4a111a6f16aad7d4ccd9a5e97598/b/e/bel.5.jpg";
        }

        return plant;
    })
}