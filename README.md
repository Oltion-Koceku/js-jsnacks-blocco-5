JSnack
===
Sviluppare i seguenti JSnack
- JSnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
- JSnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
- JSnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
- JSnack 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
- JSnack 5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

## Svolgimento :
1. Snack 1:
  - Creo un array di oggetti
  - creo una variabile let somma che ha come numero 0
  -  Con un ciclo forEach prendiamo il peso di tutte le zucchine e le sommaimo alla variabile
2. Snack 2:
  - Creo un array di oggetti
  - creo due variabili let somma che hanno come numero 0.
  -  Con un ciclo forEach prendiamo la lunghezza di tutte le zucchine e le aggiungiamo in un array in base alla lunghezza
  - sommo poi i due array nelle rispettive variabili.
3. Snack 3:
  - creiamo una costante booleana
  - con un ciclo while facciamo stampare un promt 
  - con un if creiamo una vlidazione stringa 
  - infine usiamo .split .rerverse e .join per capovolgere la stringa e aggiungerla in una variabile let 
4. Snack 4:
  - creiamo due Array con lo stesso numero di elementi
  - con un ciclo ForEach prendiamo un array troviamo l'elemento e l'index
  - in fine pushiamo dentro un arrey vuoto allinterno dello scope 
5. Snack 5:
  -  definiamo le nostre variabili e l'array in costanti globali
  - creiamo un array vuoto
  - con un ciclo foreach dell'array popolato
  - con un if distinguiamo se gli elementi dell'array sono compresi tra a e b
  - pushiamo il resto dentro l'
  arrey vuoto 