import Mock from 'mockjs'
import Data from './Mydata'

Mock.mock('/api/loginData','post',Data.loginData)

Mock.mock('/\api\/loginOut','get',Data.loginOut)

