# Ignite Lab Node - Notifications Service

> Projeto criado durante o evento Ignite Lab Node da RocketSeat

## Principais Tecnologias

- Typescript
- Node Js
- Nest Js
- Prisma
- SQLite

### Bibliotecas adicionais

- class-validator
- class-transformer

## Boas Práticas

- Um pouco de DDD [Domain Driven Design]:
  - domínio do negócio
  - value object
- Um pouco de SOLID:
  - inversão de dependências
  - princípio da responsabilidade única
- Testes automatizados:
  - testes unitários
- Patterns:
  - in memory database
  - repository
  - mapper
  - factory

## Guia

- Instalando o Nest Js: npm i -g @nestjs/cli
- Iniciando um projeto Nest Js: nest new project-name
- Instalando o Prisma no projeto: npm i prisma -D / npm i @prisma/client
- Iniciando o Prisma no projeto: npx prisma init --datasource-provider SQLite
- Criando as tabelas no banco de dados: npx prisma migrate dev
- Abrir o prisma studio para gerenciar o banco de dados: npx prisma studio
- Documentação Nest para integração com o Prisma: https://docs.nestjs.com/recipes/prisma
- Documentação Nest para validação: https://docs.nestjs.com/techniques/validation
- Checar error de typescript após mudanças: npx tsc --noEmit

## Extensões vs code

- prisma.prisma-insider

## Key

- #BACK_END
- #EVOLUÇÃO
- #
