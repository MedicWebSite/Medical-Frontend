import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useCreateDoctor = () => {
    return useMutation({
        mutationFn: async (data) => {
            try {
                const token = localStorage.getItem('token');
                const headers = token ? { "Authorization": `Bearer ${token}` } : {};
                const response = await ApiInstance.post('/doctors/create', data, { headers });
                return response.data;
            } catch (error) {
                console.error("Error creating doctor:", error);
                throw error;
            }
        }
    });
};
