public class Algo02Echange {
    public static void main(String[] args) {
        String a = "Ravel";
        String b = "Liszt";
        System.out.println("avant : a = " + a + ", b = " + b);

        final String tmp = a;
        a = b;
        b = tmp;

        System.out.println("apres : a = " + a + ", b = " + b);
    }
}
