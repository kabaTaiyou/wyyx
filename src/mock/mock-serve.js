import Mock from 'mockjs'
import kingKongModuleData from './m-kingKongModuleData.json'
console.log(kingKongModuleData)

Mock.mock('/home', {code: 0, data: kingKongModuleData})
console.log('mock')