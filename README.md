# Rota-Entre-Modulos

Este projeto Angular demonstra a criação de uma aplicação com módulos distintos e rotas filhas, permitindo uma navegação organizada e modular entre diferentes partes da aplicação. O exemplo inclui dois módulos, `Module1` e `Module2`, cada um com suas próprias rotas e componentes, além de botões para navegação entre esses módulos.

## Funcionalidade

- **Module1**:
  - Rota: `/module1/child1`
  - Componente com um botão para navegar para o `Module2`.

- **Module2**:
  - Rota: `/module2/child2`
  - Componente com um botão para navegar para o `Module1`.

## Configuração

1. **Clone o Repositório**

```
git clone https://github.com/DhymasG/Rota-Entre-Modulos.git
```  
2. **Instale as Dependências**

Certifique-se de ter o Angular CLI instalado. Em seguida, instale as dependências do projeto:
```
npm install
```

3. **Execute a Aplicação**

Inicie o servidor de desenvolvimento:
```
ng serve
```
Abra o navegador e acesse `http://localhost:4200` para visualizar a aplicação.

## Arquivos Importantes
* ``src/app/app-routing.module.ts``: Configuração das rotas principais usando ``loadChildren`` para módulos filhos.
* ``src/app/module1/module1-routing.module.ts``: Configuração das rotas para o ``Module1``.
* ``src/app/module2/module2-routing.module.ts``: Configuração das rotas para o ``Module2``.
* ``src/app/module1/module1.component.html`` e ``src/app/module2/module2.component.html``: Templates dos componentes com botões de navegação.




