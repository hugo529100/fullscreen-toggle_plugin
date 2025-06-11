'use strict'; {
  function toggleFullscreen() {
    const el = document.documentElement
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(err => HFS.toast("Enter fullscreen failed: " + err, 'error'))
    } else {
      document.exitFullscreen?.()
    }
  }

  // 加入 options menu
  HFS.onEvent('appendMenuBar', () => {
    return HFS.h(HFS.Btn, {
      icon: '⛶',
      tooltip: 'Toggle Fullscreen',
      onClick: toggleFullscreen
    })
  })

  // 插入到 preview 右上角
  const interval = setInterval(() => {
    const controls = document.querySelector('.file-show .bar .controls')
    const closeBtn = controls?.querySelector('button[title="Close"]')
    const exists = controls?.querySelector('.fullscreen-toggle')

    if (controls && closeBtn && !exists) {
      const btn = document.createElement('button')
      btn.className = 'fullscreen-toggle icon-button'
      btn.title = 'Toggle Fullscreen'
      btn.innerHTML = '<span aria-hidden="true">⛶</span>'

      btn.onclick = toggleFullscreen

      controls.insertBefore(btn, closeBtn)
    }
  }, 500)
}
