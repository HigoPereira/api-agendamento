# API de Agendamento

Sistema de agendamento desenvolvido em Node.js utilizando Express, SQLite e JWT.

## Tecnologias utilizadas

- Node.js
- Express
- SQLite
- JWT
- Dotenv

---

# Funcionalidades

## Serviços
- Listar serviços
- Criar serviço
- Atualizar serviço
- Remover serviço

## Agendamentos
- Listar agendamentos
- Criar agendamento
- Atualizar agendamento
- Remover agendamento

---

# Autenticação

A API utiliza autenticação JWT.

## Login

POST /auth/login

### Body

```json
{
  "usuario": "admin",
  "senha": "123"
}