// src/components/ListaUBS.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

function ListaUBS() {
  const navigate = useNavigate();
  const [selectedUBS, setSelectedUBS] = useState(null);
  const [profissionais, setProfissionais] = useState([]);

  // Lista de UBS com os dados para os iframes
  const ubsList = [
    {
      id: 1,
      nome: 'UBS São Miguel',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3228012446816!2d-39.31531432425711!3d-7.203964470722663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a17f52d50638e1%3A0x87ea2804431ca040!2sUBS%20S%C3%A3o%20Miguel!5e0!3m2!1spt-BR!2sbr!4v1733592667188!5m2!1spt-BR!2sbr',
    },
    {
      id: 2,
      nome: 'UBS Franciscanos',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2467276166335!2d-39.31713302425693!3d-7.212670870816401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a179918393aedb%3A0x580dbbc6dccbae8e!2sUnidade%20B%C3%A1sica%20de%20Sa%C3%BAde%20-%20UBS%20Franciscanos%20II!5e0!3m2!1spt-BR!2sbr!4v1733595974724!5m2!1spt-BR!2sbr',
    },
    {
      id: 3,
      nome: 'UBS Salesianos',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.222775116231!2d-39.32608360321047!3d-7.215409999999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a18209ef42ecc3%3A0xd3bdb9460cbf00c1!2sUBS%20Salesianos!5e0!3m2!1spt-BR!2sbr!4v1733596032173!5m2!1spt-BR!2sbr',
    },
  ];

  const handleSelectUBS = async (ubs) => {
    setSelectedUBS(ubs);
    try {
      const response = await axios.get(`/${ubs.id}/medicos`);
      setProfissionais(response.data);
    } catch (error) {
      console.error('Erro ao buscar profissionais:', error);
      setProfissionais([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 relative">
      <img src="/b1.png" alt="Banner 1" className="mb-6 max-w-full h-auto max-h-32 object-contain" />
      <h2 className="text-2xl font-semibold mb-6">Lista de UBS</h2>

      {/* Botões das UBS */}
      <div className="flex space-x-4 mb-6">
        {ubsList.map((ubs) => (
          <button
            key={ubs.id}
            onClick={() => handleSelectUBS(ubs)}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
          >
            {ubs.nome}
          </button>
        ))}
      </div>

      {/* Mapa da UBS Selecionada */}
      {selectedUBS && (
        <div className="w-full flex justify-center mb-6">
          <iframe
            src={selectedUBS.iframe}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${selectedUBS.nome}`}
          ></iframe>
        </div>
      )}

      {/* Lista de Profissionais */}
      {selectedUBS && (
        <div className="w-full flex flex-col items-center mb-6">
          <h3 className="text-xl font-semibold mb-4">Profissionais da {selectedUBS.nome}</h3>
          {profissionais.length > 0 ? (
            <ul className="w-full max-w-md">
              {profissionais.map((profissional) => (
                <li key={profissional.id} className="p-4 border bg-white rounded-md mb-2 shadow-md">
                  <h4 className="font-semibold">{profissional.nome}</h4>
                  <p><strong>Especialidade:</strong> {profissional.especialidade}</p>
                  <p><strong>Horário de Atendimento:</strong> {profissional.horario_atendimento}</p>
                  <p><strong>Telefone:</strong> {profissional.telefone}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhum profissional encontrado para esta UBS.</p>
          )}
        </div>
      )}

      <img src="/b2.jpg" alt="Banner 2" className="mt-6 max-w-full h-auto max-h-32 object-contain" />

      {/* Botão de Voltar */}
      <button
        onClick={() => navigate('/dashboard')}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Voltar ao Dashboard
      </button>
    </div>
  );
}

export default ListaUBS;