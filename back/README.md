# back/ — PHP side of the safestorage.ae customer login

These files are **not run from this repo**. Copy them to the PHP server (safestorage.in, `/var/www/costaging/back/application/`):

| This repo | PHP server |
|---|---|
| `back/modules/dubai/controllers/Dubai_auth.php` | `application/modules/dubai/controllers/Dubai_auth.php` |
| `back/config/dubai_back.php` | `application/config/dubai_back.php` (**fill in the key there only**) |

Endpoints (called only by the Next.js server, header `X-Dubai-Key`):
`POST https://safestorage.in/back/dubai/dubai_auth/login` · `POST .../dubai_auth/account`

Shared key: generate once (`openssl rand -hex 32`), put it in the PHP `config/dubai_back.php`
**and** in the Next server's `/home/ubuntu/shared/.env.local` as `DUBAI_BACK_KEY=...`, plus
`CUSTOMER_JWT_SECRET=<another 32+ random chars>`. Until both exist the login answers "not configured".

No new tables: logins are a copy of `Auth::login` — `ss_user` (role 6, status 0, base64 password) with **`user_country = 'AE'`**; failed attempts go to the
existing `ss_failed_login`, every attempt to `ss_login_logs`. Passwords use the existing format (base64) so current customers keep theirs.
This does not create accounts, reset passwords or send email.
