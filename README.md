# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

# The twelve-Factor App

# 1 - Base de Código:
Uma base de código com rastreamento utilizando controle de revisão, muitos deploys.
OK | A aplicação possui o rastreamento de controle de versão utilizando o git e Github que é o repositorio, onde cada serviço é separado por branchs.

# 2 - Dependências:
Declare e isole explicitamente as dependências.
OK | Todas as dependências são explicitamente declaradas e isoladas no arquivo package.json.

# 3 - Configurações:
Armazene as configurações no ambiente.
OK | No projeto account e product ambos possuem o cofing do connect do banco de dados. No projeto account possui .env de variavel de ambiente.

# 4 - Serviço de apoio:
Trate serviços de apoio como recursos anexados.
OK | Na aplicação utilizamos o banco MongoDB como serviço de apoio, conectando por uma URL.

# 5 - Build, release, run:
Separe estritamente os estágios de construção e execução.
NÃO possui |

# 6 - Processos:
Execute a aplicação como um ou mais processos que não armazenam estado.
NÂO possui | 

# 7 - Vínculo de portas:
Exporte serviços via vínculo de portas.
OK | O projeto possui vinculo de portas declaradas no docker-compose e dockerfile

# 8 - Concorrência:
Escale através do processo modelo.
OK | O projeto está separado por processos de account, finance e product tendo maior escalabilidade.

# 9 - Descartabilidade:
Maximize robustez com inicialização rápida e desligamento gracioso.
OK | Na aplicação o uso do Docker faz com que obtenha robustez com inicialização rapida e desligamento sem perder informações.

# 10 - Paridade entre desenvolvimento e produção:
Mantenha o desenvolvimento, homologação e produção o mais similares possível
NÃO possui |

# 11 - Logs:
Trate logs como fluxos de eventos
NÃO possui |

# 12 - XII. Processos administrativos:
Rode tarefas de administração/gestão em processos pontuais
NÃO possui |


# Microservices Patterns

 OK | Serviços de domínio | A aplicação possui Account, finance e product como serviços de dominio
 OK | Serviços de negócio | Os dominios se comunicam entre si
Não implementado | API Gateway 
Não implementado | Agregador de processos
Não implementado | Edge service
 OK | Single database vs Bancos diferentes | Usamos o mongoDB e MySQL
 OK | Eventos assíncronos 
Não implementado | Agregação de logs 
Não implementado | Agregação de métricas 

# Aspectos de Microservices 
 
# Padronização das Stacks
O projeto foi padroonizado e desenvolvido utilizando Javascript, MongoDB e MySQL

# Solução para Service Discovery
Em todos os serviços foi utilizado o Docker, onde permite e consegue fazer a comunicação

# Aspectos de Segurança
O aspecto de segurança foi implementado nos serviços utilizando Token e JWT com a crioptografia dos dados sensiveis.

# Tecnologias para Deploy e Build
 Para o build utilizamos Jest e o ESLint e testes. Para o deploy podemos utilizar ferramentas como GitHub Actions.

# Tolerância a Falhas em Aplicações Síncronas
Para tolerancia a falhas em aplicações sincronas são importantes o circuit breaker e o cache cache.

# Comunicação Assíncrona
A comunicação assíncrona é ideal, onde as respostas são já obtida. Pode ser implementado um serviço de mensageria para realizar a comunicação,como o RabbitMQ.
