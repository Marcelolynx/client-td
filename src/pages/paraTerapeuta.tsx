import FormSignUpTerapeuta, {
  TFormSignUpTerapeuta
} from 'components/FormSignUpTerapeuta'
import Auth from 'templates/Auth'

import options from 'components/FormSignUpTerapeuta/mock'

export default function SignUpTerapeuta(props: TFormSignUpTerapeuta) {
  return (
    <Auth title="Cadastre-se:">
      <FormSignUpTerapeuta {...props} />
    </Auth>
  )
}

export function getStaticProps() {
  return {
    props: {
      options
    }
  }
}
