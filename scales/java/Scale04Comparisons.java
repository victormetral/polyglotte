public class Scale04Comparisons {
    public static void main(String[] args) {
        int tempo = 92;
        int target = 120;
        System.out.println(tempo < target);
        System.out.println(tempo == 92);

        String a = "Chopin";
        String b = new String("Chopin");
        System.out.println(a == b);
        System.out.println(a.equals(b));

        System.out.println(Integer.compare(tempo, target));
    }
}
