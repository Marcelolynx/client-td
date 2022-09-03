import ProfissionaisTemplate, {
  ProfissionaisTemplateProps
} from 'templates/Profissionais'
import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/TerapeutaCardSlider/mock'

export default function ProfissionaisPage(props: ProfissionaisTemplateProps) {
  return <ProfissionaisTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      profissionais: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
