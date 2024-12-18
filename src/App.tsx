import { Envelope, Lock } from 'phosphor-react'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'


export function App() {
  return (
    <div className="w-screen h-screen bg-white-100 flex items-center flex-col justify-center text-black">
      <header className="flex flex-col items-center">
        <Logo/>

        <Heading size="lg" className="nt-4">
          Star Lab
        </Heading>

        <Text size="lg" className="text-white-300 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="passwoord" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder='*********' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-900">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-white-300 underline hover:text-white-200">Esqueceu sua senha</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-white-300 underline hover:text-white-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  )
}