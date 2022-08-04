import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

export function getServerSideProps() {
  return {
    props: {
      heading: 'Im stay here'
    }
  }
}
