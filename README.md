PRD-docs: [G-DOCS](https://docs.google.com/document/d/1jvQ2IFyPE-6qEDDy0bjbige_CqKcj95R7nXY2sfFpeo/edit?usp=sharing)
ERD : [DRAW SQL](https://drawsql.app/teams/coinz/diagrams/nutrilog)

---

Cara mengerjakan:

1. Buat folder baru
2. Buka folder di VSCode
3. Buka terminal di VSCode
4. Inisialisasi git:

```bash
git init
```

5. Set repository url

```bash
git remote add origin git@github.com:Devora-Devscale/Nutrilog.git
```

6. Pull repository

```bash
git pull origin main
```

7. Buat branch baru

```bash
git checkout -b feat/nama-fitur
```

8. Pengembangan fitur
   - buat file .env dari contoh file .env.example
   - untuk membuat environment development
     ```bash
     docker compose -f docker-compose.dev.yml up -d
     ```
   - tambahkan model pada file schema.prisma
   - db migrate:
     ```bash
     pnpm db:migrate
     ```
   - db generate:
     ```bash
     pnpm db:generate
     ```
   - run semua project:

     ```bash
     moon :dev
     ```

     atau

     ```bash
     pnpm run dev
     ```

   - atau bisa dijalankan satu per satu (dengan 2 terminal)
     ```bash
         pnpm dev:api
     ```
     ```bash
         pnpm dev:platform
     ```

9. Setelah selesai mengerjakan. Check format sebelum melakukan git commit.

```bash
pnpm lint
```

10. Fix format jika ada yang tidak sesuai

```bash
pnpm lint:fix
```

jika masih ada yang error, berarti perlu diperbaiki secara manual. Setelah selesai diperbaiki lanjutkan dengan langkah 9.

11. Stage kode

```bash
git add .
```

12. Commit kode

```bash
git commit -m "Pesan commit (gunakan best practice prefix commit message)"
```

13. Push kode ke github

```bash
git push origin feat/nama-branch
```

14. Buat pull request dari kode branch ke main. Assign mas Indra as reviewer dan kalian sebagai assignee
