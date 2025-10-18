function createDay(day, phase, theme, focus, tasks, tip, video, affirmation) {
  return { day, phase, theme, focus, tasks, tip, video, affirmation };
}

const motivationalVideos = [
  'https://www.youtube.com/embed/ZXsQAXx_ao0',
  'https://www.youtube.com/embed/oO6J4HWrGIg',
  'https://www.youtube.com/embed/wzhzkKccBi8',
  'https://www.youtube.com/embed/UNQhuFL6CWg',
  'https://www.youtube.com/embed/wnHW6o8WMas',
  'https://www.youtube.com/embed/26U_seo0a1g',
  'https://www.youtube.com/embed/II6ziNqbY0o',
  'https://www.youtube.com/embed/2Lz0voZvB2g',
  'https://www.youtube.com/embed/AwIr9i_B2Xs',
  'https://www.youtube.com/embed/KxGRhd_iWuE'
];

function getVideo(day) {
  return motivationalVideos[(day - 1) % motivationalVideos.length];
}

const plan = [
  createDay(
    1,
    'Fase 1 · Visão Interior',
    'Descoberta de Propósito',
    'Clarifique o que realmente importa na sua vida.',
    [
      'Escreva três metas principais para os próximos 40 dias.',
      'Liste cinco momentos em que você se sentiu mais vivo e orgulhoso de si.',
      'Reserve 10 minutos para visualizar em detalhes como deseja estar no futuro.'
    ],
    'Use perguntas poderosas como "O que me motiva a levantar todos os dias?" para destravar respostas profundas.',
    getVideo(1),
    'Eu tenho uma visão clara e confio na direção que estou construindo.'
  ),
  createDay(
    2,
    'Fase 1 · Visão Interior',
    'Identidade Autêntica',
    'Reconheça suas forças e talentos natos.',
    [
      'Peça feedback sincero para duas pessoas sobre seus pontos fortes.',
      'Escreva três talentos que você pode oferecer ao mundo.',
      'Escolha um talento para nutrir com 20 minutos de prática consciente hoje.'
    ],
    'Valorize o que é natural para você. Onde existe facilidade, há potencial de impacto.',
    getVideo(2),
    'Minha autenticidade é meu diferencial e guia minhas decisões.'
  ),
  createDay(
    3,
    'Fase 1 · Visão Interior',
    'Mapeamento de Hábitos',
    'Observe padrões que impulsionam ou sabotam seus resultados.',
    [
      'Faça uma lista de hábitos atuais dividindo entre impulsionadores e sabotadores.',
      'Escolha um hábito sabotador para reduzir a partir de hoje.',
      'Substitua esse hábito por uma micro-ação positiva que caiba em 5 minutos.'
    ],
    'Transforme hábitos gradualmente: substitua, em vez de apenas eliminar.',
    getVideo(3),
    'Eu escolho diariamente hábitos que fortalecem minha melhor versão.'
  ),
  createDay(
    4,
    'Fase 1 · Visão Interior',
    'Energia e Vitalidade',
    'Cuide do corpo para sustentar a mente e as emoções.',
    [
      'Beba dois copos extras de água ao longo do dia.',
      'Realize 20 minutos de movimento corporal: caminhada, alongamento ou treino.',
      'Priorize uma refeição equilibrada e colorida, preparada com atenção plena.'
    ],
    'Energia é uma decisão diária. Pequenas escolhas elevam seu nível de presença.',
    getVideo(4),
    'Meu corpo é meu aliado; eu o trato com respeito e cuidado.'
  ),
  createDay(
    5,
    'Fase 1 · Visão Interior',
    'Visão Inspiradora',
    'Construa uma imagem clara do futuro desejado.',
    [
      'Escreva uma carta para você mesmo daqui a 40 dias descrevendo vitórias e aprendizados.',
      'Crie um painel digital ou físico com imagens da vida que deseja construir.',
      'Defina um símbolo ou palavra-chave que represente sua visão.'
    ],
    'Mantenha sua carta em um local visível para revisitar a sensação de conquista todos os dias.',
    getVideo(5),
    'Minha visão me inspira e direciona cada passo com confiança.'
  ),
  createDay(
    6,
    'Fase 1 · Visão Interior',
    'Valores Inegociáveis',
    'Defina limites saudáveis e prioridades alinhadas ao seu propósito.',
    [
      'Liste seus cinco principais valores pessoais.',
      'Identifique uma área da vida que precisa de limites mais claros.',
      'Comunique um desses limites para alguém ou para si de forma respeitosa.'
    ],
    'Valores claros simplificam decisões difíceis. Consulte-os antes de dizer sim ou não.',
    getVideo(6),
    'Meus valores são bússolas firmes que me mantêm alinhado ao que acredito.'
  ),
  createDay(
    7,
    'Fase 1 · Visão Interior',
    'Propósito em Ação',
    'Conecte suas metas ao impacto que deseja gerar.',
    [
      'Escreva como cada meta definida impacta positivamente outra pessoa.',
      'Planeje uma ação simples para servir alguém hoje.',
      'Agradeça conscientemente uma pessoa que contribuiu com sua jornada.'
    ],
    'Propósito cresce quando compartilhado. Procure oportunidades de servir com intenção.',
    getVideo(7),
    'Eu gero impacto positivo ao agir com intenção e generosidade.'
  ),
  createDay(
    8,
    'Fase 1 · Visão Interior',
    'Mentalidade de Crescimento',
    'Transforme desafios em oportunidades de evolução.',
    [
      'Identifique uma crença limitante que aparece com frequência.',
      'Reescreva essa crença em uma declaração fortalecedora.',
      'Escolha uma ação que comprove, na prática, sua nova crença.'
    ],
    'Sempre questione: "O que esse desafio está tentando me ensinar?"',
    getVideo(8),
    'Eu aprendo e evoluo com cada experiência, mesmo as desafiadoras.'
  ),
  createDay(
    9,
    'Fase 1 · Visão Interior',
    'Rede de Apoio',
    'Identifique pessoas e recursos que fortalecem sua jornada.',
    [
      'Liste cinco pessoas que podem apoiar seus objetivos.',
      'Envie uma mensagem de conexão ou agradecimento para uma delas.',
      'Pesquise um conteúdo (podcast, livro ou curso) que complemente seu crescimento.'
    ],
    'Apoio é via de mão dupla: ofereça valor genuíno enquanto pede ajuda.',
    getVideo(9),
    'Eu estou cercado de apoio e crio conexões significativas todos os dias.'
  ),
  createDay(
    10,
    'Fase 1 · Visão Interior',
    'Compromisso Pessoal',
    'Renove a decisão de se manter firme ao plano.',
    [
      'Revise as metas do dia 1 e ajuste detalhes necessários.',
      'Crie um mantra pessoal para repetir quando sentir desânimo.',
      'Organize seu ambiente físico para facilitar as ações dos próximos dias.'
    ],
    'Comprometa-se por escrito com alguém de confiança e compartilhe seu progresso semanal.',
    getVideo(10),
    'Sou fiel aos meus compromissos e ajo com disciplina e alegria.'
  ),
  createDay(
    11,
    'Fase 2 · Mentalidade Inabalável',
    'Rituais Poderosos',
    'Construa rotinas que sustentem sua energia mental.',
    [
      'Desenhe um ritual matinal com três passos simples.',
      'Defina um horário fixo para iniciar o sono hoje.',
      'Inclua um momento de silêncio ou meditação de cinco minutos.'
    ],
    'Rituais trazem previsibilidade para o cérebro e reduzem a ansiedade do dia.',
    getVideo(1),
    'Eu cuido da minha energia criando rituais intencionais e sustentáveis.'
  ),
  createDay(
    12,
    'Fase 2 · Mentalidade Inabalável',
    'Gestão do Tempo',
    'Use seu tempo como recurso precioso a favor da visão.',
    [
      'Faça uma auditoria rápida do dia dividindo atividades em importantes ou urgentes.',
      'Planeje três prioridades inegociáveis para amanhã.',
      'Utilize a técnica Pomodoro ou bloco de foco em uma tarefa relevante.'
    ],
    'Tempo é energia em movimento. Proteja seu calendário como protegeria um grande investimento.',
    getVideo(2),
    'Eu administro meu tempo com consciência e foco no que gera progresso real.'
  ),
  createDay(
    13,
    'Fase 2 · Mentalidade Inabalável',
    'Autoconfiança',
    'Fortaleça a coragem de avançar mesmo sem garantias.',
    [
      'Escreva três conquistas das quais você se orgulha.',
      'Registre uma situação em que enfrentou o medo e evoluiu.',
      'Assuma uma pequena ação hoje que estava adiando por insegurança.'
    ],
    'Confiança é construída com evidências. Celebre vitórias passadas e use-as como combustível.',
    getVideo(3),
    'Confio na minha capacidade de aprender, adaptar e vencer.'
  ),
  createDay(
    14,
    'Fase 2 · Mentalidade Inabalável',
    'Resiliência Emocional',
    'Desenvolva respostas conscientes diante de pressões.',
    [
      'Identifique gatilhos emocionais recorrentes e nomeie os sentimentos envolvidos.',
      'Pratique respiração 4-7-8 quando sentir tensão ou ansiedade.',
      'Escreva uma carta de compaixão para si mesmo reconhecendo esforços reais.'
    ],
    'Nomear emoções reduz seu impacto. Permita-se sentir e escolher respostas conscientes.',
    getVideo(4),
    'Eu me acolho com gentileza e transformo pressões em sabedoria.'
  ),
  createDay(
    15,
    'Fase 2 · Mentalidade Inabalável',
    'Pensamento Positivo Realista',
    'Ajuste o foco para perceber possibilidades reais.',
    [
      'Liste cinco motivos de gratidão específicos de hoje.',
      'Reformule uma situação difícil destacando o que pode ser aprendido.',
      'Compartilhe uma palavra de encorajamento com alguém próximo.'
    ],
    'O cérebro procura o que você ordena. Dê a ele a instrução de encontrar soluções.',
    getVideo(5),
    'Eu escolho enxergar oportunidades sem ignorar a realidade.'
  ),
  createDay(
    16,
    'Fase 2 · Mentalidade Inabalável',
    'Coragem para Mudar',
    'Abrace mudanças conscientes que aproximam da visão.',
    [
      'Identifique um comportamento que já não combina com seu futuro desejado.',
      'Planeje uma conversa necessária para alinhar expectativas.',
      'Tome uma decisão prática hoje que represente sua coragem.'
    ],
    'Pequenas decisões corajosas acumuladas criam resultados extraordinários.',
    getVideo(6),
    'Avanço mesmo quando sinto medo, pois minha visão vale o esforço.'
  ),
  createDay(
    17,
    'Fase 2 · Mentalidade Inabalável',
    'Comunicação Assertiva',
    'Expresse ideias e sentimentos com respeito e clareza.',
    [
      'Use a técnica Fato-Sentimento-Pedido em uma conversa do dia.',
      'Pratique ouvir alguém por cinco minutos sem interromper.',
      'Registre uma mensagem que você precisa comunicar e defina quando fará isso.'
    ],
    'Assertividade nasce da combinação entre respeito próprio e empatia pelo outro.',
    getVideo(7),
    'Minha voz é firme e compassiva, e minhas palavras constroem pontes.'
  ),
  createDay(
    18,
    'Fase 2 · Mentalidade Inabalável',
    'Presença Plena',
    'Treine sua atenção para viver o momento com qualidade.',
    [
      'Faça uma refeição hoje sem distrações digitais, apenas observando sabores e sensações.',
      'Dedique 10 minutos a uma prática de mindfulness guiada ou respiração consciente.',
      'Realize um check-in emocional anotando como está se sentindo neste instante.'
    ],
    'Respire profundamente três vezes sempre que mudar de atividade ao longo do dia.',
    getVideo(8),
    'Eu vivo com presença e honra cada momento como oportunidade de crescimento.'
  ),
  createDay(
    19,
    'Fase 2 · Mentalidade Inabalável',
    'Flexibilidade Mental',
    'Adapte seus planos com criatividade e foco na solução.',
    [
      'Identifique uma situação recente em que precisou improvisar e o que aprendeu.',
      'Liste duas opções alternativas para um desafio atual.',
      'Faça algo fora da rotina para estimular novas conexões cerebrais.'
    ],
    'Planos flexíveis mantêm você em movimento mesmo diante de imprevistos.',
    getVideo(9),
    'Eu me adapto rapidamente e encontro caminhos criativos para avançar.'
  ),
  createDay(
    20,
    'Fase 2 · Mentalidade Inabalável',
    'Autoimagem Potente',
    'Atualize a forma como você se enxerga.',
    [
      'Escolha uma fotografia que represente sua melhor versão e deixe visível.',
      'Descreva em um parágrafo quem você está se tornando neste processo.',
      'Vista-se hoje de acordo com o futuro que está construindo.'
    ],
    'Sua autoimagem orienta suas ações. Garanta que ela esteja alinhada à sua visão.',
    getVideo(10),
    'Eu me vejo como vitorioso e ajo coerentemente com essa identidade.'
  ),
  createDay(
    21,
    'Fase 3 · Ação Estratégica',
    'Planejamento Estratégico',
    'Transforme visão em planos concretos.',
    [
      'Quebre uma meta principal em marcos semanais.',
      'Defina indicadores simples para acompanhar o progresso.',
      'Agende em calendário as ações dos próximos sete dias.'
    ],
    'Planejar é proteger sua visão do improviso constante. Revise semanalmente.',
    getVideo(1),
    'Tenho clareza das etapas e avanço com estratégia e constância.'
  ),
  createDay(
    22,
    'Fase 3 · Ação Estratégica',
    'Execução Consistente',
    'Faça o que precisa ser feito, mesmo sem vontade.',
    [
      'Escolha a tarefa mais importante e execute-a logo no início do dia.',
      'Use uma lista de checagem para garantir as entregas essenciais.',
      'Ao finalizar o dia, reconheça o que foi concluído com sucesso.'
    ],
    'A consistência nasce de microvitórias diárias. Honre as pequenas entregas.',
    getVideo(2),
    'Eu ajo com disciplina e colho resultados consistentes.'
  ),
  createDay(
    23,
    'Fase 3 · Ação Estratégica',
    'Produtividade Profunda',
    'Aprofunde-se nas tarefas de maior impacto.',
    [
      'Bloqueie 90 minutos para trabalhar sem interrupções em um projeto-chave.',
      'Elimine notificações desnecessárias durante esse bloco.',
      'Ao final, registre insights ou melhorias percebidas.'
    ],
    'Ambientes enxutos e silenciosos potencializam sua produtividade profunda.',
    getVideo(3),
    'Quando foco, crio resultados extraordinários em menos tempo.'
  ),
  createDay(
    24,
    'Fase 3 · Ação Estratégica',
    'Aprendizado Contínuo',
    'Alimente sua mente com conteúdos que ampliam horizontes.',
    [
      'Separe 30 minutos para estudar um tema relevante à sua visão.',
      'Anote três ideias aplicáveis imediatamente.',
      'Compartilhe um insight com alguém para consolidar o aprendizado.'
    ],
    'Aprender e ensinar no mesmo dia acelera a retenção do conhecimento.',
    getVideo(4),
    'Sou um aprendiz incansável e aplico rapidamente o que descubro.'
  ),
  createDay(
    25,
    'Fase 3 · Ação Estratégica',
    'Resolução Criativa de Problemas',
    'Enfrente obstáculos com pensamento estruturado.',
    [
      'Escolha um desafio atual e escreva claramente o problema.',
      'Gere pelo menos três possíveis soluções sem julgamentos.',
      'Defina a melhor opção e o primeiro passo para executá-la.'
    ],
    'Problemas bem definidos já estão meio resolvidos. Busque clareza antes da ação.',
    getVideo(5),
    'Eu vejo obstáculos como oportunidades para criar soluções inteligentes.'
  ),
  createDay(
    26,
    'Fase 3 · Ação Estratégica',
    'Networking Inteligente',
    'Cultive relacionamentos estratégicos para crescer.',
    [
      'Identifique duas pessoas com quem gostaria de se reconectar profissionalmente.',
      'Envie uma mensagem genuína abrindo espaço para colaboração.',
      'Ofereça ajuda ou recurso valioso sem esperar retorno imediato.'
    ],
    'Relacionamentos são sementes. Plante com generosidade e consistência.',
    getVideo(6),
    'Eu construo relacionamentos verdadeiros que potencializam minha missão.'
  ),
  createDay(
    27,
    'Fase 3 · Ação Estratégica',
    'Liderança Pessoal',
    'Seja exemplo do que espera de si e dos outros.',
    [
      'Defina um padrão de excelência que você deseja manter.',
      'Apoie alguém hoje a atingir uma meta, oferecendo orientação.',
      'Revise suas atitudes e identifique uma melhoria para amanhã.'
    ],
    'Liderança começa dentro. Pratique autocuidado e autogestão antes de guiar outros.',
    getVideo(7),
    'Eu lidero com consciência, responsabilidade e inspiração.'
  ),
  createDay(
    28,
    'Fase 3 · Ação Estratégica',
    'Inovação Pessoal',
    'Introduza novidades que mantenham a motivação elevada.',
    [
      'Experimente uma nova ferramenta ou técnica relacionada à sua meta.',
      'Faça brainstorming de dez ideias ousadas sem se censurar.',
      'Implemente imediatamente uma melhoria simples que surgiu das ideias.'
    ],
    'Separe tempo para pensar fora da caixa. A criatividade precisa de agenda.',
    getVideo(8),
    'Eu inovo continuamente e mantenho minha jornada interessante.'
  ),
  createDay(
    29,
    'Fase 3 · Ação Estratégica',
    'Resiliência Física',
    'Consolide práticas corporais que sustentam alto desempenho.',
    [
      'Pratique uma atividade física que eleve seus batimentos cardíacos.',
      'Alongue-se ao acordar e antes de dormir por pelo menos cinco minutos.',
      'Faça uma refeição rica em alimentos naturais e proteínas de qualidade.'
    ],
    'Alinhe corpo e mente: movimento gera clareza mental e estabilidade emocional.',
    getVideo(9),
    'Meu corpo é forte e me permite executar meus sonhos com energia.'
  ),
  createDay(
    30,
    'Fase 3 · Ação Estratégica',
    'Celebração de Conquistas',
    'Reconheça avanços e recarregue a motivação.',
    [
      'Revise conquistas das últimas quatro semanas e escreva seus destaques.',
      'Compartilhe uma vitória com alguém importante.',
      'Presenteie-se com uma pequena celebração saudável e significativa.'
    ],
    'Celebração gera dopamina e reforça comportamentos positivos. Faça disso um hábito.',
    getVideo(10),
    'Celebro cada passo dado porque ele constrói minha grande vitória.'
  ),
  createDay(
    31,
    'Fase 4 · Legado Sustentável',
    'Propósito Expandido',
    'Amplie o impacto da sua transformação.',
    [
      'Defina como sua mudança beneficia sua família, clientes ou comunidade.',
      'Liste oportunidades de multiplicar o conhecimento adquirido.',
      'Agende uma ação concreta de contribuição para esta semana.'
    ],
    'Quando você cresce, todos ao redor crescem. Conecte-se ao impacto coletivo.',
    getVideo(1),
    'Meu propósito se expande e transforma o ambiente ao meu redor.'
  ),
  createDay(
    32,
    'Fase 4 · Legado Sustentável',
    'Mentoria e Serviço',
    'Compartilhe o que aprendeu para consolidar o conhecimento.',
    [
      'Convide alguém para uma conversa de apoio ou mentoria.',
      'Ensine uma ferramenta ou insight que foi poderoso para você.',
      'Receba feedback sobre como sua ajuda impactou a outra pessoa.'
    ],
    'Servir fortalece a autoconfiança. Você sempre tem algo valioso a oferecer.',
    getVideo(2),
    'Eu inspiro e apoio pessoas a avançarem com coragem.'
  ),
  createDay(
    33,
    'Fase 4 · Legado Sustentável',
    'Equilíbrio Integral',
    'Harmonize áreas da vida para manter a evolução.',
    [
      'Avalie seu nível de satisfação em cinco áreas: trabalho, saúde, finanças, relacionamentos e lazer.',
      'Escolha uma área que precisa de atenção e defina um passo imediato.',
      'Programe um momento de descanso consciente nesta semana.'
    ],
    'Equilíbrio não é estagnação, é ritmo. Ajuste conforme suas prioridades mudam.',
    getVideo(3),
    'Eu crio equilíbrio com escolhas inteligentes e intencionais.'
  ),
  createDay(
    34,
    'Fase 4 · Legado Sustentável',
    'Finanças Conscientes',
    'Garanta estabilidade para sustentar novos projetos.',
    [
      'Revise suas entradas e saídas financeiras deste mês.',
      'Defina um valor para investir em desenvolvimento pessoal ou profissional.',
      'Elimine ou renegocie uma despesa que não agrega valor real.'
    ],
    'Dinheiro é energia em circulação. Dê direção clara para onde ele deve ir.',
    getVideo(4),
    'Eu administro minhas finanças com sabedoria e visão de longo prazo.'
  ),
  createDay(
    35,
    'Fase 4 · Legado Sustentável',
    'Legado Familiar',
    'Fortaleça vínculos e histórias compartilhadas.',
    [
      'Converse com um familiar sobre sonhos e memórias significativas.',
      'Planeje um momento especial com quem você ama nesta semana.',
      'Escreva uma carta ou mensagem de apreciação para um parente.'
    ],
    'Família é raiz. Nutra as conexões que sustentam sua identidade.',
    getVideo(5),
    'Minha família se fortalece com meu amor, presença e propósito.'
  ),
  createDay(
    36,
    'Fase 4 · Legado Sustentável',
    'Impacto Social',
    'Amplie sua influência positiva na comunidade.',
    [
      'Identifique uma causa social alinhada aos seus valores.',
      'Doe tempo, conhecimento ou recursos de forma intencional.',
      'Compartilhe nas redes sociais uma mensagem de conscientização.'
    ],
    'Ao servir causas maiores, você se conecta com algo que transcende desafios individuais.',
    getVideo(6),
    'Meu impacto ultrapassa limites pessoais e alcança mais pessoas.'
  ),
  createDay(
    37,
    'Fase 4 · Legado Sustentável',
    'Autonomia e Liberdade',
    'Fortaleça escolhas que geram independência.',
    [
      'Liste decisões que dependem apenas de você e comece por uma hoje.',
      'Identifique algo que possa delegar ou automatizar para ganhar tempo.',
      'Planeje uma reserva de emergência ou um fundo de liberdade.'
    ],
    'Liberdade é construída com planejamento e foco nas prioridades essenciais.',
    getVideo(7),
    'Eu crio liberdade cuidando das minhas escolhas e responsabilidades.'
  ),
  createDay(
    38,
    'Fase 4 · Legado Sustentável',
    'Autocelebração',
    'Reforce sua autoestima com rituais de reconhecimento.',
    [
      'Faça uma lista de qualidades que admira em si mesmo.',
      'Olhe-se no espelho e verbalize em voz alta três dessas qualidades.',
      'Planeje uma recompensa saudável para o final dos 40 dias.'
    ],
    'Celebre sem culpa: reconhecer seu progresso não é arrogância, é combustível.',
    getVideo(8),
    'Eu me celebro porque sei o quanto caminhei para chegar até aqui.'
  ),
  createDay(
    39,
    'Fase 4 · Legado Sustentável',
    'Plano de 90 Dias',
    'Projete o próximo ciclo de crescimento.',
    [
      'Defina metas para os próximos três meses alinhadas à visão construída.',
      'Identifique recursos ou habilidades que precisará desenvolver.',
      'Marque datas de revisão quinzenal para acompanhar o progresso.'
    ],
    'Planeje ciclos trimestrais para manter o ritmo de evolução constante.',
    getVideo(9),
    'Tenho um plano claro para continuar crescendo com consistência.'
  ),
  createDay(
    40,
    'Fase 4 · Legado Sustentável',
    'Renovação Constante',
    'Feche o ciclo celebrando e recomeçando com propósito.',
    [
      'Releia a carta escrita no dia 5 e compare com sua realidade atual.',
      'Escreva um relato resumindo aprendizados e vitórias dos 40 dias.',
      'Crie um compromisso público ou privado para manter os novos hábitos.'
    ],
    'Todo final é também um começo. Continue evoluindo um dia de cada vez.',
    getVideo(10),
    'Eu renovo minha decisão diariamente e vivo com visão e propósito.'
  )
];

document.addEventListener('DOMContentLoaded', () => {
  const pointsPerTask = 10;
  const storageKey = 'vencercomvisao-40dias';
  const scoreValue = document.getElementById('scoreValue');
  const tasksComplete = document.getElementById('tasksComplete');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const progressWrapper = document.querySelector('.progress-wrapper');
  const dayList = document.getElementById('dayList');
  const dayTitle = document.getElementById('dayTitle');
  const daySubtitle = document.getElementById('daySubtitle');
  const taskList = document.getElementById('taskList');
  const dayTip = document.getElementById('dayTip');
  const videoFrame = document.getElementById('videoFrame');
  const reflectionInput = document.getElementById('reflectionInput');
  const saveReflectionButton = document.getElementById('saveReflection');
  const saveMessage = document.getElementById('saveMessage');
  const currentDayLabel = document.getElementById('currentDayLabel');
  const dayPhase = document.getElementById('dayPhase');
  const dayTheme = document.getElementById('dayTheme');
  const dayFocus = document.getElementById('dayFocus');
  const dailyAffirmation = document.getElementById('dailyAffirmation');
  const startTodayButton = document.getElementById('startToday');
  const planSection = document.getElementById('plan');
  const currentYear = document.getElementById('currentYear');

  let messageTimeout;

  function loadState() {
    try {
      const stored = localStorage.getItem(storageKey);
      if (!stored) {
        return { completed: {}, reflections: {}, lastAccessedDay: 1 };
      }
      const parsed = JSON.parse(stored);
      return {
        completed: parsed.completed || {},
        reflections: parsed.reflections || {},
        lastAccessedDay: parsed.lastAccessedDay || 1
      };
    } catch (error) {
      console.error('Não foi possível carregar o progresso salvo.', error);
      return { completed: {}, reflections: {}, lastAccessedDay: 1 };
    }
  }

  let state = loadState();
  let currentDay = state.lastAccessedDay || 1;

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.error('Não foi possível salvar o progresso.', error);
    }
  }

  function updateScore() {
    const totalTasks = plan.reduce((sum, day) => sum + day.tasks.length, 0);
    let completedCount = 0;

    Object.values(state.completed).forEach((indices) => {
      if (Array.isArray(indices)) {
        completedCount += indices.length;
      }
    });

    const points = completedCount * pointsPerTask;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

    scoreValue.textContent = points.toString();
    tasksComplete.textContent = `${completedCount} / ${totalTasks}`;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% do plano concluído`;
    progressWrapper?.setAttribute('aria-valuenow', String(percentage));
  }

  function updateTimeline() {
    const buttons = dayList.querySelectorAll('button');
    buttons.forEach((button) => {
      const dayNumber = Number(button.dataset.day);
      const total = plan.find((item) => item.day === dayNumber)?.tasks.length || 0;
      const completed = state.completed[dayNumber]?.length || 0;

      button.classList.toggle('active', dayNumber === currentDay);
      button.classList.toggle('completed', completed === total && total > 0);
      button.classList.toggle('in-progress', completed > 0 && completed < total);
    });
  }

  function renderTasks(dayInfo) {
    taskList.innerHTML = '';
    const completedIndices = state.completed[dayInfo.day] || [];

    dayInfo.tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
      const checkboxId = `day${dayInfo.day}-task${index}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = checkboxId;
      checkbox.checked = completedIndices.includes(index);

      if (checkbox.checked) {
        listItem.classList.add('completed');
      }

      const label = document.createElement('label');
      label.setAttribute('for', checkboxId);
      label.textContent = task;

      checkbox.addEventListener('change', (event) => {
        toggleTask(dayInfo.day, index, event.target.checked, listItem);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      taskList.appendChild(listItem);
    });
  }

  function toggleTask(dayNumber, taskIndex, isChecked, listItem) {
    if (!Array.isArray(state.completed[dayNumber])) {
      state.completed[dayNumber] = [];
    }

    const tasksForDay = state.completed[dayNumber];

    if (isChecked) {
      if (!tasksForDay.includes(taskIndex)) {
        tasksForDay.push(taskIndex);
      }
      listItem.classList.add('completed');
    } else {
      state.completed[dayNumber] = tasksForDay.filter((item) => item !== taskIndex);
      listItem.classList.remove('completed');
    }

    saveState();
    updateScore();
    updateTimeline();
  }

  function renderDay(dayNumber) {
    const dayInfo = plan.find((item) => item.day === dayNumber);
    if (!dayInfo) {
      return;
    }

    currentDay = dayNumber;
    state.lastAccessedDay = dayNumber;
    saveState();

    dayTitle.textContent = `Dia ${dayInfo.day} · ${dayInfo.theme}`;
    daySubtitle.textContent = `${dayInfo.phase} · ${dayInfo.focus}`;

    dayPhase.textContent = dayInfo.phase;
    dayTheme.textContent = dayInfo.theme;
    dayFocus.textContent = dayInfo.focus;
    currentDayLabel.textContent = `Dia ${dayInfo.day}`;
    dailyAffirmation.textContent = dayInfo.affirmation;

    dayTip.textContent = dayInfo.tip;
    videoFrame.src = `${dayInfo.video}?rel=0`;
    reflectionInput.value = state.reflections[dayInfo.day] || '';
    saveMessage.textContent = '';
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }

    renderTasks(dayInfo);
    updateTimeline();
    updateScore();
  }

  saveReflectionButton.addEventListener('click', () => {
    const value = reflectionInput.value.trim();
    state.reflections[currentDay] = value;
    saveState();
    saveMessage.textContent = 'Reflexão salva com sucesso!';
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    messageTimeout = setTimeout(() => {
      saveMessage.textContent = '';
    }, 2500);
  });

  startTodayButton?.addEventListener('click', () => {
    planSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  plan.forEach((dayInfo) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Dia ${dayInfo.day}`;
    button.dataset.day = String(dayInfo.day);
    button.addEventListener('click', () => renderDay(dayInfo.day));
    dayList.appendChild(button);
  });

  renderDay(currentDay);
});
