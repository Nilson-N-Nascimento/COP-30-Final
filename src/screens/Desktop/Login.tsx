import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="bg-white shadow-md rounded-lg px-12 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Bem-vindo de volta!</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            className="w-full"
          />
        </div>

        <Button className="w-full bg-[#4A3AFF] hover:bg-[#3929FF] text-white">
          Entrar
        </Button>

        <p className="mt-4 text-center text-sm">
          Ainda não tem uma conta?{" "}
          <a href="/cadastro" className="text-[#4A3AFF] font-semibold hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
