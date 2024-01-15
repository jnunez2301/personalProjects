package com.roxc.presentacion;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;

@NoArgsConstructor
@Data
public class MergeAlternately {


    public String mergeStrings(String word1, String word2){
        int strLength = Math.max(word1.length(), word2.length());

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < strLength; i++) {
            if (i < word1.length()) {
                result.append(word1.charAt(i));
            }
            if (i < word2.length()) {
                result.append(word2.charAt(i));
            }
        }

        return result.toString();
    }
}
