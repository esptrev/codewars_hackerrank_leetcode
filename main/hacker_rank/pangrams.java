package hacker_rank;

import java.lang.reflect.Array;

public class pangrams {
    public static void main(String[] args) {
        System.out.println(isPangram("We promptly judged antique ivory buckles for the next prize"));
        System.out.println(anagram("We promptly judged antique ivory buckles for the next prize"));
    }///END OF MAIN

    public static boolean isPangram(String inputString){
      String alphabet = "abcdefghijklmnopqrstuvwxyz";
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

    public static String anagram (String s){
        s = s.toLowerCase();
        String alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
        String [] splitAlpha = alphabet.split(",");
        for (String value : splitAlpha) {
            if (!s.contains(value)) {
                return "anagram = not pangram";
            }
        }
        return "anagram = pangram";
    }










}///END OF CLASS
