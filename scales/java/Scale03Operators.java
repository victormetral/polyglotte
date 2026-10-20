public class Scale03Operators {
    public static void main(String[] args) {
        int mesures = 32;
        int tempsParMesure = 4;
        int tempo = 120;

        int totalTemps = mesures * tempsParMesure;
        double minutes = (double) totalTemps / tempo;

        System.out.println("total : " + totalTemps + " temps");
        System.out.println("duree : " + minutes + " minutes");
        System.out.println(17 % 4);
        System.out.println(7 / 2);
    }
}
