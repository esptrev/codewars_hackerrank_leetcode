package code_wars;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

public class DuplicateCharacters {
    public static void main(String[] args) {
        System.out.println(duplicateCounter("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZReturnsTwentySix"));
    }///END OF MAIN
    public static int duplicateCounter(String text){
        text = text.toLowerCase();
       char arr [] = text.toCharArray();
       Arrays.sort(arr);
       text = new String(arr);
        int repeated = 0;
        ArrayList<Integer> accumulate = new ArrayList<>();
        for (int i = 0; i < text.length(); i++) {
            for (int j = 0; j < text.length(); j++) {
                if(text.charAt(i) == text.charAt(j)){
                    repeated++;
                }
            }
            if(repeated > 1){
                accumulate.add(repeated);
            }
            String delete = String.valueOf(text.charAt(i)).trim();
            text = text.replaceAll(delete, "");
            repeated = 0;
        }
     return accumulate.size();
    }///END OF DC
}///END OF CLASS

