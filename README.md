# data-no-acqu-ino

_Data no Acquisition Arduino API = API ~Arduino para Aquisição~ Criação de Dados_

## Como usar

1. Clone este repositório em sua máquina.

2. Acesse o arquivo **apiFake.js**.

3. Retire/adicione sensores e endpoints, se necessário.

4. Renomeie as variáveis para sua situação:

   - Selecione a variável e clique **Ctrl + F**.


   - Clique na seta e insira o novo nome dessa variável.


   - Clique no botão **Replace All** (**Ctrl + Alt + Enter**).

5. Renomeie os endpoints para corresponder aos definidos no gráfico.

   _Exemplo: De /sensores/sensor1 para /sensores/temperatura._

6. Acesse o diretório deste repositório no terminal (GitBash ou VSCode) e execute os comandos abaixo:

   `npm i`
   
   _O comando acima instalará a biblioteca necessária para o funcionamento da API. A biblioteca a ser instalada está listada no arquivo **package.json**, por isso é muito importante que ele não seja alterado. Uma nova pasta chamada **node_modules** será criada quando o comando for concluído. Essa pasta conterá as bibliotecas. Não altere essa pasta._

   `npm start`
   
   _O comando acima iniciará sua API e executará os comandos de acordo com a parametrização feita nos passos anteriores._

7. Para "ver" sua API funcionando, você pode visualizar os dados no seu navegador no seguinte endereço: **http://localhost:3300/sensores/(seu endpoint)**.

8. Caso queira parar a API, pressione **CTRL+C** no terminal em que a API está rodando.

