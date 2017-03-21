<template>
    <div class="detail">
        <div class="main">
            <article class="title">
                <div class="title-header">
                    <h1>JS中this的常见用法</h1>
                    <div class="times">
                        <time>March 5, 2017 in</time>
                        <span>in</span>
                        <a href="">Beijing, </a>
                        <a href="">Changping District</a>
                    </div>
                </div>
                <div class="title-content">
                    <div class="title-header">
                        <p>Here are some of the common this usage.</p>
                        <p style="font-size: 16px">1)、this的第一种用法： 事件绑定函数中的this就是事件被触发的时候那个元素,其实也就是绑定给谁this就是谁<br>
                            2)、this的第二种用法: 函数中的this是谁，在定义的时候根本就不知道。在函数执行的时候，函数中的this(函数中)就是调用这个函数的行为主体,其实就是看函数前面的"."，"."前面是谁那么函数中的this就是谁。如果没有"."那么this就是window<br>
                            3)、 this的第三种用法：自运行函数中的this永远是window<br>
                            4)、this的第四种用法：构造函数中的this是当前实例<br>
                            5)、this的第五种用法：call和apply都可以强制改变this<br>
                            6)、this的第六种用法：定时器中的this都是window<br>
                            7)、this的第七种用法：回调函数中的this一般也都是window<br>
                        </p>
                        <p>以上就是js经常碰到的this问题。</p>
                        <blockquote>
                            <p>this是面向对象语言中的一个重要概念，在JAVA,C#等大型语言中，this固定指向运行时的当前对象。但是在javascript中，由于 javascript的动态性（解释执行，当然也有简单的预编译过程），this的指向在运行时才确定。这个特性在给我们带来迷惑的同时也带来了编程上的 自由和灵活，结合apply(call)方法，可以使JS变得异常强大。</p>
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
                                <a href="http://localhost:8080/#/detail" class="btn">
                                    <i class="fa fa-angle-left"></i>
                                    <span>PREVIOUS</span>
                                </a>
                            </li>
                            <li class="btn-list-li">
                                <a href="http://localhost:8080/#/detail1" class="btn">
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