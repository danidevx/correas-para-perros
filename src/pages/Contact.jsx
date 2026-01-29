import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'rgba(0,0,0,0.3)',
        color: '#fff',
        fontFamily: 'var(--font-body)'
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '600px' }}>
            <h1 className="section-title">Contáctanos</h1>

            <div style={{ background: 'var(--color-bg-panel)', padding: '40px', borderRadius: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)' }}>Nombre</label>
                        <input type="text" style={inputStyle} required placeholder="Tu nombre" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)' }}>Email</label>
                        <input type="email" style={inputStyle} required placeholder="tucorreo@ejemplo.com" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)' }}>Mensaje</label>
                        <textarea style={{ ...inputStyle, height: '150px', resize: 'vertical' }} required placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
                </form>

                <div style={{ marginTop: '30px', textAlign: 'center', color: '#aaa', fontSize: '0.9rem' }}>
                    <p>También puedes escribirnos a:</p>
                    <p style={{ color: '#fff', marginTop: '5px' }}>hola@correasaventura.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
