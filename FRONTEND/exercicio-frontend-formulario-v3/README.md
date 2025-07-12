
## Exercícios de Formulário 🏫

1. Exercício 1 - Formulario com validacão (nível médio)
 
    ![](https://imgur.com/U8T5uk7.png)

2. Exercício 2 - Formulario com validacão (nível difícil)

    ![](https://imgur.com/kVjfLzs.png)


- **index.html**: Contém a estrutura HTML básica de um formulario.
- **styles.css**: Arquivo de estilo CSS para aplicar a formatação do formulario.

## O formulario vai conter varios tipos de campos, propriedades e validaçoes sendo: 

- Text: Campo de texto.
- Number: Campo numérico.
- Email: Campo de e-mail.
- Checkbox: Caixa de marcação.
- Password: Campo de senha.
- Radio: Botão de escolha.
- Hidden: Campo invisível.
- File: Campo de selecionar arquivo.
- Select: Lista de opções.
- Button: Botão.
- Textarea: Campo de texto grande.

- Disabled: Desabilita o elemento e não pega o valor do input no processamento do Form.
- Name: Nome do elemento.
- Readonly: Desabilita o elemento, mas pega o valor do input no processamento do Form.
- For: Indica qual elemento a label pertence.
- Type: Tipo.
- Placeholder: Máscara para o usuário se localizar no que é o campo.

- Required: Deixa o campo obrigatório.
- Pattern: Permite validar via regex.
- Minlength: Define o mínimo de caracteres.
- Maxlength: Define o máximo de caracteres.
- Min: Mínimo número.
- Max: Máximo número.

### Indicação de Campos Obrigatórios (Exercício 2 )

- Campos marcados com o atributo required devem ter um asterisco vermelho ao lado, indicando que são obrigatórios.

## Dica para Criar o asterisco vermelho ao lado do campo (Exercício 2 )
Para criar o asterisco vermelho ao lado do campo, você pode seguir os seguintes passos:

1. **crie uma regra para a classe que deseja destacar, por exemplo, .required-label.**
   ```css
   .required-label::after {
    content: ' *';
    color: red;
}

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `exercícios` `css` `frontend` `HTML` `Figma` 
