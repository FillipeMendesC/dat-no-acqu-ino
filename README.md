# data-no-acqu-ino
![189931169-9df7b283-bf43-4af4-8154-b1669862090e](https://github.com/user-attachments/assets/a1b121a0-206b-4a31-8393-51bf92604dfa)

_Data no Acquisition Arduino API = API ~Arduino para Aquisição~ No_

API original: https://github.com/BandTec/dat-acqu-ino

<hr>

## Como usar

1. Clone este repositório em sua máquina.

2. Acesse o arquivo **apiFake.js**.

3. Retire/adicione sensores e endpoints, se necessário.

4. Renomeie as variáveis para sua situação:

   - Selecione a variável e clique **Ctrl + F**.
     
![passo1](https://github.com/user-attachments/assets/32ef6756-0b58-4ef2-a0a7-6a7edfccb14e)

   - Clique na seta e insira o novo nome dessa variável.
     
![passo2](https://github.com/user-attachments/assets/c3105db3-1386-46b3-80de-ef03ae4ba159)


   - Clique no botão **Replace All** (**Ctrl + Alt + Enter**).
     
![passo3](https://github.com/user-attachments/assets/7a9fa251-a293-47b0-8799-d49410c2bc60)


5. Renomeie os endpoints para corresponder aos definidos no gráfico.
   
![passoEnd](https://github.com/user-attachments/assets/2aa31fd1-0b57-4f45-85a8-30279ba68cf1)
   _Exemplo: De /sensores/sensor1 para /sensores/temperatura._

6. Acesse o diretório deste repositório no terminal (GitBash ou VSCode) e execute os comandos abaixo:

   `npm i`
   
   _O comando acima instalará a biblioteca necessária para o funcionamento da API. A biblioteca a ser instalada está listada no arquivo **package.json**, por isso é muito importante que ele não seja alterado. Uma nova pasta chamada **node_modules** será criada quando o comando for concluído. Essa pasta conterá as bibliotecas. Não altere essa pasta._

   `npm start`
   
   _O comando acima iniciará sua API e executará os comandos de acordo com a parametrização feita nos passos anteriores._

7. Para "ver" sua API funcionando, você pode visualizar os dados no seu navegador no seguinte endereço: **http://localhost:3300/sensores/(seuEndpoint)**.

8. Caso queira parar a API, pressione **CTRL+C** no terminal em que a API está rodando.

