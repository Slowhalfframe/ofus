<template>
  <div class="con">
    <img src="https://user-gold-cdn.xitu.io/2020/1/16/16fae9618257c1e8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="">
    <h3>前言</h3>
    <p>接口调试是每一个软件开发从业者必不可少的一项技能，一个项目的完成必然经过大量的接口测试，实际开发过程中，接口调试的时间不比实际开发所用的时间少。</p>
    <p>作为前端开发人员，我们通常使用 Postman（或 PostWoman 等 ） 工具来进行REST API调用。</p>
    <h3>一、Postman 限制</h3>
    <p>Postman 用来调试接口很方便，但它有很多限制。</p>
    <p>1. 需要开启额外的软件，并且占用大量的 RAM</p>
    <p>我们已经使用 VSCode 开发项目，为什么我们还需要额外打开 Postman 去调试接口喃？并且 Postman 运行占用了大量的 RAM，这对 RAM 紧缺的设备来说，尤为重要。</p>
    <p>2. 高级功能要付费</p>
    <p>进行调用测试 API 是可以的，但是如果你要编辑、版本控制或仅与你的团队共享，则不是很方便。</p>
    <p>当然，你可以使用 Postman 付费版本，但这意味着你需要付费，并且你所在的所有团队都需要使用 Postman ，这工程量就很大了！</p>
    <h3>二、你知道 REST Client 吗？</h3>
    <p>REST Client 是一个 VS Code 扩展插件，它允许你发送 HTTP 请求并直接在 VS Code 上查看响应结果。</p>
    <p>由于它是基于文本格式，所以我们可以轻松的在存储库之间进行版本控制。👍</p>
    <h3> 三、Postman 与 REST Client</h3>
    <p>1. 优点</p>
    <p>能够进行版本化并可以在团队间共享你的 API 调用；</p>
    <p>仅仅是一个 HTTP 文件，团队成员间可以通过 git 协作维护这个文件；</p>
    <p>无需切换窗口，可以在一个 HTTP 文件中去维护多个接口；</p>
    <p>相比于Postman，REST Client支持了 cURL 和 RFC 2616 两种标准来调用REST API；</p>
    <p>2. 缺点</p>
    <p>你必须使用 VS Code，如果使用其它的工具开发是不可以的；</p>
    <p>Postman 拥有强大的用户操作界面，而 REST Client 没有操作界面，仅仅是在一个 HTTP 文件中编写请求，没有 Postman 方便；</p>
    <h3>四、REST Client</h3>
    <p>1. 常规</p>
    <p>步骤一：安装 REST Client 插件</p>
    <p>步骤二： 创建一个 .http 或 .rest 文件</p>
    <p>步骤三：写入测试接口</p>

    <p>符合 RFC 2616 标准的 POST 请求</p>
    <pre>POST http://dummy.restapiexample.com/api/v1/create HTTP/1.1
      content-type: application/json
      {
      "name":"Hendry",
      "salary":"61888",
      "age":"26"
      }
</pre>
    <p>符合 cURL 标准的 POST 请求</p>
    <pre>curl -X POST "http://dummy.restapiexample.com/api/v1/create" -d "Hello World"</pre>
    <p>复制代码如果省略 request 方法，请求将被视为 GET 。</p>
    <p>注意：接口间通过 ### 分隔，同一个 .http 文件里可以涵盖多个 HTTP 请求。不像 Postman，不同的 HTTP 请求需要放在不同的 tab 里。</p>
    <p>步骤四：发送请求，测试接口</p>
    <p>点击 Send Request ，或者右键选择 Send Request ，或者直接用快捷键 Ctrl+Alt+R（或Cmd+Alt+R） ，你的 REST API 就执行了，然后 API Response
      就会显示在右边区域。</p>
  </div>
</template>

<script>
  export default {
    name: "contents"
  }
</script>

<style scoped>
@import "assets/css/app/article/detail/cons.css";
</style>
