import type { NextPage } from 'next'

const Auth: NextPage = () => {

  const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID as string}&redirect_uri=http://localhost:3000/line&state=hoge&bot_prompt=normal&scope=profile%20openid&nonce=foobar&prompt=consent`

  return (
    <div>
      <a href={url}>
        Lineログイン
      </a>
    </div>
  )
}

export default Auth