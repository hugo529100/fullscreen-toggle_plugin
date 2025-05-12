'use strict'; {
  function toggleFullscreen() {
    const el = document.documentElement
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(err => HFS.toast("Enter fullscreen failed: " + err, 'error'))
    } else {
      document.exitFullscreen?.()
    }
  }

  HFS.onEvent('appendMenuBar', () => {
    return HFS.h(HFS.Btn, {
      icon: '⛶',
      tooltip: 'Toggle Fullscreen',
      onClick: toggleFullscreen
    })
  })
}
