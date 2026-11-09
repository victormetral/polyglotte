public class Algo05LeapYear {
    public static void main(String[] args) {
        int year = 1900;
        boolean leap;

        if (year % 400 == 0) {
            leap = true;
        } else if (year % 100 == 0) {
            leap = false;
        } else if (year % 4 == 0) {
            leap = true;
        } else {
            leap = false;
        }

        System.out.println(leap);
    }
}
