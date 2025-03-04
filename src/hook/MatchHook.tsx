import { matchService } from "@/service/match.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllMatches = () => {
    const {data:matchesData, isError, isFetching} = useQuery({
        queryKey:['allMatches'],
        queryFn: matchService.getAllMatches
    })

    return {matchesData, isError, isFetching}
}