class MOVE {
    constructor(){
        this.ort = 0;
        this.home = 0;
        this.delta = 0;
        this.stabil = 0;
    }

    setOrt(v){
        this.ort = v;
    }

    setHome(v){
        this.home = v;
    }

    compute(){
        this.delta = this.ort - this.home;
        this.stabil = ANKER.get();
    }

    status(){
        return {
            ort: this.ort,
            home: this.home,
            delta: this.delta,
            stabil: this.stabil
        };
    }
}

window.MOVE = new MOVE();
