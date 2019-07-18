!(function() {
    let code = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')

    let css1 = `/**
 * Hello，你好，欢迎来到这里。
 * 我叫许骁，是一名前端求职者，下面我来自我介绍。
 * 
 * 本站会用动画的形式来逐步展示……嗯，所有内容。
 * 文字太枯燥了，我们来看代码吧。Let's get started!
 */

* {
    transition: all .6s ease-in-out;
}

html {
    background: rgb(63, 82, 99);
}

.token.property, 
.token.selector, 
.token.punctuation, 
.token.function {
    color: white;
    font-weight: normal;
}

#code {
    color: white;
    background: rgb(45, 45, 45);
    overflow: auto;
    border: 1px solid #ccc;
    width: 49%;
    height: 100%;
    padding: 2rem;
    margin: 2rem;
    white-space: pre-wrap;
}

/* 看起来有点单调，我们给code加点色彩 */

.token.selector, .token.keyword {
    color: #cc99cd;
    font-weight: bold;
} 
.token.property {
    color: #f8a837;
} 
.token.function {
    color: #61afef;
}
.token.punctuation {
    color: #ccc;
}

/* 不够动感？来点呼吸效果 */
#code {
    animation: breath 1s infinite alternate-reverse;
}

#code {
    transform: translateX(95%);
    position: absolute;
}

body {
    perspective: 1000px;
}
    
#code {
    transform: translateX(98.5%) rotateY(-10deg);
    transform-origin: right;
    max-height: 94.5%;
}

/** 
 * 那么接下来，就正式开始写我的简历吧
 * 首先，我需要一张白纸
 */
    `

    let css2 = `
#paper {
    background: #ddd;
    width: 48%;
    height: 100%;
    padding: 2rem;
    margin: 2rem;
    position: absolute;
    transform: translateX(-1.5%) rotateY(10deg);
    transform-origin: left;
    max-height: 94.5%;
    white-space: pre-wrap;
    overflow: auto;
}
    `

    let md = `
# 许骁
求职岗位：前端开发
毕业院校：电子科技大学-软件工程

## 技能树
- 熟悉HTML(5)/CSS(3)/JavaScript
- 熟悉Ajax、DOM、HTTP协议
- 熟练使用Vue
- 用过Webpack打包工具
- 有移动端开发经验
- 熟练使用Linux、Git工作流
- 计算机基础知识扎实

## 项目经历
1. [导航狂魔](https://uiao.info/myBookmarks/)
2. [小画板](https://uiao.info/canvas-demo/)
3. [皮卡丘]()
4. [纯CSS八卦](https://uiao.info/YinYang/)
5. [许骁个站](https://uiao.info/)

## 足迹
1. [简书blog](https://www.jianshu.com/u/9e10fddb2bba)
2. [github](https://github.com/Shawn-Nevermore)

## 联系方式
email：uiao.xx@gmail.com uiao.xx@qq.com
wechat：john60155
    `
    let css3 = `
/**
 * markdown写完了，是时候把它转化为HTML了
 */
    `

    // 初尝回调地狱
    writeTo('', css1, () => {
        createPaper(() => {
            writeTo(css1, css2, () => {
                writeMd(md, () => {
                    writeTo(css1 + css2, css3, () => {
                        renderMd(() => {})
                    })
                })
            })
        })
    })

    /************************ Helper ************************************/
    function createPaper(fn) {
        let paper = document.createElement('div')
        paper.id = 'paper'
        let content = document.createElement('pre')
        content.className = 'content'
        paper.appendChild(content)
        code.insertAdjacentElement('afterend', paper)
        fn && fn.call()
    }

    /**
     * 写 CSS 代码到 #code 和 #styleTag 中
     *
     * @param {*} prefix
     * @param {*} cssCode
     * @param {*} fn
     */
    function writeTo(prefix, cssCode, fn) {
        code.innerHTML = prefix || ''
        let n = 0
        let id = setInterval(() => {
            n += 1
            code.innerHTML = Prism.highlight(prefix + cssCode.substring(0, n), Prism.languages.css)
            styleTag.textContent = prefix + cssCode.substring(0, n)
            code.scrollTop = code.scrollHeight
            if (n >= cssCode.length) {
                clearInterval(id)
                fn && fn.call()
            }
        }, 0)
    }

    /**
     * 写 markdown 到 paper 中
     *
     * @param {*} md
     * @param {*} fn
     */
    function writeMd(md, fn) {
        let mdContent = document.querySelector('#paper > .content')
        let n = 0
        let id = setInterval(() => {
            n += 1
            mdContent.innerHTML = md.substring(0, n)
            mdContent.scrollTop = mdContent.scrollHeight
            if (n >= md.length) {
                clearInterval(id)
                fn && fn.call()
            }
        }, 0)
    }

    /**
     * 渲染 markdown 为 HTML
     *
     * @param {*} fn
     */
    function renderMd(fn) {
        // let content = document.querySelector('#paper > .content')
        // content.innerHTML = marked(md)

        let div = document.createElement('div')
        div.className = 'html markdown-body'
        div.innerHTML = marked(md)
        let markdownContainer = document.querySelector('#paper > .content')
        markdownContainer.replaceWith(div)
        fn && fn.call()
    }
})()
