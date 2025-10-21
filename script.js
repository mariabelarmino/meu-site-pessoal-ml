document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos principais
    const button = document.getElementById('toggle-dark-mode');
    const body = document.body;
    
    // 2. Verifica o tema armazenado no navegador (localStorage)
    const currentTheme = localStorage.getItem('theme');
    
    // 3. Verifica a preferência do sistema operacional (se não houver preferência salva)
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // 4. Aplica o tema na inicialização da página
    if (currentTheme === 'dark' || (currentTheme === null && prefersDarkScheme)) {
        // Se a preferência salva for escura OU se não houver preferência E o sistema for escuro
        body.classList.add('dark-mode');
    }

    // 5. Adiciona o evento de clique no botão
    button.addEventListener('click', () => {
        // Alterna a classe 'dark-mode'
        body.classList.toggle('dark-mode');

        // Salva a nova preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});