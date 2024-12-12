import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig";

function LoginForm() {
    const [cnpj, setCnpj] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const credentials = btoa(`${cnpj}:${password}`);
            const response = await api.post(
                "/login",
                {},
                {
                    headers: {
                        Authorization: `Basic ${credentials}`,
                    },
                }
            );

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/createCampaign"); // Redirecionar para a página de criação de campanha após o login
            } else {
                alert("CNPJ ou senha incorretos!");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("CNPJ ou senha incorretos!");
            } else {
                alert("Erro de conexão com o servidor.");
            }
        }
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <h1 className="text-center text-2xl font-bold mb-6">Login UBS</h1>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleLogin}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cnpj"
                    >
                        CNPJ
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cnpj"
                        type="text"
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Senha
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
