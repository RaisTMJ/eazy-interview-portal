import { LoginFormInputs } from "@/app/login/page";
import api from "@/lib/api";

export type RegisterFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export const loginUser = async (input: LoginFormInputs): Promise<string> => {

    const response =  await api.post<string>("/auth/login", input);
    return response.data; // return string token

}

export const registerUser = async (input: RegisterFormInputs): Promise<string> => {
    const response = await api.post<string>("/auth/register", input);
    return response.data; // return string token
}

export const logoutUser = async (): Promise<void> => {

    await api.post("/auth/logout");
}