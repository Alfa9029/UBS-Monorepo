import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="font-bold">INSTITUCIONAL</h2>
          <p>PREFEITO(A): GLEDSON BEZERRA</p>
          <p>CNPJ: 11.361.227/0001-89</p>
        </div>
        <div>
          <h2 className="font-bold">CONTATO</h2>
          <p>0800 494 0277</p>
        </div>
        <div>
          <h2 className="font-bold">ENDEREÇO E HORÁRIO</h2>
          <p>RUA JOSÉ MARROCOS, SANTA TEREZA</p>
          <p>SEGUNDA À SEXTA DAS 8H ÀS 14H</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;