<template>
    <div class="home">
home


{
            "menu_id": 1,
            "menu_name": "体检商品管理",
            "url": "goods",
            "sonmenu": [
                {
                    "menu_id": 2,
                    "menu_name": "体检套餐管理",
                    "url": "compose"
                },
                {
                    "menu_id": 3,
                    "menu_name": "体检项管理",
                    "url": "item"
                }
            ]
        },
        {
            "menu_id": 4,
            "menu_name": "体检信息管理",
            "url": "info",
            "sonmenu": [
                {
                    "menu_id": 5,
                    "menu_name": "预约信息查询",
                    "url": "order"
                },
                {
                    "menu_id": 6,
                    "menu_name": "体检机构管理",
                    "url": "hospital"
                }
            ]
        },
    </div>
</template>

<script>
    export default {
         name: "home-page"
    }
</script>

<style lang="scss" scoped>

</style>