<template>
  <div class="foot" id="footer">
    <ul class="links ft">
      <li class="links_item no_extra"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
      <li class="links_item"><a href="/cgi-bin/readtemplate?t=home/agreement_tmpl&amp;type=info&amp;lang=zh_CN&amp;token=" target="_blank">服务协议</a></li>
      <li class="links_item"><a href="/cgi-bin/readtemplate?t=business/faq_operation_tmpl&amp;type=info&amp;lang=zh_CN&amp;token=" target="_blank">运营规范</a></li>
      <li class="links_item"><a href="/cgi-bin/opshowpage?action=dispelinfo&amp;lang=zh_CN&amp;begin=1&amp;count=9" target="_blank">辟谣中心</a></li>
      <li class="links_item"><a href="http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html" target="_blank">客服中心</a></li>
      <li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
      <li class="links_item"><a href="/acct/infringementlogin?action=getkey&amp;lang=zh_CN" target="_blank">侵权投诉</a></li>
      <li class="links_item"><p class="copyright">Copyright © 2012-2016 Tencent. All Rights Reserved.</p> </li>
    </ul>
  </div>
</template>

<style scoped>
  .foot {
    /*padding: 24px 0;*/
    padding: 30px 0;
    /*margin-top: 70px;*/
    margin-top: 88px;
    color: #f1f1f1;
    text-align: center;
    background-color: #b8b9b9;
  }

  .links_item {
    display: inline-block;
    vertical-align: middle;
    padding: 0 1em;
    line-height: 1em;
    border-left: 1px solid #d9dadc;
  }
  .ft .links_item {
    border-left-color: #f1f1f1;
  }
  .ft.links {
    font-size: 12px;
  }
  .links_item.no_extra {
    border-left-width: 0;
  }
  .links_item:first-child {
    border-left-width: 0;
  }

  .links_item a {
    display: block;
    color: #797979;
  }
  .ft .links_item a {
    color: #f1f1f1;
  }
</style>
