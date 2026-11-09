public class Scale05Conditions {
    public static void main(String[] args) {
        int tempo = 92;
        String marking;

         if (tempo < 60) {
            marking = "Largo";
        } else if (tempo < 108) {
            marking = "Andante";
        } else if (tempo < 168) {
            marking = "Allegro";
        } else {
            marking = "Presto";
        }
        System.out.println(marking);

        String speed = tempo >= 120 ? "fast" : "slow";
        System.out.println(speed);

        String note = "C";
        String name = switch (note) {
            case "C" -> "do";
            case "D" -> "re";
            default -> "unknown";
        };
        System.out.println(name);
    }
}
