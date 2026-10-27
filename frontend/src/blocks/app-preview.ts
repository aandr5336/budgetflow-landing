import './app-preview.css'

export type AppPreviewVariant = 'dashboard' | 'transactions'

export function appPreview(variant: AppPreviewVariant = 'dashboard'): string {
  if (variant === 'transactions') {
    return `
      <div class="app-preview app-preview--wide" aria-hidden="true">
        <div class="app-preview__bar">
          <span></span><span></span><span></span>
          <em>Транзакції · жовтень</em>
        </div>
        <div class="app-preview__filters">
          <div class="app-preview__chip">Пошук: нотатка або категорія…</div>
          <div class="app-preview__chip">Тип: усі</div>
          <div class="app-preview__chip">Категорія: усі</div>
        </div>
        <div class="app-preview__rows app-preview__rows--dense">
          <div><i class="c2"></i><span>20.10 · Зарплата</span><b class="inc">+ ₴ 42 000</b></div>
          <div><i></i><span>19.10 · Продукти</span><b>− ₴ 1 280</b></div>
          <div><i class="c3"></i><span>18.10 · Метро</span><b>− ₴ 48</b></div>
          <div><i class="c4"></i><span>17.10 · Кав’ярня</span><b>− ₴ 165</b></div>
          <div><i class="c2"></i><span>15.10 · Фріланс</span><b class="inc">+ ₴ 6 500</b></div>
          <div><i></i><span>14.10 · Житло</span><b>− ₴ 8 900</b></div>
        </div>
      </div>
    `
  }

  return `
    <div class="app-preview app-preview--hero" aria-hidden="true">
      <div class="app-preview__bar">
        <span></span><span></span><span></span>
        <em>Дашборд · жовтень</em>
      </div>
      <div class="app-preview__balance">
        <small>Баланс місяця</small>
        <strong>+ ₴ 12 450</strong>
        <div class="app-preview__split">
          <span class="up">Дохід ₴ 42 000</span>
          <span class="down">Витрати ₴ 29 550</span>
        </div>
      </div>
      <div class="app-preview__rows">
        <div><i></i><span>Продукти</span><b>− ₴ 3 200</b></div>
        <div><i class="c2"></i><span>Зарплата</span><b class="inc">+ ₴ 42 000</b></div>
        <div><i class="c3"></i><span>Транспорт</span><b>− ₴ 1 180</b></div>
        <div><i class="c4"></i><span>Кав’ярня</span><b>− ₴ 420</b></div>
      </div>
      <div class="app-preview__bars">
        <div class="app-preview__meter"><span style="width:72%"></span><label>Їжа 72%</label></div>
        <div class="app-preview__meter"><span style="width:45%"></span><label>Ціль «Відпустка» 45%</label></div>
      </div>
    </div>
  `
}
