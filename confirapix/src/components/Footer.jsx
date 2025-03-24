import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Contato</h3>
                        <p>Email: contato@empresa.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>
                    <div class="footer-section social">
                        <h3>Siga-nos</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer