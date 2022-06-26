package hacker_rank;

public class pangrams {
    public static void main(String[] args) {
        System.out.println(isPangram("We promptly judged antique ivory buckles for the next prize"));
        System.out.println(pangrammer("We judged antique ivory buckles for the next prize"));
    }///END OF MAIN

    public static boolean isPangram(String inputString){
      String alphabet = "abcdefghijklmnopqrstuvwx   yz";
        return inputString.contains(alphabet);
    }


    public static String pangrammer(String s){
        s = s.toLowerCase();
        boolean [] isPresent = new boolean[26];
        int index = 0;
        int flag = 1;
        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i) >= 'a' && s.charAt(i) <= 'z'){
                index = s.charAt(i) - 'a';
            }
            isPresent[index] = true;
        }
        for (int i = 0; i < 25; i++) {
            if (!isPresent[i]) {
                flag = 0;
                break;
            }
        }
        if(flag == 1){
            return "pangram";
        }
        return "not pangram";

    }











}///END OF CLASS
