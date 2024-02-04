<script setup lang="ts">
import 'virtual:windi.css'
import api from '../api'
import localForage from '../utils/localForage'
import { BASE_URL } from '../api'
import { Notify } from 'quasar'

/** 是否显示登录弹窗 */
const isLoginDialogShow = ref(false)
/** 是否显示注册弹窗 */
const isRegisterDialogShow = ref(false)
/** 是否显示商品详情弹窗 */
const isGoodsDetailDialogShow = ref(false)
/** 选中分类 */
const activeCateIndex = ref(0)
/** 选中商品详情信息 */
const activeGoodsDetail = ref<any>(null)
/** 选中商品分类ID */
const activeGoodsCateId = ref(-1)
/** 是否记住登录 */
const isRemberLogin = ref(true)
/** 登录表单 */
const loginForm = ref({
  account: 'admin',
  password: '123456'
})

const userInfo = ref<any>(null)
localForage.getItem('userInfo').then(userInfoStorage => {
  if (userInfoStorage) userInfo.value = userInfoStorage
})

/** 登录 */
const loginHandler = async () => {
  const res: any = await api.post('/user/login', loginForm.value)
  if (!res)
    return Notify.create({
      message: '密码不正确'
    })
  userInfo.value = res.userinfo
  if (isRemberLogin.value) await localForage.setItem('userInfo', res.userinfo)
  Notify.create({
    message: '登录成功'
  })
  isLoginDialogShow.value = false
}

/** 退出登录 */
const logoutHandler = () => {
  userInfo.value = null
  localForage.setItem('userInfo', null)
}

/** 注册 */
const registerHandler = async () => {
  // TODO
  await api.post('')
  isRegisterDialogShow.value = false
}

const goodsCategory = ref<any[]>([])
api.get('/goods/goodsCategory').then(res => {
  goodsCategory.value = res as any
  if (goodsCategory.value.length) activeGoodsCateId.value = goodsCategory.value[0].id
})

const goodsList = ref<any[]>([])
api.get('/goods/list').then((res: any) => (goodsList.value = res))

/** 商品点击事件 */
const goodsClickHandler = (goodDetail: any) => {
  console.log(goodDetail)
  activeGoodsDetail.value = goodDetail
  isGoodsDetailDialogShow.value = true
}
</script>

<template>
  <div _flex="~" _h="100vh" _bg="[#191c20]" _text="white">
    <!-- 左侧 -->
    <div _flex="~ col" _h="full" _p="20px">
      <div _border="~ [#303030]">
        <div _w="325px" _bg="[#1c1d1f]">
          <!-- 用户信息 -->
          <div _flex="~" _w="full" _h="100px" _border="1.5px rounded-sm [#303030]">
            <div _flex="~" _w="full" _p="15px">
              <img
                :src="userInfo?.avatar || 'https://img.wuhaochao.top/funny.png'"
                _w="60px"
                _h="60px"
                _border="rounded"
                :class="userInfo ? 'pointer-events-none' : 'cursor-pointer'"
                @click="isLoginDialogShow = true"
              />

              <div _flex="~ col justify-between" _h="60px" _m="l-15px" _text="13px">
                <div _font="bold">{{ userInfo?.username || '用户名' }}</div>
                <div>Player</div>
                <div
                  _p="y-4px x-3px"
                  _bg="white/10"
                  _text="12px white/50"
                  _border="rounded"
                >
                  昵称:{{ userInfo?.nickname || '昵称' }}
                </div>
              </div>
            </div>

            <div
              title="退出登录"
              class="fa-solid fa-angles-right"
              _p="x-2px"
              _h="full"
              _flex="~ items-center"
              _bg="[#303030]"
              _hover="filter brightness-110"
              _cursor="pointer"
              @click="logoutHandler"
            />
          </div>

          <!-- 积分点数 -->
          <div _p="y-20px x-15px">
            <div _flex="~ items-center">
              <img _w="15px" _h="15px" src="../assets/img/coin.png" />
              <div
                _m="l-10px"
                _p="x-6px y-2px"
                _bg="white/10"
                _text="white"
                _border="rounded"
              >
                0积分点数
              </div>
            </div>

            <div _m="t-8px" _flex="~ items-center">
              <img _w="15px" _h="15px" src="../assets/img/coin.png" />
              <div
                _m="l-10px"
                _p="x-6px y-2px"
                _bg="white/10"
                _text="white"
                _border="rounded"
              >
                0积分点数
              </div>
            </div>
          </div>

          <!-- 按钮组 -->
          <!-- <div
            _w="full"
            _flex="~ justify-between"
            _p="y-15px x-20px"
            _bg="[#22211d]"
            _text="[#2e2e2e] 20px"
            _border="t [#303030]"
          >
            <div
              v-for="item in [
                'fa-user',
                'fa-bag-shopping',
                'fa-envelope',
                'fa-calendar',
                'fa-gift'
              ]"
              :key="item"
              class="fa-solid"
              :class="item"
              _flex="~ center"
              _w="40px"
              _h="40px"
              _border="rounded-full"
              _bg="[#717171]"
              _transition="duration-300"
              _hover="text-orange-400 text-30px bg-transparent"
              _cursor="pointer"
            />
          </div> -->
        </div>
      </div>

      <!-- 滚动列表 -->
      <div
        _m="t-15px"
        _p="y-10px"
        _h="330px"
        _overflow="y-auto"
        _text="[#727272]"
        _border="1.5px rounded-sm [#303030]"
      >
        <!-- prettier-ignore -->
        <div
          v-for="(item, i) in ([
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' },
            { txt: '主页', icon: 'fa-house' }
          ])"
          :key="item.txt"
          _flex="~ items-center"
          _p="x-15px y-5px"
          _cursor="pointer"
          _transition="duration-300"
          _hover="bg-[#353535] text-white"
          :class="{ 'bg-[#353535] text-white': i === activeCateIndex }"
          @click="activeCateIndex = i"
        >
          <div
            _flex="~ center"
            class="fa-solid"
            :class="item.icon"
            _w="30px"
            _h="30px"
            _bg="[#171717]"
            _text="14px"
            _border="rounded-full"
            _m="r-15px"
          />
          <div>{{ item.txt }}</div>
        </div>
      </div>

      <!-- PLAY -->
      <div
        _flex="~"
        _m="t-auto b-50px"
        _w="full"
        _h="70px"
        _bg="[#4c4d4d]"
        _border="rounded-4px"
        _cursor="pointer"
      >
        <div _flex="1 ~ center" _bg="orange-400" _text="30px">PLAY</div>
        <!-- <div class="fa-solid fa-bars" _flex="~ center" _w="70px" _h="full" _text="30px" /> -->
      </div>
    </div>

    <!-- 右侧 -->
    <div _m="l-20px" _flex="~ col 1" _p="15px">
      <div _w="full" _flex="~ items-center">
        <div
          _flex="~"
          _p="5px"
          _bg=""
          class="bg-gradient-to-r to-transparent from-white/10"
          _border="rounded"
        >
          <div
            v-for="item in [
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' },
              { txt: '主页' }
            ]"
            :key="item.txt"
            _w="100px"
            _h="40px"
            _flex="~ center"
            _cursor="pointer"
          >
            {{ item.txt }}
          </div>
        </div>
        <div _m="l-auto r-50px" _text="16px" _opacity="30">藏海宝藏</div>
      </div>

      <div
        _flex="~ 1 col"
        _p="15px"
        _m="y-20px"
        _bg="[#18191b]"
        _overflow="hidden"
        _text="white/40"
      >
        <div _m="t-15px" _text="20px">
          <div class="fa-solid fa-shop"></div>
          商城
        </div>
        <div _flex="~ 1" _m="t-15px" _overflow="y-auto">
          <div _border="~ black" _w="260px" _p="y-10px">
            <div
              v-for="item in goodsCategory"
              :key="item.txt"
              _flex="~ items-center"
              _p="y-6px x-12px"
              _transition="duration-300"
              _hover="bg-[#616161] text-orange-400"
              :class="{ 'bg-[#616161] text-orange-400': activeGoodsCateId === item.id }"
              _cursor="pointer"
              @click="activeGoodsCateId = item.id"
            >
              <div
                _w="10px"
                _h="10px"
                _m="r-10px"
                _border="rounded-full"
                _bg="[#313131]"
              ></div>
              <div>{{ item.name }}</div>
            </div>
          </div>

          <div _flex="~ 1" _p="x-15px" _text="white/90">
            <div _flex="1" _w="full" _grid="~ cols-3 gap-20px" _overflow="auto">
              <div
                v-for="item in goodsList"
                :key="item.title"
                _bg="[#303030]"
                _border="rounded"
                _flex="~ col items-center"
                _filter="~"
                _transition="duration-300"
                _cursor="pointer"
                _hover="brightness-110"
                @click="goodsClickHandler(item)"
              >
                <div _m="t-15px">{{ item.title }}</div>
                <img
                  _m="y-15px"
                  _w="200px"
                  _h="140px"
                  _object="cover"
                  :src="BASE_URL + item.img"
                />
                <div _m="b-15px" _flex="~ items-center">
                  <img _m="r-5px" _w="15px" _h="15px" src="../assets/img/coin.png" />
                  <div>{{ item.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 登录/注册弹窗 -->
  <q-dialog
    v-model:model-value="isLoginDialogShow"
    @before-hide="isRegisterDialogShow = false"
  >
    <div _text="white" _p="y-20px x-50px" _flex="~ col center" _bg="[#333]">
      <q-form _space="y-20px">
        <q-input dark v-model:model-value="loginForm.account" outlined>
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input dark v-model:model-value="loginForm.password" outlined>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-btn
          v-if="isRegisterDialogShow"
          _w="full"
          color="primary"
          @click="registerHandler"
        >
          注册
        </q-btn>
        <template v-else>
          <q-btn _w="full" color="primary" @click="loginHandler"> 登录 </q-btn>

          <div _flex="~ center">
            <q-checkbox v-model="isRemberLogin" label="记住我的登录" />
          </div>

          <div _flex="~ items-center">
            <div _h="1px" _flex="1" _bg="gray-500" />
            <div _m="x-5px" _text="gray-500">或者您还可以</div>
            <div _h="1px" _flex="1" _bg="gray-500" />
          </div>

          <div _w="full" _flex="~ justify-between">
            <q-btn color="secondary" @click="isRegisterDialogShow = true">转到注册</q-btn>
            <q-btn color="secondary">找回服务</q-btn>
          </div>

          <div _flex="~ center" _text="blue-400" _cursor="pointer">
            <i class="fa-solid fa-phone" _m="r-10px" _text="20px"></i>
            联系在线客服
          </div>
        </template>
      </q-form>
    </div>
  </q-dialog>

  <!-- 商品详情弹窗 -->
  <q-dialog v-model:model-value="isGoodsDetailDialogShow">
    <div _flex="~ col center" _w="300px" _p="y-20px" _bg="gray-700" _text="white">
      <div>{{ activeGoodsDetail?.title }}</div>
      <img _m="t-20px" _w="200px" _h="140px" :src="BASE_URL + activeGoodsDetail?.img" />
      <div _m="t-10px" _w="full" _text="center white/50 12px">
        <div _w="3/4" _m="auto">{{ activeGoodsDetail?.sub_title }}</div>
        <div _m="y-10px">合计消耗</div>
      </div>
      <div _flex="~ items-center">
        <img src="../assets/img/coin.png" _w="15px" _h="15px" _m="r-5px" />
        <div>{{ activeGoodsDetail?.price }}</div>
      </div>

      <div _m="t-10px" _flex="~ justify-center">
        <q-btn _bg="red-600" _m="r-20px">购买</q-btn>
        <q-btn _bg="green-500" @click="isGoodsDetailDialogShow = false">取消</q-btn>
      </div>
    </div>
  </q-dialog>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #555;
}
</style>

