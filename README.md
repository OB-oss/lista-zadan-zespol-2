# 📋 Lista zadań  

Interaktywna aplikacja webowa typu **To-Do List**, stworzona w HTML, CSS i jQuery.  
Pozwala na dodawanie, usuwanie oraz reorganizację zadań przy użyciu prostych przycisków i animacji.  

![Podgląd aplikacji](img/screenshot.png)

---

## ✨ Funkcje  

- ➕ **Dodawanie zadań** – wpisz treść i kliknij "Dodaj".  
- 🗑️ **Usuwanie zadań** – kliknięcie w ikonę kosza usuwa zadanie z listy.  
- ⬆️⬇️ **Zmiana kolejności** – możesz przesuwać zadania w górę lub w dół listy.  
- 🎭 **Animacje** – przyciski sterujące pojawiają się płynnie przy najechaniu na zadanie.  
- 🌌 **Tło z efektami particles.js** – dynamiczne, interaktywne tło.  

---

## 🚀 Technologie  

Projekt korzysta z:  

- **HTML5** – struktura strony  
- **CSS3** – stylizacja oraz layout  
- **JavaScript (jQuery)** – logika aplikacji i interakcje  
- **[particles.js](https://github.com/VincentGarreau/particles.js/)** – animowane tło  

---

## 📂 Struktura projektu  

```
.
├── index.html          # Główny plik aplikacji
├── css/
│   └── style.css       # Style aplikacji
├── js/
│   └── script.js       # Logika listy zadań
├── bg/
│   ├── style.css       # Style tła
│   └── script.js       # Konfiguracja particles.js
├── img/
│   ├── bin.png         # Ikona kosza
│   ├── up_arrow.png    # Ikona strzałki w górę
│   └── down_arrow.png  # Ikona strzałki w dół
└── README.md           # Dokumentacja projektu
```

---

## ⚡ Jak uruchomić projekt  

1. Pobierz repozytorium:  
   ```bash
   git clone https://github.com/OB-oss/lista-zadan-zespol-2.git
   cd lista-zadan
   ```

2. Otwórz plik `index.html` w przeglądarce.  
   > Nie jest wymagany żaden serwer – projekt działa w trybie lokalnym.  

---

## 🛠️ Dalszy rozwój  

Możliwe kierunki rozbudowy:  

- ✅ Zapisywanie zadań w **LocalStorage**, aby lista nie resetowała się po odświeżeniu strony.  
- ✅ Dodanie opcji **edycji treści zadania**.  
- ✅ Tryb **ciemny/jasny** (Dark/Light mode).  
- ✅ Zliczanie liczby zadań i zadań ukończonych.  
- ✅ Eksport i import listy zadań (np. do pliku JSON).  

---

## 👨‍💻 Autor  

Projekt stworzony przez **[Oskara Bachanek](https://github.com/OB-oss)**.  
Inspiracja: klasyczne aplikacje typu To-Do.  

---

## 📜 Licencja  

Projekt dostępny na licencji **Creative Commons**.  
