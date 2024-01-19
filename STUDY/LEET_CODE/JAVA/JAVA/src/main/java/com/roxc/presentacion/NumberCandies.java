package com.roxc.presentacion;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


public class NumberCandies {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int greatestKid = 0;
        List<Boolean> kids = new ArrayList<>();

        for (int i = 0; i < candies.length; i++) {
            greatestKid = Math.max(greatestKid, candies[i]);
        }

        for (int i = 0; i < candies.length; i++) {
            kids.add(candies[i] + extraCandies >= greatestKid);
        }

        return kids;
    }
}
