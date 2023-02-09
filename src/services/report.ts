import { api, getEndpoint } from "@/api"

class Report {

    public static Create(reportable_id: string | number, reportable_type: 'recipe' = 'recipe', data: object) {
        
        return api.post(getEndpoint('reports'), {
            ...data,
            reportable_id,
            reportable_type
        })
    }

}

export default Report