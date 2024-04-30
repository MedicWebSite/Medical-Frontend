import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";
export const useLogin = () => {
    return useMutation({
        mutationFn: (data) => {
            return ApiInstance.post("/auth/login", data).then((res) =>  {
                console.log(res.data);
                // res.data
            }
        );
        }
    });
};