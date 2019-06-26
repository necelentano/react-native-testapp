# Тестовое задание на позицию React Native Developer

## Тестовое задание:
Реализовать галерею на базе React-Native (не React.js) которая будет отображать фотографии из unsplash. Это приложение должно извлекать ресурс в формате JSON.

## Документация Unsplash REST API : [API Documentation](https://unsplash.com/documentation)

## Приложение должно содержать два экрана(страницы):
* Список
	- мини изображение с названием и автором
	- когда пользователь нажимает на изображение, открывается экран фотографии 
* Фотография
	- отображает одну фотографию с максимальной площадью.

Предпочтительнее инициировать приложение через React Native CLI с помощью команды - react-native init TestApp, нежели чем через команду - create-react-native-app.


## Требуемые к применению технологии:
* React-Native
* Redux + Async Redux library (redux-thunk, redux-saga, e.g.)
* es6 (JS)
* Flexbox
* React Navigation [facebook.github.io/react-native/docs/navigation.html#react-navigation]
* fetch [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]

## Предлагаемые к применению технологии:
* Hooks
* компоненты высшего порядка (High Order Components)
* render props
* ref