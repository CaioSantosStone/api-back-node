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
- Simplicidade;
- Consistência da visão das regras de negócio;
- Manutenção;
- Testabilidade.

É necessário que o controle dos saques de valores transacionados em um meio de pagamento sejam gerenciados.
Para iniciar este gerenciamento os seguintes objetivos devem ser alcançados ao realizar a implementação
de sua regra de negócio.

## Objetivos

1 - Criar um endpoint do tipo POST que recebe um objeto com data de inicio e fim, para poder consultar
todas as transações que ainda não foram sacadas e estão disponíveis.
O response deste endpoint deve possuir a lista de transações exibindo os valores, a somatória dos valores de todas as transações
e a somatória dos valores das transações com a taxa de saque aplicada a cada uma.


Body do request do objetivo 1: 
```
{
    initial_date: 'YYYY-MM-DD',
    till_date: 'YYYY-MM-DD',
}
```
2 - Criar um endpoint tipo PUT que recebe uma lista de transações que estão sendo sacadas na data
do request. A regra de negócio deste endpoint deve atualizar cada transação na base de dados modificando
seu status e data de saque.

Body do request do objetivo 2: 
```
{
    transactions_list: [
        {
            transaction_id: ID da transação
        }
    ]
}
```

### Taxas por modalidade de pagamento

Taxas de pagamento de cada tipo de transação
- Débito: 1,5% do valor da transação;
- Crédito: 2% do valor da transação;

### Estrutura da base de dados
```
{
    id: integer,
    amount: float, // Valor da transação
    operation_type_name: string, // Modalidade de pagamento -> credito ou debito
    amount_available_on_date: date (YYYY-MM-DD), // Data de disponibilidade para saque
    withdraw_status: string, // Status do saque -> done = sacado; available = disponível para saque; unavailable = indisponível para saque
    withdraw_date: date (YYYY-MM-DD), // Data que o saque foi realizado
}
```
#### Instrução final ####

-Queremos entender como sua mente funciona, então tente se sentir o mais avontade possivel, caso queira buscar uma agua, cafe ou ir ao banheiro, sem problema algum, o processo aqui é mais importante que o resultado final.

-Existem exemplos que podem ser visto na pasta ExampleRoute quanto para requisição post quanto get.
-Rota: http://localhost:3000/lorem-ipsum
