<template>
    <div class="detail">
        <div class="main">
            <article class="title">
                <div class="title-header">
                    <h1>HTML5新增的语义化标签（结构标签），表单种类，表单属性，全局属性</h1>
                    <div class="times">
                        <time>March 5, 2017 in</time>
                        <span>in</span>
                        <a href="">Beijing, </a>
                        <a href="">Changping District</a>
                    </div>
                </div>
                <div class="title-content">
                    <div class="title-header">
                        <p>The following is a new label type.</p>
                        <p style="font-size: 16px">
                            语义化标签：用合理的标签做合理的事情<br>
                            section 一块区域<br>
                            header 页面或者区域的头部部分<br>
                            footer 页面或者区域的尾部部分<br>
                            article 完整的独立的区域 （强调独立性），一般情况下，表示文章部分<br>
                            nav    导航（习惯性用在主导航）<br>
                            aside  主体内容的辅助信息,表示无关内容,去掉与否对主体内容不会产生影响<br>
                            figure 配图区域<br>
                            figcaption 图题 （对图片的描述）<br>
                            main 主体部分<br>

                            IE浏览器条件注释<br>
                            lt 小于<br>
                            gt 大于<br>
                            lte 小于等于<br>
                            gte 大于等于<br>

                            表单种类<br>
                            search  键盘右下脚按钮从向右箭头变成搜索两个字<br>
                            tel 手机号码 数字键盘<br>
                            url  url地址<br>
                            email 邮箱地址<br>
                            number 数字输入框<br>
                            range 数值选择器 通过滑动来改变数值并且可以设置数值的范围<br>
                            color 颜色数值器<br>
                            datetime-local 日期和时间（本地时间）<br>
                            time 时间<br>
                            month 日期选择到月<br>
                            week  日期选择到周<br>

                            表单属性<br>
                            autocomplete 是否保存用户输入信息 on保存，off不保存 autocomplete<br>
                            autofocus 光标自动聚焦 autofocus<br>
                            placeholder 在输入前提示用户输入信息 placeholder<br>
                            required 必须输入内容 required<br>
                            form 保证表单元素可以放在任何位置 form<br>
                            formnovalidate  设置在submit类型的按钮上 不用验证直接可提交  formnovalidate<br>
                            novalidate 设置上form标签上 不用验证直接可提交 novalidate<br>
                            pattern 通过正则设置验证规则 pattern<br>
                            setCustomValidity() 可以更改系统自带的提示信息  setCustomValidity<br>
                        </p>
                        <p>以上就是html5新增的标签。</p>
                        <blockquote>
                            <p> HTML5出来这么久，都没有真正的理解和花时间去看，经常看到一些网页的里面包含很多陌生的标签元素，一直不清楚是什么功能。像article、aside。 其实这两个标签和div的功能一样仅仅是一个块级元素没有任何的样式和功能事件上的特点完全可以理解为div，。但是HTML5为什么要增加这些看似“毫无作用”标签呢。<br>
                                <br>我们知道经这么长时间的发展，HTML5的应用已经普及了。从使用的特点上来看，HTML5相对以前版本来看给人的感觉就是更加人性化。按照以往的页面布局习惯是div id="article"代表内容模块，div id="aside"代表边栏模块，通过这种方式来区分每个div的区块部分。HTML5就不一样了，一改以往布局习惯换成article、aside这些更加语义化的标签。所以说H5增加了这些标签最大的作用就是语义化，便于读取和识辨。因此也更加适合做SEO，容易快速准确的被爬虫读取，就像head和 titile 这样的标签元素一样。同时一些移动设备在解析到这些标签的时候做出特殊提示或者更加人性化的展示 等等。</p>
                            <p>
                                <em>Details please Baidu
                                    <a href="http://www.baidu.com" target="_blank">www.baidu.com</a>
                                </em>
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div class="title-footer">
                    <div class="footer-tags">
                        <span>TAGGED IN</span>
                        <br>
                        <a href="" class="tag">chinese</a>
                    </div>
                    <div class="footer-btn">
                        <ul class="btn-list">
                            <li class="btn-list-li">
                                <a href="" class="btn">
                                    <i class="fa fa-angle-left"></i>
                                    <span>PREVIOUS</span>
                                </a>
                            </li>
                            <li class="btn-list-li">
                                <a href="" class="btn">
                                    <span>NEXT</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                        <ul class="btn-sign">
                            <li class="btn-sign-li">
                                <a href="" class="btn">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li class="btn-sign-li">
                                <a href="" class="btn">
                                    <i class="fa fa-facebook-official"></i>
                                </a>
                            </li>
                            <li class="btn-sign-li">
                                <a href="" class="btn">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li class="btn-sign-li">
                                <a href="" class="btn">
                                    <i class="fa fa-list"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <footer class="footer">
                <span>Copyrights © 2017 Louis 李鹏城. All Rights Reserved.</span>
            </footer>
        </div>
    </div>
</template>