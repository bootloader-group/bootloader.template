# Explainer co tu się kurwa dzieje

Jako, że jebanie się z sedami z palca już mnie zmęczyło to proponuję, żeby każdy z nas zrobił sobie skrypt robiący dumpa poprzez analogię do mojego.

## Pre-requirements

Żeby to Wam działało musicie w katalogu domowym utworzyć plik z Waszymi danymi do bazy mysql. Plik musi nazywać się `~/.my.cnf` oraz jego treść musi być analogiczna do schematu:

```
[mysqldump]
user=mysqluser
password=secret

[mysql]
user=mysqluser
password=secret
```

Mam na myśli, że przeklejacie to i zamiast `mysqluser` podajecie swojego usera do bazy oraz zamiast `secret` swoje hasło. Jeżeli robicie to na serwerze to ten plik **MUSI** mieć uprawnienia 600.

### Uwaga!

Wszystkie pliki w tym folderze muszą być executable:
```
chmod +x -R .
```

---

**UWAGA**: Wszystkie komendy wykonujemy dokładnie z tego folderu (z tego gdzie jest README czyli `./backend/migrations`).

## Jeżeli chcę zapisać i scommitować bazę:

Zamiast `SOURCE` we wszystkich poniższych komendach podajecie `zniszcz`, `szymon`, `marcin`, `int` lub `test`.

1. Wykonuje swój skrypt zapisujący:
``` console
./save_SOURCE.sh
```

2. Jeżeli nie ma zahardcodeowanych ścieżek commituje bazę. Skrypt powinien o tym poinformować.

## Jeżeli chcę załadować bazę

1. Oram bazę:
``` console
./load_SOURCE.sh
```
