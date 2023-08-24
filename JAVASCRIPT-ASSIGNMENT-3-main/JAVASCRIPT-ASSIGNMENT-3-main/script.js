public class SeatingArrangement {
    public static String getSeatingArrangement(int seatNumber, int rowNumber) {
        if (seatNumber < 1 || seatNumber > 72 || rowNumber < 1 || rowNumber > 18) {
            return "Invalid seat number or row number.";
        }

        int seatMod = (seatNumber - 1) % 8;
        String seatType;

        if (seatMod == 0 || seatMod == 7) {
            seatType = "Window Seat";
        } else if (seatMod == 1 || seatMod == 4) {
            seatType = "Middle Seat";
        } else {
            seatType = "Aisle Seat";
        }

        String berthType;

        if (rowNumber % 2 == 0) {
            berthType = "Lower Berth";
        } else {
            berthType = seatNumber % 2 == 0 ? "Middle Berth" : "Upper Berth";
        }

        return "Your seat is: " + berthType + " (" + seatType + ")";
    }

    public static void main(String[] args) {
        int seatNumber = 54;
        int rowNumber = 7;
        String result = getSeatingArrangement(seatNumber, rowNumber);
        System.out.println(result);
    }
}
