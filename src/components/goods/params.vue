<template>
  <div>
    <el-card>
      <el-alert
        title="警告提示的文案"
        type="warning"
        show-icon>
      </el-alert>
      <el-row class="cat_opt">
        <el-col>
          <span>请选择商品分类: </span>
          <el-cascader
            v-model="categoryId"
            :options="categories"
            :props="categoryProps"
            @change="categoryChange"
          ></el-cascader>
        </el-col>

      </el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="静态属性" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'params',
    data () {
      return {
        categoryId: '',
        categories: [],
        categoryProps: {
          value: 'cat_id',
          label: 'cat_name',
          children: 'children'
        },
        //当前选中标签页的名称
        activeName: 'first'
      }
    },
    methods: {
      //处理标签页的切换事件
      handleClick (tab, event) {
        console.log(tab.name)
      },
      categoryChange (v) {
        //v和v-model="categoryId"绑定的值一样
        console.log(v)
      },
      getCategories () {
        this.axios.get('/categories').then(res => {
          this.categories = res.data.data
        })
      }
    },
    created () {
      this.getCategories()
    }
  }
</script>

<style lang="less" scoped>
  .cat_opt {
    margin-top: 10px;
  }
</style>
