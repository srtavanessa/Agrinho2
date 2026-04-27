// Seleção de elementos do DOM
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('feedback-message');
const welcomeText = document.getElementById('welcome-text');

// 1. Lógica de Modo Escuro (Manipulação de Classe no Body)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Armazenando preferência simples
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌓';
});

// 2. Manipulação de Formulário e Processamento de Variáveis
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Captura o valor do input (Armazenamento em variável)
    const nomeUsuario = document.getElementById('nome').value;
    
    // Altera o conteúdo HTML de forma dinâmica
    if (nomeUsuario) {
        contactForm.classList.add('hidden');
        feedback.classList.remove('hidden');
        feedback.innerHTML = `<h3>Obrigado, ${nomeUsuario}!</h3><p>Sua voz fortalece o agro sustentável.</p>`;
        
        // Efeito visual de mudança no título
        welcomeText.innerText = `Bem-vindo à Revolução Verde, ${nomeUsuario}!`;
        welcomeText.style.color = "#8bc34a";
    }
});

// 3. Função simples para interação de botão
function saibaMais() {
    window.scrollTo({
        top: document.getElementById('sobre').offsetTop - 70,
        behavior: 'smooth'
    });
}
