#### Inicio ####

## Instalação
-NODE versão 12 >

-npm install

-Recomendado possuir um executador de request exemplo "Postman"

## Execução
-npm start
-npm test

## Descrição Geral e Ajuda

-Esse é um projeto basico em nodejs utilizando express, serve de base para o inicio do live code, caso queira utilizar um outro projeto, voce está livre para seguir esse caminho, mas terá que justificar sua escolha e saiba que isso ira te custar um certo tempo então seja acertivo caso queira realizar essa mudança.

-O projeto lida com teste com chai e mocha para exemplificar suas funcionalidades, nada o impede de trocar o padrão ou framework de teste, mas saiba que isso ira te custar um certo tempo então seja acertivo caso queira realizar essa mudança.

-A internet e projetos antigos são seus amigos, não queremos e nem esperamos que voce saiba tudo de cabeça, mas que consiga resolver problemas que podem surgir no seu dia a dia, então pode consultar a vontade, somente deixe a tela sendo compartilhada, queremos ver sua evolução.

Então bora para o desafio abaixo:

#### Controle saque de valores disponíveis de transação ####

## Será avaliado
- Simplicidade.
- Manutenção.
- Testabilidade.
- Consistência da visão das regras de negócio.

É necessário que o controle dos saques de valores transacionados em um meio de pagamento sejam gerenciados.
Para iniciar este gerenciamento os seguintes objetivos devem ser alcançados ao realizar a implementação
de sua regra de negócio.

## Objetivos

1 - Criar um endpoint que recebe um objeto com data de início e fim, para poder consultar todas as transações que ainda não foram sacadas e estão disponíveis.
O response deste endpoint deve possuir a lista de transações exibindo os valores, a somatória dos valores de todas as transações e a somatória dos valores das transações com a taxa de saque aplicada a cada uma.

Obs:
- A taxa está no texto abaixo. E, como taxa, ela é um desconto do valor da transação;
- Use amount_available_on_date para filtrar a data de início e fim;

2 - Criar um endpoint que recebe uma lista de transações que estão sendo sacadas na data da requisição. A regra de negócio deste endpoint deve atualizar cada transação na base de dados, modificando seu status e data de saque. Mocke que está criado em tempo de contexto dentro da API.

Utilize como padrão sublinhada_(snake_case) como padrão para entrada e saida de dados da api.

### Taxas por modalidade de pagamento

Taxas de pagamento de cada tipo de transação
- Débito: 1,58% do valor da transação;
- Crédito: 2,41% do valor da transação;

### Estrutura da base de dados
```
{
    id: integer, // Id da Transação
    amount: float, // Valor da transação
    operation_type_name: string, // Modalidade de pagamento -> credito ou debito
    withdraw_date_process: date (YYYY-MM-DD), // Data que a transacao foi processada
    flag: number, // 1 visa, 2 master
    observation: string, //pode conter uma obsercao sobre a transacao
    amount_available_on_date: date (YYYY-MM-DD), // Data de disponibilidade para saque
    withdraw_status: string, // Status do saque -> done = sacado; available = disponível para saque; unavailable = indisponível para saque
    withdraw_date: date (YYYY-MM-DD), // Data que o saque foi realizado
    is_active: bolleano, true ou false, por algum motivo essa transação foi totalmente desativada 
    is_production: bolleano, true ou false, 
}
```
#### Instrução final ####

-Queremos entender como sua mente funciona, então tente se sentir o mais avontade possivel, caso queira buscar uma agua, cafe ou ir ao banheiro, sem problema algum, o processo aqui é mais importante que o resultado final.

-Existem exemplos que podem ser visto na pasta ExampleRoute quanto para requisição post quanto get.
-Rota: http://localhost:3000/lorem-ipsum
