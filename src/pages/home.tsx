import Home, { HomeTemplateProps } from 'templates/Home'

import tagsMock from 'components/TagHome/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      tagsMock,
      highlightMock
    }
  }
}
