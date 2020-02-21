<template>
    <div class="container">
      <el-input placeholder="请输入文章标题" v-model="Form.title"></el-input>
      <mavon-editor ref="md" @save="save" @imgAdd="imgAdd" @imgDel="imgDel" v-model="Form.contentMarkdown" :codeStyle="markdown.codeStyle" :toolbars="markdown.toolbars" />
      <div class="submit">
        <el-button type="primary" @click="submitForm()">发布文章</el-button>
        <span @click="goBack()" style="cursor: pointer">返回上一页</span>
      </div>

      <el-dialog title="给这篇文章一个家" :visible.sync="dialogVisible" width="30%">
        <el-select v-model="Form.types" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="release()">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="caogaoDialog">
        <span>是否打开草稿: 《 {{caogao.title}} 》</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="caogaoDialog = false">不打开</el-button>
          <el-button @click="clearDraft()" type="danger">清除草稿</el-button>
          <el-button type="primary" @click="openCaogao()">打开草稿</el-button>
        </span>
      </el-dialog>

    </div>
</template>

<script>
import axios from '@/api/axios';
import host from "../../plugins/host";

    export default {
        name: "write",
        layout: 'noNav',
      data(){
          return{
            caogao:{title: ''},
            caogaoDialog: false,
            host: host,
            options: [{
              value: '选项1',
              label: '黄金糕'
            },{
              value: '选项5',
              label: '北京烤鸭'
            }],
            dialogVisible: false,
            markdown:{
              codeStyle:'atom-one-dark',
              toolbars:{
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格

                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: false, // 预览
              }
            },
            Form:{
              title: '',
              contentMarkdown: '',
              types: '',
            }
          }
      },
      methods:{
        goBack(){
          history.go(-1)
        },
        openCaogao(){
          if(localStorage.getItem('draft')){
            let draft = JSON.parse(localStorage.getItem('draft'));
            this.Form.title = draft.title;
            this.Form.contentMarkdown = draft.contentMarkdown;
            this.Form.types = draft.types;
            this.caogaoDialog = false;
          }else{
            this.$message.error("打开草稿出现点问题");
             this.caogaoDialog = false;
          }
        },
        clearDraft(){
          if(localStorage.getItem('draft')){
            localStorage.removeItem('draft');
            this.caogaoDialog = false;
          }
        },
        // 完成内容编辑
        submitForm(){
          let title = this.Form.title;
          let content = this.Form.contentMarkdown;
          if(title != '' && content != ''){
            this.dialogVisible = true;
          }else{
            this.$message.error("请填写文章标题和内容")
          }
        },
        // 发布
        release(){
          if(this.Form.types != ''){
            console.log(this.Form)
            this.dialogVisible = false;
          }else{
            this.$message.error("请选择文章分类")
          }
        },
        save(){  //保存文章内容
          console.log(this.Form)
          if(this.Form.title != '' || this.Form.contentMarkdown != '' || this.Form.types != ''){
            let saveLocal = {};
            saveLocal['title'] = this.Form.title;
            saveLocal['contentMarkdown'] = this.Form.contentMarkdown;
            saveLocal['types'] = this.Form.types;
            localStorage.setItem("draft", JSON.stringify(saveLocal))
            this.$message.success("保存草稿成功~")
          }else{
            this.$message.warning("内容为空哦~")
          }

          // saveMarkdownArticle(this.markdownForm).then(r => {
          //   this.$message.success("保存成功")
          //   this.markdownForm.articleId=r.data.articleId
          //   this.lastSaveTime=new Date()
          // }).catch(e => {
          //   console.log(e)
          // })
        },
        imgAdd(pos, file){ //添加图片，pos为位置
          // let markdownImg = {};
          let $vm=this.$refs.md;
          // markdownImg.file=file.miniurl  //获取图片base64内容
          // markdownImg.type=file.type;
          let markdownImg = new FormData();
          markdownImg.append("image", file);
          console.log(markdownImg)
          axios.post('/upload_img', markdownImg).then(response => {
            if(response.data.code == 0){
              console.log(response.data);
              $vm.$img2Url(pos, host + '/public' + response.data.data.file_path)
            }
          }).catch(e => {
            console.log(e)
          })
        },
        imgDel(pos,url) { //删除图片，并不是修改就会触发，仅支持工具栏操作
          console.log(pos)
          console.log(url)
        },
      },
      mounted() {
          if(localStorage.getItem("draft")){
            let draft = JSON.parse(localStorage.getItem("draft"));
            this.caogaoDialog = true;
            this.caogao.title = draft.title;
          }
      }
    }
</script>

<style scoped>
  .el-input >>> .el-input__inner{
    height: 60px;
  }
  .el-input >>> .el-input__inner::-webkit-input-placeholder{
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 5px;
  }
  .v-note-wrapper{
    height: 80vh;
  }
  .submit{
    width: 200px;
    /*height: 50px;*/
    /*background-color: #aaa;*/
    margin: 20px auto;
    text-align: center;
  }
  .submit >>> .el-button{
    width: 200px;
    margin-bottom: 20px;
  }
</style>
