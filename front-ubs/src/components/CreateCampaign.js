import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    data_inicio: '',
    data_fim: '',
  });

  const [selectedUbsId, setSelectedUbsId] = useState(1);
  const navigate = useNavigate();

  // Atualiza os dados no formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.descricao || !formData.data_inicio || !formData.data_fim) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const campaignData = {
      nome: formData.nome,
      descricao: formData.descricao,
      ubs_id: selectedUbsId,
      data_inicio: formData.data_inicio,
      data_fim: formData.data_fim,
    };

    try {
      const response = await axios.post(
        `https://ubs-backend-pn16.onrender.com/api/ubs/${selectedUbsId}/campanhas`,
        campaignData,
        {
          headers: {
            'Authorization': `Basic ${btoa('admin:senha123')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      alert('Campanha criada com sucesso!');
      console.log('Resposta da criação:', response.data);
      navigate('/calendario');
    } catch (error) {
      console.error('Erro ao criar campanha:', error.response?.data || error.message);
      alert('Erro ao criar campanha. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Criar Nova Campanha</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-600">Nome da Campanha:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-600">Descrição:</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="data_inicio" className="block text-sm font-medium text-gray-600">Data de Início:</label>
            <input
              type="date"
              id="data_inicio"
              name="data_inicio"
              value={formData.data_inicio}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="data_fim" className="block text-sm font-medium text-gray-600">Data de Fim:</label>
            <input
              type="date"
              id="data_fim"
              name="data_fim"
              value={formData.data_fim}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Criar Campanha
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => navigate('/calendario')}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Ver Calendário
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
