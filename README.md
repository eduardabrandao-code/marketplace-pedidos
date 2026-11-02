# Marketplace - Pedidos de Serviços

Aplicação desenvolvida em React e TypeScript que simula a área de um profissional num marketplace de serviços de reparação, permitindo consultar, filtrar e aceitar pedidos disponíveis.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS

## Funcionalidades

- Listagem de pedidos de serviços.
- Apresentação do tipo de serviço, cidade, data, hora, duração e valor.
- Identificação visual de pedidos urgentes.
- Filtro de pedidos por cidade.
- Possibilidade de aceitar pedidos, removendo-os da lista.
- Mensagem informativa quando não existem pedidos disponíveis.
- Simulação de um carregamento inicial de 1 segundo.

## Como executar o projeto

**Pré-requisitos:** Node.js e npm instalados.

1. Clonar o repositório:

   ```bash
   git clone https://github.com/eduardabrandao-code/marketplace-pedidos.git
   ```

2. Entrar na pasta do projeto:

   ```bash
   cd marketplace-pedidos
   ```

3. Instalar as dependências:

   ```bash
   npm install
   ```

4. Iniciar a aplicação:

   ```bash
   npm run dev
   ```

5. Abrir no navegador o endereço apresentado no terminal, normalmente `http://localhost:5173`.

## Melhorias futuras

Se tivesse mais tempo, começaria por implementar uma secção de pedidos aceites, permitindo ao profissional consultar os serviços que já aceitou.

Adicionaria também pesquisa por tipo de serviço e ordenação por data e valor.

Posteriormente, desenvolveria uma API com Node.js e uma base de dados para guardar e gerir os pedidos.

Por fim, implementaria autenticação para permitir que cada profissional tivesse acesso aos seus próprios pedidos.
