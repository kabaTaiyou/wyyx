import Mock from 'mockjs'
import leftList from './left.json'
import kingKongModuleData from './m-kingKongModuleData.json'
import rightData from './rightData.json'
import bannerImg from './banner.json'
import six from './firstView.json'
console.log(kingKongModuleData)
console.log(leftList.cateList[0].subCateList,'left')

Mock.mock('/', {code: 0, data: kingKongModuleData,six:six})
Mock.mock('/item',{code:0,data:leftList.cateList[0].subCateList})
Mock.mock('/item/detial',{code:0, data:rightData,bannerImg})
console.log('rightData',rightData)
// console.log('mock')