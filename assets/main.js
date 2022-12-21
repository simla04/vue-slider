var app = new Vue ({
    el: '#app',
    data: {
        // *rendo l'index dinamico così
        
        objImmagini: [
            {
                url: './assets/img/01.jpg',
                alt: 'descrizione immagine 1'
            },
            {
                url: './assets/img/02.jpg',
                alt: 'descrizione immagine 2'
            },
            {
                url: './assets/img/03.jpg',
                alt: 'descrizione immagine 3'
            },
            {
                url: './assets/img/04.jpg',
                alt: 'descrizione immagine 4'
            },
            {
                url: './assets/img/05.jpg',
                alt: 'descrizione immagine 5'
            },
        ],
        indexImmagini: 0,
    },
    // //si tratta di un ciclo di vita;
    //  entra in gioco quando viene caricato l'applicativo #app
    // mounted() {
    //     this.immagineSuccessiva()
    // },
    methods: {
        immagineSuccessiva() {
            // cambio indice in avanti
            // controllo che l'indice sia minore della lunghezza dell'oggetto
            if( this.indexImmagini < this.objImmagini.length-1 ) {
            this.indexImmagini++;
            } else {
                this.indexImmagini = 0;
            }
        },
        immaginePrecedente() {
            // se l'indice è minore di zero, torna all'ultimo elemento
            if( this.indexImmagini <= 0) {
                this.indexImmagini = this.objImmagini-1;
            } else {
                this.indexImmagini--;
            }
        },
        attivaIntervallo() {
            setIntervallo( ()=>{ this.immagineSuccessiva() }, 3000);
        }
    }
})