import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GRAPHQL_DIR: string = path.join(__dirname, '../graphql');
const GENERATED_DIR: string = path.join(__dirname, '../graphql/__generate');

// Создаем директорию для сгенерированных файлов, если её нет
if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}

// Копируем все .graphql файлы в директорию __generate
const files: string[] = fs.readdirSync(GRAPHQL_DIR);
files.forEach((file: string) => {
  if (file.endsWith('.graphql')) {
    const sourcePath: string = path.join(GRAPHQL_DIR, file);
    const destPath: string = path.join(GENERATED_DIR, file);
    fs.copyFileSync(sourcePath, destPath);
  }
});

console.log('GraphQL files have been copied to __generate directory'); 