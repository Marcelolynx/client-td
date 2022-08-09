import ComingSoon from 'components/ComingSoon'

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
