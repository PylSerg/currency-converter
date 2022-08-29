# Конвертер валют

## Описание

1. Header с курсом валют
2. В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH) Актуальный курс валют должен приходить с любого публичного API
   (https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json)

## Компонент с конвертацией

1. Для одной валюты должен быть свой input и select.
2. Отдельный input + select для первой валюты, и отдельный input + select для второй валюты
3. В input задается число, чтобы указать кол-во единиц для конвертирования
4. В select должно быть не менее трех валют - UAH, USD, EUR.
5. Конвертация должна происходить в обоих направлениях: при изменении значения в первой валюте, должно пересчитываться значение во второй, и наоборот; при изменении валюты в каждом select-е,
   конвертация обеих валют должна пересчитываться корректно.
