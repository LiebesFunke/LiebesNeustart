# Публикация на GitHub (аккаунт ZeitFuerLiebe)

Сайт будет на **https://zeitfuerliebe.github.io/** (репозиторий `ZeitFuerLiebe.github.io`).

## 1. Партнёрская ссылка

Откройте `src/config/site.ts`:

```ts
partnerUrl: 'https://ВАША-ССЫЛКА',
```

Или секрет репозитория **VITE_PARTNER_URL** (Settings → Secrets and variables → Actions).

## 2. Свои фото в анкетах

Положите в `public/profiles/` файлы **`1.jpg` … `6.jpg`** (квадратные, от 400×400 px).  
Пока их нет — подставляются запасные фото (fallback в `data.ts`).

## 3. Репозиторий на GitHub

1. Войдите как **ZeitFuerLiebe**
2. **New repository** → имя **`ZeitFuerLiebe.github.io`** (точно так)
3. Public, без README при создании

## 4. Загрузить код

```powershell
cd C:\Users\User\findyourdating-clone
git add -A
git commit -m "Zeit für Liebe: GitHub Pages, Partner-Link, Mobile"
git branch -M main
git remote add origin https://github.com/ZeitFuerLiebe/ZeitFuerLiebe.github.io.git
git push -u origin main
```

Логин: **Personal Access Token** (Settings → Developer settings → Tokens), не пароль аккаунта.

## 5. GitHub Pages

Репозиторий → **Settings** → **Pages** → Source: **GitHub Actions**.

После push подождите 2–5 минут (workflow «Deploy GitHub Pages»).

## 6. Локальная проверка

```powershell
cd C:\Users\User\findyourdating-clone
npm install
npm run dev
```

Для проверки как на Pages: `$env:VITE_BASE_PATH="/"; npm run build; npm run preview`
