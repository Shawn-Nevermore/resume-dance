var code = document.querySelector('#code')
var styleTag = document.querySelector('#styleTag')

var css = `/**
 * Hello，你好，欢迎来到这里。
 * 我叫许骁，是一名前端求职者，下面我来自我介绍。
 * 
 * 本站会用动画的形式来逐步展示……嗯，所有内容。
 * 文字太枯燥了，我们来看代码吧。Let's get started!
 */

* {
    transition: all 1s ease-in-out;
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
}    

/* 看起来有点单调，我们给code加点色彩 */

#code {
    background: rgb(45, 45, 45);
    overflow: auto;
    border: 1px solid #ccc;
    width: 49%;
    padding: 2rem;
    margin: 2rem;
    white-space: pre-wrap;
  }
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




`



let n = 0
let id = setInterval(() => {
    n += 1
    code.textContent = css.substring(0, n)
    code.innerHTML = Prism.highlight(code.textContent, Prism.languages.css, 'css')
    styleTag.textContent = css.substring(0, n)
    if (n >= css.length) {
        clearInterval(id)
    }
}, 0)