import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: email.trim(), 
          senha: senha.trim() 
        }),
      });

      if (!response) {
        throw new Error("Sem resposta do servidor");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar usuário");
      }

      if (!data.token) {
        throw new Error("Token não recebido");
      }

      // Armazena o token e redireciona
      localStorage.setItem("token", data.token);
      navigate("/", { replace: true });
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
      console.error("Erro no cadastro:", errorMessage);
      setError("Falha no cadastro: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <form onSubmit={handleCadastro} className="bg-white shadow-md rounded-lg px-12 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Crie sua conta</h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <Input
            type="password"
            placeholder="Digite sua senha "
            className="w-full"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#4A3AFF] hover:bg-[#3929FF] text-white"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Cadastrar"}
        </Button>

        <p className="mt-4 text-center text-sm">
          Já tem uma conta?{" "}
          <a 
            href="/login" 
            className="text-[#4A3AFF] font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            Faça login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Cadastro;