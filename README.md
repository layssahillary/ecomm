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




