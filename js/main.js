var code = document.querySelector('#code')
var styleTag = document.querySelector('#styleTag')

var css = `/**
 * Hello，你好，欢迎来到这里。
 * 我叫许骁，是一名前端求职者，下面我来自我介绍。
 * 文字太枯燥了，我们来看代码吧。Let's get started!
 */

/**
 * 本站会用动画的形式来逐步展示……嗯，所有内容。
 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 1s ease-in-out;
}

#code {
    background: rgb(45, 45, 45);
    color: #ffffc8;
    border: 2px solid #ddd;
    padding: 2em;
}

/**
 * 看起来有点单调，我们给code加点色彩
 */





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
}, 10)