/*
Zap Slideout - Vue Component

This is our component definition. It tells Vue to look for our template, which is the little snippet of HTML that will be used for our component. Every time we use our component in HTML as <zap-slideout>, this template gets plopped into our page, which makes it reusable without pasting it everywhere! */

Vue.component('zap-slideout', 
{
  template: '#zap-slideout',
  data: () => 
  ({
    openerText: 'MenuOpen',
    isOpen: false,
    blean:true,
    mytext:
    [
      {isopen:true,title:'简介'},
      {isopen:false,title:'成都'},
      {isopen:false,title:'学习'},
      {isopen:false,title:'尝试'},
      {isopen:false,title:'结语'}
    ],
  }),
  methods: 
  {
    open() {
      this.openerText = 'MenuClose';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'MenuOpen';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) 
        this.close();
      else 
        this.open();      
    } ,
    myclick(x)
    {
      this.textclose();
      x.isopen=!x.isopen;        
    } ,    
    textclose(){
      for(var i=0;i < this.mytext.length;++i)
        this.mytext[i].isopen=false;
    }

    /*新发现,貌似vue里面方法不能重载*/ 

  },
 });
  
  Vue.component('introduction',{
    template:"<p>黄，01年湖北生人，爱好不广泛，在该暑假生活经历过于充实，以展现其部分学习成果，故做此页，意在练习。为保护隐私，本网址中所有现实图片均做打码处理，黄深感意趣未尽，故附其友人就其原有动漫头像之重新绘制版一份，图案风格古拙质朴，造型可爱，颇有近代漫画家丰子恺先生蕴，黄深爱之。并恭赋拜访者本人楚辞习作：</p><br/><br/>暑假真好玩<br/>作者:黄<br/>好玩兮暑假,暑假真好玩<br/>好累兮暑假,暑假真好累<br/>后面不会写了兮兮兮兮兮:)<br/><img class=divcss5 src='./testpic2.jpg' alt='Zap Emoji' />"
})
Vue.component('tourinchengdu',{
    template:"<p>我在四川和我的朋友们一起玩，很开心。<br/>缺点是天天不是吃串串就是吃火锅,起不来就吃肯德基的旅行有点枯燥<br/><img  src='./testpic1.jpg' alt='Zap Emoji' /><img  src='./testpic3.jpg' alt='Zap Emoji' /></p>"
})
Vue.component('studyallsummer',{
    template:"<p>我学了几乎整个暑假!好累,每个工作日下午1点半到5点半学外语。对于学校的短学期项目按老师要求看了好多视频,下了好多文件,也在网上阅读了很多参考资料</p>"
})
Vue.component('firsttime',{
  template:"<p>第一次烫头，哇好贵。<br/>第一次清灰，哇好脏。<br/>自己把电源线针脚弄弯又弄正，不被奸商坑钱wohoo！<br/>第一次接触网页制作的小练习，哇好厉害。</p>"
})
Vue.component('epilog',{
    template:'👋谢谢你的到来!<br/>祝您身体健康万事如意!<br/><br/>如果您有任何过激质疑随时欢迎在<a href="https://www.baidu.com">这里</a>向我提出,其它内容敬请发送至本人邮箱,谢! :)'
})


let app = new Vue({
  el: 'body' 
});