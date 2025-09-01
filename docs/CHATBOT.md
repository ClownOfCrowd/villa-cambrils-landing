# 🤖 Чат-бот для Villa Cambrils Landing

## Обзор

Интеллектуальный чат-бот с поддержкой 4 языков (ES, EN, CA, RU) для ответов на вопросы о недвижимости. Включает базу знаний о вилле и умные алгоритмы распознавания вопросов.

## Возможности

### ✅ Реализовано

- **Многоязычность**: Полная поддержка ES, EN, CA, RU
- **База знаний**: Детальная информация о вилле из сайта и PDF
- **Умное распознавание**: Алгоритм pattern-matching для понимания вопросов
- **Responsive UI**: Красивый интерфейс с анимациями
- **Fallback система**: Автоматический переход к контактам агента
- **Форматирование**: Поддержка жирного текста и эмодзи

### 🔮 Возможности расширения

- **AI интеграция**: OpenAI GPT, Claude, или локальные LLM
- **PDF RAG**: Векторная база данных для поиска по документам
- **Голосовой ввод**: Web Speech API
- **История чатов**: LocalStorage или Backend
- **Analytics**: Отслеживание популярных вопросов

## Архитектура

```
src/
├── components/
│   └── ChatBot.jsx           # Основной компонент UI
├── utils/
│   ├── chatbotKnowledge.js   # База знаний и логика ответов
│   └── i18n.js               # Переводы интерфейса
└── docs/
    └── CHATBOT.md            # Эта документация
```

## База знаний

### Информация о вилле
- **Цена**: 1.499.990 €
- **Площадь**: 805 m² (построенная), 1.200 m² (участок)
- **Комнаты**: 6 спален, 5 ванных
- **Год постройки**: 2020
- **Энергокласс**: A
- **Особенности**: Бассейн, сад, гараж на 3 машины, терраса 150m²

### Расположение
- **Адрес**: Jardins Vilafortuny, Cambrils
- **До пляжа**: 1.4 км (5 мин на машине, 20 мин пешком)
- **До PortAventura**: 15 минут на машине
- **Транспорт**: Прямое сообщение с Барселоной и Таррагоной

### Технические характеристики
- Железобетонная конструкция
- Плоская эксплуатируемая кровля
- ПВХ окна с двойным остеклением
- Керамогранит и паркет
- Система умный дом
- Охранная сигнализация

## Алгоритм распознавания

### Pattern Matching
Система использует ключевые слова для определения темы вопроса:

```javascript
const patterns = {
  price: ['precio', 'price', 'preu', 'цена', 'стоимость'],
  size: ['tamaño', 'metros', 'size', 'площадь', 'm2'],
  location: ['ubicación', 'donde', 'where', 'расположение'],
  // ... другие паттерны
};
```

### Контекстные ответы
Для каждого языка генерируются персонализированные ответы с:
- **Эмодзи** для визуальной привлекательности
- **Жирным текстом** для важной информации
- **Детальными данными** из базы знаний
- **Призывом к действию** с контактами

## Интеграция с AI сервисами

### 🚀 OpenAI GPT (Рекомендуется)

```javascript
// Добавить в .env
VITE_OPENAI_API_KEY=your_api_key

// Обновить getChatBotResponse в chatbotKnowledge.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateAIResponse = async (userMessage, language) => {
  const systemPrompt = `
  Ты эксперт по недвижимости, отвечающий на ${language} языке. 
  Информация о вилле: ${JSON.stringify(villaKnowledgeBase[language])}
  
  Отвечай кратко, дружелюбно, используй эмодзи.
  Если не знаешь ответ - направляй к агенту: +34 677 743 005
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage }
    ],
    max_tokens: 300,
    temperature: 0.7
  });

  return response.choices[0].message.content;
};
```

### 🔒 Claude (Anthropic)

```javascript
// Аналогично, через Anthropic API
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});
```

### 🏠 Локальные LLM

Для полной приватности можно использовать:
- **Ollama** (llama2, mistral)
- **LM Studio**
- **Hugging Face Transformers**

## PDF RAG Integration

### Векторная база данных

```javascript
// Пример с простой векторизацией
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

// 1. Парсинг PDF (нужно добавить pdf-parse)
const chunks = await textSplitter.splitText(pdfText);

// 2. Создание embeddings
const vectorStore = await MemoryVectorStore.fromTexts(
  chunks,
  [],
  new OpenAIEmbeddings()
);

// 3. Поиск релевантной информации
const docs = await vectorStore.similaritySearch(userQuestion, 3);
```

## Конфигурация

### Файл настроек
```javascript
// src/config/chatbot.js
export const chatbotConfig = {
  // UI настройки
  maxMessageLength: 500,
  typingDelay: { min: 1000, max: 2000 },
  maxMessages: 50,
  
  // AI настройки
  aiProvider: 'openai', // 'openai' | 'anthropic' | 'local'
  temperature: 0.7,
  maxTokens: 300,
  
  // RAG настройки
  useRAG: false,
  chunkSize: 1000,
  chunkOverlap: 200,
  similarityThreshold: 0.8
};
```

## Аналитика и улучшения

### Сбор метрик
```javascript
// Добавить в sendMessage
const analytics = {
  timestamp: new Date(),
  language,
  userMessage,
  botResponse,
  responseTime: Date.now() - startTime,
  wasHelpful: null // можно добавить кнопки 👍/👎
};

// Отправка в Google Analytics, Mixpanel, или собственный backend
gtag('event', 'chatbot_interaction', analytics);
```

### A/B тестирование
- Разные алгоритмы ответов
- Различные UI варианты
- Тестирование промптов

## Деплой и мониторинг

### Environment Variables
```bash
# .env.production
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...
VITE_CHATBOT_ANALYTICS=true
VITE_DEBUG_MODE=false
```

### Мониторинг
- **Логи ошибок**: Sentry, LogRocket
- **Производительность**: Web Vitals
- **Конверсии**: Отслеживание переходов к агенту

## FAQ

### Q: Можно ли добавить голосовой ввод?
A: Да, через Web Speech API:
```javascript
const recognition = new webkitSpeechRecognition();
recognition.lang = getLanguageCode(language);
recognition.onresult = (event) => {
  setInputMessage(event.results[0][0].transcript);
};
```

### Q: Как обновить базу знаний?
A: Отредактируйте `src/utils/chatbotKnowledge.js` или подключите CMS.

### Q: Безопасно ли хранить API ключи в браузере?
A: Нет! Для продакшена используйте прокси-сервер или Vercel Edge Functions.

## Поддержка

Для вопросов по интеграции:
- 📧 **Email**: info@inmolarisa.com
- 📱 **WhatsApp**: +34 677 743 005

---

**Создано для Villa Cambrils Landing** 🏖️
