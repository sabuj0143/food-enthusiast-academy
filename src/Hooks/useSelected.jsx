import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelected = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selects = [] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data
        },
    })

    return [selects, refetch]
};

export default useSelected;