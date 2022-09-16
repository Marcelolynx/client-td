import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import DropdownUser from 'components/DropdownUser'

import * as S from './styles'

export type UserDropdownProps = {
  username: string | null | undefined
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const { push } = useRouter()

  return (
    <DropdownUser
      title={
        <>
          <AccountCircle size={24} />
          {username?.length ? <S.Username>{username}</S.Username> : null}
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <S.Link
          role="button"
          title="Sign out"
          onClick={async () => {
            const data = await signOut({
              redirect: false,
              callbackUrl: '/home'
            })
            push(data.url)
          }}
        >
          <ExitToApp />
          <span>Sair</span>
        </S.Link>
      </S.Nav>
    </DropdownUser>
  )
}

export default UserDropdown
