import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
            <h1 className="section-title">Nuestra Historia</h1>

            <div style={{
                background: 'var(--color-bg-panel)',
                padding: '40px',
                borderRadius: '20px',
                lineHeight: '1.8',
                color: '#e0e0e0',
                fontSize: '1.1rem'
            }}>
                <p style={{ marginBottom: '20px' }}>
                    Correas Aventura nació de una necesidad simple: equipamiento para perros que pudiera resistir nuestras expediciones a la montaña sin sacrificar el estilo.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Lo que comenzó como un pequeño taller en un garaje, haciendo correas para amigos y familiares, se ha convertido en una marca dedicada a los aventureros de cuatro patas. Creemos que cada paseo es una oportunidad para explorar, y tu equipo no debería fallarte nunca.
                </p>
                <p>
                    Utilizamos materiales de grado militar, cueros curtidos vegetalmente y herrajes de latón macizo. Cada pieza es inspeccionada a mano para asegurar que estéis listos para vuestra próxima gran aventura.
                </p>

                <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '10px' }}>Nuestros Valores</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}>✓ <strong>Durabilidad Extrema:</strong> Diseñado para durar toda la vida.</li>
                        <li style={{ marginBottom: '10px' }}>✓ <strong>Diseño Funcional:</strong> Probado en condiciones reales.</li>
                        <li>✓ <strong>Pasión Canina:</strong> Hacemos esto porque amamos a los perros.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
