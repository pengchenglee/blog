<template>
  <div id="app">
  <header id="head" >
      <div class="roller">
          <i class="fa fa-lg fa-bars" id="Navigation"></i>
          <div class="header-title">
              <a href="" class="writing">Tranquilpeak Hexo theme demo</a>
          </div>
          <a href="" class="header-right"><img src="./img/IMG_0978.jpg" alt="" class="picture"></a>
      </div>

      <nav class="hide clear">
          <section>
              <header class="head">
                  <a href=""><img src="./img/IMG_0978.jpg" alt=""></a>
                  <div class="list clear">
                      <ul class="slider-icon">
                          <li>
                              <router-link :to="{path: '/index'}">
                                  <i class="fa fa-home" aria-hidden="true"></i>
                                  <span>Home</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/detail'}">
                                  <i class="fa fa-bookmark" aria-hidden="true"></i>
                                  <span>Categories</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/tags'}">
                                  <i class="fa fa-tags" aria-hidden="true"></i>
                                  <span>Tags</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/'}">
                                  <i class="fa fa-archive" aria-hidden="true"></i>
                                  <span>Archives</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/detail'}">
                                  <i class="fa fa-search" aria-hidden="true"></i>
                                  <span>Search</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/tags'}">
                                  <i class="fa fa-question" aria-hidden="true"></i>
                                  <span>About</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/index'}">
                                  <i class="fa fa-rss" aria-hidden="true"></i>
                                  <span>RSS</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/tags'}">
                                  <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                                  <span>Stack Overflow</span>
                              </router-link>
                          </li>
                          <li>
                              <router-link :to="{path: '/index'}">
                                  <i class="fa fa-github" aria-hidden="true"></i>
                                  <span>Github</span>
                              </router-link>
                          </li>
                      </ul>
                  </div>
              </header>
          </section>
      </nav>
  </header>
  <nav class="nav clear">
      <section>
          <header class="head">
              <router-link :to="{path: '/index'}"><img src="./img/IMG_0978.jpg" alt=""></router-link>
              <h4>李鹏城</h4>
              <p>BeiJing</p>
              <p>WEB前端攻城师</p>
              <p>1370875934@qq.com</p>
              <div class="list clear">
                  <ul class="slider-icon">
                      <li>
                          <router-link :to="{path: '/index'}">
                              <i class="fa fa-home" aria-hidden="true"></i>
                              <span>Home</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/detail'}">
                              <i class="fa fa-bookmark" aria-hidden="true"></i>
                              <span>Categories</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/tags'}">
                              <i class="fa fa-tags" aria-hidden="true"></i>
                              <span>Tags</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/'}">
                              <i class="fa fa-archive" aria-hidden="true"></i>
                              <span>Archives</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/detail'}">
                              <i class="fa fa-search" aria-hidden="true"></i>
                              <span>Search</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/tags'}">
                              <i class="fa fa-question" aria-hidden="true"></i>
                              <span>About</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/index'}">
                              <i class="fa fa-rss" aria-hidden="true"></i>
                              <span>RSS</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link :to="{path: '/tags'}">
                              <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                              <span>Stack Overflow</span>
                          </router-link>
                      </li>
                      <li>
                          <a href="https://github.com/pengchenglee" target="_blank">
                              <i class="fa fa-github" aria-hidden="true"></i>
                              <span>Github</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </header>
      </section>
  </nav>
    <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">

</style>
