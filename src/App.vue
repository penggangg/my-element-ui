<template>
    <div>
        <zct-button size="small" type="primary">测试按钮1</zct-button>
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            radio: '1'
        };
    },
    methods: {
    },
    created() {
    }
};
</script>
