import Terapeuta, { TerapeutaTemplateProps } from 'templates/Terapeuta'

export default function Index(props: TerapeutaTemplateProps) {
  return <Terapeuta {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'glauco-rocha' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/fundo-hero.jpeg',
      terapeutaInfo: {
        nome: 'Glauco Rocha',
        preco: '59.00',
        description: ' Atuo há 20 anos com terapias integrativas.'
      }
    }
  }
}
