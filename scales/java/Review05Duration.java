public class Review05Duration {
    public static void main(String[] args) {
        int total = 185;
        int minutes = total / 60;
        int seconds = total % 60;

        if (seconds < 10) {
            System.out.println(minutes + ":0" + seconds);
        } else {
            System.out.println(minutes + ":" + seconds);
        }
    }
}
