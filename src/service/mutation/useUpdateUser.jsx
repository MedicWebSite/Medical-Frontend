import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useUpdateUser = () =>{
    return useMutation({
        mutationFn:(updateData)=>{
            return ApiInstance.put('/users/update', updateData)
        }
    })
}