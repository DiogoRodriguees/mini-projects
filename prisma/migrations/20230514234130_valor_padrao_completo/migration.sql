-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tarefas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "completa" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_tarefas" ("completa", "descricao", "id") SELECT "completa", "descricao", "id" FROM "tarefas";
DROP TABLE "tarefas";
ALTER TABLE "new_tarefas" RENAME TO "tarefas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
