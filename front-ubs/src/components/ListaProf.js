import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';

function ListaProf() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    const fetchProfissionais = async () => {
      try {
        const response = await api.get('/ubs');
        setProfissionais(response.data);
      } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
      }
    };

    fetchProfissionais();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 relative">
      <h2 className="text-2xl font-semibold mb-6">Lista de Profissionais</h2>
      {profissionais.length > 0 ? (
        <ul>
          {profissionais.map((profissional) => (
            <li key={profissional.id}>{profissional.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum profissional encontrado.</p>
      )}
    </div>
  );
}

export default ListaProf;
