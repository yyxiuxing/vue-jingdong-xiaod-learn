module.exports = {
  configureWebpack: {
    devServer: {
      port: 8089,//端口号
      open: false,//自动打开1浏览器
      //mock数据
      before(app) {
        //注册接口
        //用户信息池
        let userpoor = [
          { username: 'xiaod', password: '1123456' },
          { username: 'tim', password: '123456' },
        ]
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userlength = userpoor.filter(v => v.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        //登陆接口
        let tokenkey = 'xdclass'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if (username == 'xiaod' && password == '1123456' || username == 'tim' && password == '123456') {
            res.json({
              code: 0,
              message: '登陆成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })
        //首页轮播图接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [
              {
                url: "https://m.xdclass.net/",
                image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png"
              },
              {
                url: "https://m.xdclass.net/",
                image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/jvm.png"
              },
              {
                url: "https://m.xdclass.net/",
                image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/jvm.png"
              }
            ]
          })
        })
        //滚动分类接口
        app.get('/api/rollinglist', (req,res) => {
          res.json({
            data: [
              [
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类1'
                },
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类2'
                },
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类3'
                },
              ], [
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类1'
                },
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类2'
                },
                {
                  url: "https://m.xdclass.net/",
                  image: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png",
                  label: '分类3'
                }
              ]

            ]
          })
        })
        //分类页接口
        app.get('/api/classify', (req,res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png',
                    label: '电磁炉'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png',
                    label: '路由器'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png',
                    label: '口红'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png',
                    label: '吹风机'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png',
                    label: '三只松鼠'
                  }
                ]
              })
              break;
            case '1':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },

                ]
              })
              break;
            case '2':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png',
                    label: '电磁炉'
                  }
                ]
              })
              break;
          }
        })

      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
