import React from 'react';

// Esta é uma versão temporária e simplificada para depuração.
// O objetivo é confirmar que o projeto base está carregando.
const App: React.FC = () => {
    return (
        <div style={{ padding: '2rem', color: 'white', fontSize: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Teste de Carregamento</h1>
            <p>Se você está vendo esta mensagem, a configuração base (live-server e Babel) está funcionando!</p>
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Agora podemos restaurar a aplicação completa.</p>
        </div>
    );
};

export default App;
