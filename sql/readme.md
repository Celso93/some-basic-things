# SQL
## Informações adicionais
* Projeto: https://github.com/wlsf82/my-blog
* Documentação Auxiliar: https://learnxinyminutes.com/sql/
* https://www.postgresql.org/docs/current/app-psql.html

## Anotações
* Docker Desktop > Containers
* Stack my-blog > contêiner my-blog-db
* Aba Exec > Rode psql -U blog -d blog

# Os meta-comandos do psql são instruções processadas diretamente pelo cliente de linha de comando do PostgreSQL (psql), e não pelo servidor de banco de dados
• \l: Lista todos os bancos de dados.
• \c: Conecta a um novo banco de dados.
• \dt: Lista as tabelas do banco de dados.
• \d: Descreve os detalhes de uma tabela específica.
• \du: Lista os usuários e suas permissões.
• \dn: Lista todos os esquemas (schemas).
• \df: Lista as funções armazenadas.
• \x:  imprimindo uma coluna por linha em vez de uma linha por registro.
• \i: Executa comandos de um arquivo SQL externo.
• \q: Sai do terminal do psql.