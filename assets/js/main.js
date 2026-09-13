// 移动端导航菜单切换（导航栏在窄屏下展开/收起）
(function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('open');
  });
})();
