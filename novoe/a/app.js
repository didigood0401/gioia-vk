(function () {
  var V = document.body.dataset.v;
  var I = [
    ['zakaz', 'Как оформить заказ', function () { return step([['Выберите', 'украшение в разделе «Товары»'], ['Напишите', 'нам или добавьте украшение в корзину'], ['Уточним', 'наличие, доставку и итоговую сумму'], ['Оплатите', 'заказ, и мы бережно его упакуем']]) + '<p class="pl">Если хочется совета, напишите в сообщество. Татьяна поможет подобрать украшение под Ваш образ или повод.</p>'; }, 'Написать в сообщения'],
    ['dostavka', 'Доставка / оплата', function () { return '<p class="big">Как <em>приедет</em> Ваше украшение</p>' + step([['Доставка', 'способы, сроки и стоимость - Ваши условия'], ['Оплата', 'принятые способы оплаты - Ваши условия'], ['Упаковка', 'как украшение упаковывается в подарок']]) + '<p class="pl">Здесь будет точный текст по Вашим условиям.</p>'; }, 'Уточнить доставку'],
    ['otzyvy', 'Отзывы', function () { return '<p class="rate" style="margin-top:14px">5,0</p><p>42 отзыва в сообществе VK</p><p class="big">Настоящие слова <em>покупательниц</em></p><p class="pl">В этом разделе будут Ваши реальные отзывы с фото украшений.</p>'; }, 'Смотреть отзывы'],
    ['o-gioia', 'O Gioia', function () { return '<p class="big">Близко к телу.<br><em>Близко к себе.</em></p><p>GIOIA - камерные украшения ручной работы от дизайнера Татьяны Барониной. Авторская бижутерия для женщин, которые выбирают детали под событие, образ и настроение.</p><p style="margin-top:9px">Жемчуг, натуральные камни, выразительные формы. Украшения, с которыми привычный образ звучит по-новому, а подарок становится личным.</p><p class="sign"><b>Татьяна Баронина</b>Дизайнер украшений GIOIA, Москва</p>'; }, 'Смотреть каталог'],
    ['uhod', 'Уход за украшениями', function () { return step([['Последним', 'надевайте украшение после парфюма и крема'], ['Снимайте', 'перед душем, бассейном и сном'], ['Протирайте', 'мягкой сухой тканью после носки'], ['Храните', 'отдельно, в мешочке или футляре']]) + '<p class="pl">Жемчуг любит мягкую ткань и не любит парфюм напрямую.</p>'; }, 'Задать вопрос']
  ];
  function step(a) { return a.map(function (s, i) { return '<div class="row"><b>' + (i + 1) + '</b><span><strong>' + s[0] + '</strong> ' + s[1] + '</span></div>'; }).join(''); }
  var $ = function (i) { return document.getElementById(i); };
  var sh = $('sh'), ph = $('ph');
  function open(n, e) {
    var a = I[n], pr = ph.getBoundingClientRect();
    if (e && e.clientX) { sh.style.setProperty('--ox', (e.clientX - pr.left) + 'px'); sh.style.setProperty('--oy', (e.clientY - pr.top) + 'px'); }
    $('shI').src = '../a/' + a[0] + '.jpg'; $('shT').textContent = a[1]; $('shB').innerHTML = a[2](); $('shB').scrollTop = 0; $('shC').textContent = a[3];
    sh.classList.add('on'); sh.setAttribute('aria-hidden', 'false');
  }
  I.forEach(function (a, n) {
    var b = document.createElement('button'); b.className = 'tl'; b.type = 'button'; b.setAttribute('aria-label', a[1]);
    b.innerHTML = '<img src="../a/' + a[0] + '.jpg" alt="' + a[1] + '">'; b.onclick = function (e) { open(n, e); }; $('strip').appendChild(b);
    var im = new Image(); im.src = '../a/' + a[0] + '.jpg'; im.alt = a[1]; $('tls').appendChild(im);
  });
  $('x').onclick = function () { sh.classList.remove('on'); sh.setAttribute('aria-hidden', 'true'); };
  var cmp = $('cmp'); $('rg').oninput = function () { cmp.style.setProperty('--p', this.value + '%'); };
  window.__g = { open: open };
})();
