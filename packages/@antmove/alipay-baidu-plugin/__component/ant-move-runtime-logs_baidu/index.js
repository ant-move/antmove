Page(
  {
    data: {
      show: [],
      title: 'warn',
      logNum: [],
      pathNum: 0,
      inpWidth: 180,
    },
    delete() {
      swan.clearStorageSync({
        key: '__antmove_loginfo',
      })

      swan.clearStorageSync({
        key: '_pageMsg',
      })

      this.getStorage()
    },
    allShow(event) {
      const _dataset = {
        path: '',
        logNum: '',
        logs: '',
      }
      _dataset.logNum = event.target.dataset.logNum
      _dataset.path = event.target.dataset.path
      _dataset.logs = JSON.stringify(event.target.dataset.logs)
                  
      swan.navigateTo({
        url: `specific/index?path=${_dataset.path}&logs=${_dataset.logs}&logNum=${_dataset.logNum}`,
      })
    },

    onLoad() {
      this.getStorage()
    },

    getStorage() {
      let arr = []
      const res = swan.getStorageSync({ key: '__antmove_loginfo' })
      if (res.data) {
        arr = res.data.pages
      }
      this.setData({
        pathNum: arr.length,
      })
      for (let i = 0; i < arr.length; i++) {
        let _i = arr[i].logs.length
        arr[i].logNum = _i
        _i = null
      }
      this.setData({
        show: arr,
      })
    },
  },
  'Page',
)
