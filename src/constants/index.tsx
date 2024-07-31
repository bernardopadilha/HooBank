import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from '../assets/index.js'

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Funcionalidades',
  },
  {
    id: 'product',
    title: 'Produto',
  },
  {
    id: 'clients',
    title: 'Clientes',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Recompensas',
    content:
      'Os melhores cartões de crédito oferecem combinações tentadoras de promoções e prêmios.',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Seguro',
    content:
      'Tomamos medidas proativas para garantir que suas informações e transações estejam seguras.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Transferência de Saldo',
    content:
      'Um cartão de crédito para transferência de saldo pode economizar muito dinheiro em encargos de juros.',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'O dinheiro é apenas uma ferramenta. Ele o levará aonde você desejar, mas não substituirá você como motorista.',
    name: 'Carlos Silva',
    title: 'Fundador & Líder',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      'O dinheiro facilita sua vida. Se você tem a sorte de tê-lo, você é sortudo.',
    name: 'João Souza',
    title: 'Fundador & Líder',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'Geralmente são pessoas do ramo financeiro, comércio internacional e negócios que são realmente ricas.',
    name: 'Ana Pereira',
    title: 'Fundadora & Líder',
    img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'Usuários Ativos',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Empresas Confiáveis',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transações',
    value: 'R$230M+',
  },
]

export const footerLinks = [
  {
    title: 'Links Úteis',
    links: [
      {
        name: 'Conteúdo',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'Como Funciona',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Criar',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explorar',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Termos & Serviços',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      {
        name: 'Central de Ajuda',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Parceiros',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Sugestões',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Boletins Informativos',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Parceiro',
    links: [
      {
        name: 'Nosso Parceiro',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Torne-se um Parceiro',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]
