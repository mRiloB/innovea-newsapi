# Como rodar o projeto
Você terá que rodar o projeto na sua máquina pois a News API possui corsNotAllowed. Com a licensa gratuita você só consegue acessar a api pelo localhost.

Faça o clone do repossitório para a sua máquina. Depois execute o seguinte comando:

se tiver usando npm:
```
npm install
```
se tiver usando yarn:
```
yarn
```

Depois que todas as bibliotecas forem instaladas basta rodar o comando:
```
npm run dev
```

ou

```
yarn dev
```

# Variáveis de ambiente


Para maior segurança eu deixei a APIKEY do News API em um arquivo .env


Crie um arquivo .env na raiz do projeto e adicione a variável VITE_APIKEY dessa maneira:
```
VITE_APIKEY=sua_api_key
```

Precisa ter o prefixo VITE_ pois é assim que o vite entende as variáveis de ambiente no projeto.

