public class Algo03Duree {
    public static void main(String[] args) {
        int total = 185;
        int minutes = total / 60;
        int secondes = total % 60;

        if (secondes < 10) {
            System.out.println(minutes + ":0" + secondes);
        } else {
            System.out.println(minutes + ":" + secondes);
        }
    }
}
