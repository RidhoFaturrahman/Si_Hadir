import { useHistory } from "react-router-dom";
import { API_BASE_URL, LOGIN_URL } from "./api-url";
import { fetcher } from "./useAxios";

const useLogin = () => {
    const { errorMessage, successMessage } = Message();
    const { setLocalStorage } = localStorageHooks();
    const { push } = useHistory();

    const handleLogin = async (values) => {
        try {
            const request = {
                method: "post",
                data: values,
                url: LOGIN_URL,
                baseURL: API_BASE_URL
            };

            const res = await fetcher(request);

            if (!res) throw new Error("Gagal melakukan Login!");

            const { username, role, token } = res.data;

            setLocalStorage(LOCALSTORAGE_KEY.TOKEN, token);
            setLocalStorage(LOCALSTORAGE_KEY.USERNAME, username);
            setLocalStorage(LOCALSTORAGE_KEY.ROLE, role);

            successMessage("Login berhasil!");
            push(HOME_PATH);
        } catch (error) {
            errorMessage(error);
        }
    };

    return { handleLogin };
};

export default useLogin;
