# ku-ui-kit

Vue 3 үшін жеңіл, дизайн-токендерге негізделген UI компоненттер жиынтығы. Soft/rounded стиль, light/dark тема қолдауы бар.

## Ерекшеліктері

- 🎨 **CSS Custom Properties (дизайн токендер)** арқылы толық теманы баптауға болады
- 🌗 **Light / Dark режим** — `.dark` класы арқылы автоматты
- 🪶 Жеңіл — Vue-дан басқа сыртқы тәуелділік жоқ
- 🧩 **Tree-shakeable** — тек қажетті компоненттерді импорттауға болады
- 🔌 CSS файлы міндетті түрде импорттаудың қажеті жоқ — компоненттер fallback мәндерімен де жұмыс істейді

## Орнату

```bash
npm install ku-ui-kit
```

## Қосу (Nuxt / Vue 3)

### Барлық компоненттерді бір реттен қосу (плагин арқылы)

```js
// plugins/ku-ui-kit.js (Nuxt) немесе main.js (Vue)
import KuUiKit from 'ku-ui-kit'
import 'ku-ui-kit/style.css'

const app = createApp(App)
app.use(KuUiKit)
```

Осыдан кейін барлық компонент `Ui` префиксімен глобалды қолжетімді болады: `<UiButton>`, `<UiBadge>`, `<UiToast>`.

### Тек керекті компонентті импорттау

```vue
<script setup>
import { Button, useToast } from 'ku-ui-kit'
import 'ku-ui-kit/style.css'
</script>

<template>
  <Button variant="primary">Сақтау</Button>
</template>
```

## Компоненттер

### `<UiButton>`

```vue
<UiButton variant="primary" size="md" @click="save">Сақтау</UiButton>
<UiButton variant="danger" loading>Жіберілуде...</UiButton>
<UiButton variant="ghost" icon-only><TrashIcon /></UiButton>
```

| Prop | Тип | Default | Сипаттама |
|---|---|---|---|
| `variant` | `primary \| soft \| secondary \| danger \| ghost` | `primary` | Визуалды стиль |
| `size` | `sm \| md \| lg` | `md` | Өлшемі |
| `loading` | `boolean` | `false` | Spinner көрсетеді, click-ті блоктайды |
| `disabled` | `boolean` | `false` | Батырманы өшіреді |
| `block` | `boolean` | `false` | Ені 100% |
| `iconOnly` | `boolean` | `false` | Квадрат/дөңгелек иконка режимі |

---

### `<UiBadge>`

```vue
<UiBadge variant="success">Белсенді</UiBadge>
<UiBadge variant="danger" outline dot>Қате</UiBadge>
<UiBadge variant="neutral" removable @remove="handleRemove">Тег</UiBadge>
```

| Prop | Тип | Default | Сипаттама |
|---|---|---|---|
| `variant` | `primary \| success \| warning \| danger \| neutral` | `primary` | Түс схемасы |
| `size` | `sm \| md \| lg` | `md` | Өлшемі |
| `outline` | `boolean` | `false` | Контур режимі (тек шекара, фон мөлдір) |
| `dot` | `boolean` | `false` | Түсті нүкте көрсетеді |
| `removable` | `boolean` | `false` | Жою (✕) батырмасын қосады |

---

### `<UiToast>` + `useToast()`

`<UiToast>` — контейнер компонент, оны қолданбаның түбірінде (`App.vue`) **бір рет** орналастыру жеткілікті:

```vue
<!-- App.vue -->
<template>
  <RouterView />
  <UiToast />
</template>
```

Кез келген компонентте шақыру:

```js
import { useToast } from 'ku-ui-kit'

const toast = useToast()

toast.success('Сәтті сақталды')
toast.danger('Қате орын алды')
toast.warning('Назар аударыңыз', 5000)   // 5 секунд көрсетіледі
toast.info('Хабарлама', 0)               // 0 = автоматты жабылмайды
```

| Метод | Параметрлер | Сипаттама |
|---|---|---|
| `success(message, duration?)` | `string, number` | Жасыл toast |
| `danger(message, duration?)` | `string, number` | Қызыл toast |
| `warning(message, duration?)` | `string, number` | Сары toast |
| `info(message, duration?)` | `string, number` | Көк toast |

`duration` — миллисекундпен, әдепкі `3500`. `0` берсе, toast автоматты жабылмайды, тек ✕ батырмасымен жабылады.

## Теманы баптау (Design Tokens)

Компоненттер CSS айнымалылары арқылы стильденеді. Өз брендіңе бейімдеу үшін жаңа `:root` анықтап, `ku-ui-kit/style.css`-тен **кейін** импорттаңыз:

```css
/* my-brand-tokens.css */
:root {
  --ku-accent: #FF6B00;
  --ku-radius-md: 4px;
  --ku-font: 'Roboto', sans-serif;
}
```

```js
import 'ku-ui-kit/style.css'      // 1) default тема
import './my-brand-tokens.css'    // 2) өз брендің (соңғы импорт жеңеді)
```

Толық токен тізімін `node_modules/ku-ui-kit/dist/tokens.css` файлынан көруге болады.

## Dark mode

```html
<html class="dark">
```

класы қосылса, барлық компоненттер автоматты түрде dark темаға ауысады.

## Лицензия

MIT