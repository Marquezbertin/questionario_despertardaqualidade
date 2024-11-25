# Questionário: Qualidade de Software
Este é um projeto simples de questionário interativo, criado para testar seus conhecimentos sobre qualidade de software. O questionário contém 10 perguntas com duas opções de resposta ("Certo" ou "Errado"). Ao final, você verá a sua pontuação e terá a opção de refazer o questionário ou visitar o site "O Despertar da Qualidade de Software".

## Funcionalidades
10 questões sobre qualidade de software.
Exibição de resultados no final do questionário, mostrando quantas questões foram respondidas corretamente.
Modal interativo para mostrar os resultados com opções para:
Refazer o questionário (zerando a pontuação).
Voltar ao site "O Despertar da Qualidade de Software".
### Como Funciona
O usuário responde as questões clicando em "Certo" ou "Errado".
Após responder todas as perguntas, um modal é exibido com a pontuação de acertos.
O modal oferece duas opções:
Refazer o questionário, que reinicia o contador e permite que o usuário tente novamente.
Voltar ao site, que redireciona para o site: O Despertar para a Qualidade de Software.
### Como Usar
Requisitos
Nenhum requisito de instalação necessário.
Funciona em qualquer navegador moderno que suporte HTML5, CSS3 e JavaScript.
Executando o Projeto Localmente
Clone o repositório:

## bash
Copiar código
git clone https://github.com/seu-usuario/questionario-qualidade-software.git
Navegue até a pasta do projeto:

bash
Copiar código
cd questionario-qualidade-software
Abra o arquivo index.html no navegador:

Você pode abrir o arquivo diretamente em seu navegador ou usar um servidor local (como o Live Server no Visual Studio Code).
Personalização
### Alterar questões e respostas:
As questões e respostas estão no arquivo index.html, onde as opções de resposta são definidas nos botões dentro de cada <fieldset>.
Alterar o link para o site:
O link para o site pode ser alterado no arquivo script.js, na função goToSite().
Estrutura do Projeto
index.html: Contém a estrutura do questionário e o código do modal.
styles.css: Define o estilo do questionário e do modal.
script.js: Implementa a lógica de verificação de respostas, exibição de resultados e opções de ação (refazer ou redirecionar).
Contribuindo
Faça um fork deste repositório.
### Crie uma branch para suas mudanças:
bash
Copiar código
git checkout -b minha-nova-funcionalidade
Faça as alterações desejadas.
Commit suas alterações:
bash
Copiar código
git commit -m "Adicionando nova funcionalidade"
Envie para o repositório remoto:
bash
Copiar código
git push origin minha-nova-funcionalidade
Abra um pull request para revisar suas alterações.
### Licença
Este projeto está licenciado sob a MIT License.

