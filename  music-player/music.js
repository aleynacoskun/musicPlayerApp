class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3"),
    new Music("Gül ola harman ola", "Erkin koray","4.jpeg","4.mp3"),  
    new Music("Estarabim", "Erkin koray","5.jpeg","5.mp3"),
    new Music("Diva yorgun", "Melike şahin","6.jpeg","6.mp3")


 


];
