function * generateID(text='randomID') {
    const randomArr = ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az', 'bb', 'bc', 'dd', 'cc', 'ff', 'ef', 'gf', 'hh', 'uu', 'ui', 'qw', 'we', 'rt', 'ty', 'yu', 'iu', 'io', 'op', 'pl', 'pk', 'jk', 'jh', 'fg', 'df', 'fd', 'ss', 'rr', 'gg', 'tt', 'yy', 'uv', 'ii', 'bv', 'nm', 'mn', 'cm', 'cn', 'xc', 'xv', 'xn', 'xb', 'xm', 'zx', 'zc', 'zr', 'zt', 'za', 'zd', 'zf', 'zh', 'zj', 'zz', 'xx', 'vv']
    let index = 100;
    while(true) {
        yield `${text}-${(Math.floor(Math.random() * 1000)) + index++}-${randomArr[Math.floor(Math.random() * randomArr.length)]}`;
    }
}

export default generateID;