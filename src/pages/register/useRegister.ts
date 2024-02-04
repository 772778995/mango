import api from '@/src/api'
import useRequest from '@/src/hooks/useRequest'
import useSendCaptcha from '@/src/hooks/useSendEmail'
import { QInput } from 'quasar'
import { CreateUserDto } from '~/api/user/dto/create-user.dto'

type Props = {
  emailInputRef: Ref<QInput>
}

// 邮件验证码注册
export default (props: Props) => {
  const router = useRouter()
  const { emailInputRef } = props

  const registerForm = ref<CreateUserDto>({
    email: '772778995@qq.com',
    captcha: '',
    psd: '123456'
  })

  const { leftSeconds, sendEmailCode, isSendEmailCodeLoading } = useSendCaptcha()
  const sendEmailCodeHandler = async () => {
    const isPass = await emailInputRef.value.validate()
    if (!isPass) return
    sendEmailCode({ captchaType: 'register', email: registerForm.value.email })
  }

  const [register, isRegisterLoading] = useRequest(() =>
    api.post('/api/user/register', registerForm.value)
  )

  const registerHandler = async () => {
    const res = await register()
    console.log(res)
    const { token } = res
    localStorage.setItem('token', token)
    router.replace({ name: '首页' })
  }

  return {
    leftSeconds,
    sendEmailCodeHandler,
    isSendEmailCodeLoading,

    registerForm,
    isRegisterLoading,
    registerHandler
  }
}

