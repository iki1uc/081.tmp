class ANKER {
    constructor(){
        this.value = 0;
        this.stabil = 0;
    }

    set(v){
        this.value = v;
        this.stabil = Math.sqrt(v * v);
    }

    get(){
        return this.stabil;
    }
}

window.ANKER = new ANKER();
