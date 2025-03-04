import { axiosClassic } from "@/api/interseptors"
import { IFronttempResponse } from "@/interface"

export const matchService = {
    async getAllMatches(){
        const response = await axiosClassic.get<IFronttempResponse>('fronttemp-service/fronttemp');
        return response.data.data
    }
}