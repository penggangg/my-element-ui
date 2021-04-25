<template>
    <el-radio
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
    </el-radio>
</template>
<script>
export default {
    name: 'ZctRadio'
};
</script>
