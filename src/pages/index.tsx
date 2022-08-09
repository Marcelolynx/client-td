import ComingSoon from 'components/ComingSoon'
import Home from 'templates/Home'

export default function Index() {
  return <ComingSoon />
}

export function getServerSideProps() {
  return {
    props: {
      heading: 'Im stay here'
    }
  }
}
