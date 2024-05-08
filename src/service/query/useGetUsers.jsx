import ApiInstance from "../../api";
import { useQuery } from "@tanstack/react-query";


export const useGetUsers = (users) => {
    return useQuery({
        queryKey: ['get-users', users],
        queryFn: () => ApiInstance.get(users)
        .then(res => res.data.data)
    })
}