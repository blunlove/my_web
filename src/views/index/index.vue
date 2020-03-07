<template>
  <al-content-box title="bilibili图床" background="tomato">
    <div class="index">
      <div class="index-file">
        <el-upload
          drag
          multiple
          ref="upload"
          action="https://api.vc.bilibili.com/api/v1/drawImage/upload"
          accept="image/*,gif,jpg,jpeg,bmp,png"
          class="upload-demo"
          name="file_up"
          :data="{
            category: 'daily',
            biz: 'draw'
          }"
          :before-upload="beforeUpload"
          :file-list="fileList">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="button inline" slot="tip">
            <el-button @click="() => this.$refs.editCookie.openFrame()">编辑cookie</el-button>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <edit-cookie ref="editCookie"></edit-cookie>
    </div>
  </al-content-box>
</template>

<script>
import editCookie from './editCookie';
import {getLocalStorageItem, setCookiesItem} from '@/utils';
export default {
  name: 'index',
  components: {
    editCookie
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      let data = getLocalStorageItem('bilibili') || {};
      if (!['.gif', '.jpg', '.jpeg', '.bmp', '.png'].some(type => file.name.endsWith(type))) {
        this.$message.error('图片格式错误');
        return false;
      } else if (!data.SESSDATA) {
        this.$message.error('b站SESSDATA未填写');
        return false;
      } else {
        setCookiesItem('SESSDATA', data.SESSDATA);
      }
    },
    uploadSuccess(res, file){
      if (res.message === 'success') {
        console.log(res.data);
        // const link = res.data.image_url.replace('http', 'https')
        // this.links[0].value = link
        // this.links[1].value = `![](${link})`
        // const img = document.querySelector('#img')
        // const markdown = document.querySelector('#markdown')
        // img.value = this.links[0].value
        // markdown.value = this.links[1].value
        // this.copyToClipboard(img.value)
        // Idb(db_img_config).then(img_db=>{
        //   img_db.insert({
        //     tableName: "img",
        //     data: {
        //       name: file.name,
        //       url: link,
        //       width: res.data.image_width,
        //       height: res.data.image_height,
        //       date: Date.now()
        //     },
        //     success: () => console.log("添加成功")
        //   });
        // })
      } else {
        this.$message('上传失败:' + res.message,'error')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  .button {
    margin-left: 10px;
    vertical-align: top;
  }
  &-upload {}
}
</style>