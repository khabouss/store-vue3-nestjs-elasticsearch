<template>
  <NavBar/>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  created() {
    let prods = [
        {title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
        ,{title: 'TITILE', description: 'DESCRIPTION', thumbnail: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'}
      ]
    localStorage.setItem('wProducts', JSON.stringify(prods));
  }
}
</script>

<style></style>
