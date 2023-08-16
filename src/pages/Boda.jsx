import React from 'react';

function Boda() {
    return (
        <div>
            <section  className="boda-section">
                <h2>Bienvenidos a nuestra boda</h2>
                <p>Estamos muy emocionados y agradecidos de poder compartir uno de los días más importantes de nuestras vidas con personas tan especiales como ustedes. <br /><br />¡Esperamos que disfruten cada momento tanto como nosotros!</p>
            </section>

            <section className="info-section">
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7236377519994!2d-99.19983082623556!3d19.33779494370454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200076ade2155%3A0x8c7ea0444275b382!2sALTTO%20San%20Angel!5e0!3m2!1sen!2smx!4v1692213502356!5m2!1sen!2smx"
                        width="100%" 
                        height="100%" 
                        style={{border: '0'}}
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="event-details">
                    <h2>Información General:</h2>
                    <p><strong>Lugar:</strong> Altto San Angel.</p>
                    <p><strong>Dirección:</strong> <a href="https://www.google.com/maps?q=19.337789881932398,-99.19724517670672&hl=es" target="_blank" rel="noopener noreferrer">Rio de la Magdalena 99, Alvaro Obregón</a></p>
                    <p className="ceremony-time"><strong>Hora de la Ceremonia:</strong> 13:00</p>
                    <p className="dress-code"><strong>Vestimenta:</strong> Formal</p>
                </div>
            </section>
        </div>
    );
}




export default Boda;
