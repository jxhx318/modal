'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //与querySelector相比，querySelectorAll会引用多个名称相同的选择器，适合HTML中有多个名称相同的选择器
console.log(btnOpenModal);

//创建add通用组件，点击添加hidden
const closeModal = function () {
  //elem.classList：是一个特殊的对象，它具有 add/remove/toggle 单个类的方法。
  //add:添加方法
  modal.classList.add('hidden'); //在指定的类选择器modal里面添加类选择器hidden
  overlay.classList.add('hidden'); //在指定的类选择器overlay里面添加类选择器hidden
};

//创建remove通用组件，点击删除hidden
const openModal = function () {
  //elem.classList 是一个特殊的对象，它具有 add/remove/toggle 单个类的方法。
  //remove：删除方法
  modal.classList.remove('hidden'); //在指定的类选择器modal里面删除类选择器hidden
  overlay.classList.remove('hidden'); //在指定的类选择器overlay里面删除类选择器hidden
};

for (let i = 0; i < btnOpenModal.length; i++) {
  // console.log(btnOpenModal[i].textContent); //.textContent:返回指定的文本内容
  //'click'：鼠标点击事件
  btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//按ESC键关闭弹窗
//KeyboardEvent.key方法：keydown(按下时触发)、keypress(长按时触发)、keyup(按键松开时触发)
document.addEventListener('keydown', function (event) {
  //这是我写的按下ESC键弹窗消失
  //if判断：当键盘的值等于Escape或者键盘代码等于第27个键时执行判断语句
  // if (event.key === 'Escape' || event.keyCode === 27) {
  //  modal.classList.add('hidden');
  //  overlay.classList.add('hidden');
  // }

  //这是老师写的按下ESC键弹窗消失
  //!modal.classList.contains('hidden'):当modal不包含'hidden'时执行if判断
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
